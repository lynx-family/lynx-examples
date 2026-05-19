import { serve } from "@hono/node-server";
import { getConnInfo } from "@hono/node-server/conninfo";
import { serveStatic } from "@hono/node-server/serve-static";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { networkInterfaces } from "node:os";
import { dirname, posix, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { z } from "zod";
import { replyToChat } from "./chat-service.js";

export type StartServerOptions = {
  host?: string;
  port?: number;
};

export type ServerHandle = ReturnType<typeof serve>;

const serverDir = dirname(fileURLToPath(import.meta.url));
const clientDistDir = resolve(serverDir, "..", "client");

const resolveLocalHost = () => {
  for (const entries of Object.values(networkInterfaces())) {
    for (const ni of entries ?? []) {
      if (ni.family === "IPv4" && !ni.internal) {
        return ni.address;
      }
    }
  }

  return "127.0.0.1";
};

const waitForListening = (server: ServerHandle) => {
  return new Promise<void>((resolve, reject) => {
    server.once("listening", () => resolve());
    server.once("error", (error) => reject(error));
  });
};

const isPortInUseError = (error: unknown) => {
  return (
    error instanceof Error
    && "code" in error
    && (error as { code?: string }).code === "EADDRINUSE"
  );
};

export const createApp = () => {
  const app = new Hono();

  app.use("*", logger());
  app.use(
    "*",
    serveStatic({
      root: clientDistDir,
      rewriteRequestPath: (path) => {
        const normalized = posix.normalize(path);
        if (normalized.startsWith("..")) return "/__forbidden__";
        if (normalized === "/") return "client.lynx.bundle";
        return normalized;
      },
    }),
  );
  const lanHost = resolveLocalHost();
  // Restricts browser-origin clients only; native Lynx requests are unaffected by CORS.
  app.use(
    "/api/*",
    cors({
      origin: (origin) => {
        if (!origin) return null;
        try {
          const { hostname } = new URL(origin);
          if (
            hostname === "localhost"
            || hostname === "127.0.0.1"
            || hostname === "::1"
            || hostname === lanHost
          ) {
            return origin;
          }
          return null;
        } catch {
          return null;
        }
      },
    }),
  );

  const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
  const RATE_LIMIT_WINDOW_MS = 60_000;
  const RATE_LIMIT_MAX = 20;

  // Evict expired buckets every minute to prevent unbounded memory growth.
  setInterval(() => {
    const now = Date.now();
    for (const [ip, bucket] of rateLimitMap) {
      if (now >= bucket.resetAt) rateLimitMap.delete(ip);
    }
  }, RATE_LIMIT_WINDOW_MS).unref();

  app.use("/api/*", async (c, next) => {
    // Note: uses the raw socket address. Behind a reverse proxy all requests share
    // the proxy IP — replace with X-Forwarded-For parsing if needed.
    const ip = getConnInfo(c).remote.address ?? "unknown";
    const now = Date.now();
    let bucket = rateLimitMap.get(ip);
    if (!bucket || now >= bucket.resetAt) {
      bucket = { count: 0, resetAt: now + RATE_LIMIT_WINDOW_MS };
      rateLimitMap.set(ip, bucket);
    }
    bucket.count++;
    if (bucket.count > RATE_LIMIT_MAX) {
      return c.json({ error: "Too many requests. Try again later." }, 429);
    }
    return next();
  });

  app.get("/favicon.ico", (c) => {
    return c.body(null, 204);
  });

  const chatRequestSchema = z.object({
    messages: z.array(
      z.object({
        id: z.string(),
        role: z.enum(["assistant", "system", "user"]),
        content: z.string().max(8000),
      }),
    ).max(40),
  });

  app.get("/health", (c) => {
    return c.json({
      ok: true,
      mode: process.env.OPENAI_API_KEY ? "openai-or-compatible" : "mock",
      model: process.env.OPENAI_MODEL || "gpt-4o-mini",
    });
  });

  app.post("/api/chat", async (c) => {
    const json = await c.req.json();
    const parsed = chatRequestSchema.safeParse(json);

    if (!parsed.success) {
      return c.json(
        {
          error: "Invalid request body.",
          issues: parsed.error.issues,
        },
        400,
      );
    }

    const reply = await replyToChat(parsed.data.messages);
    return c.json(reply);
  });

  return app;
};

export const startServer = async ({
  host = resolveLocalHost(),
  port = 8787,
}: StartServerOptions = {}) => {
  const app = createApp();
  let currentPort = port;

  while (true) {
    const server = serve({
      fetch: app.fetch,
      port: currentPort,
      hostname: host,
    });

    try {
      await waitForListening(server);
      const address = server.address();
      const actualPort = typeof address === "object" && address ? address.port : currentPort;

      console.info(`Hono chat server listening on http://${host}:${actualPort}`);
      if (host !== "127.0.0.1" && host !== "localhost") {
        console.warn("⚠️  Server is exposed on the LAN. Do not run on untrusted networks.");
      }

      return {
        server,
        host,
        port: actualPort,
        serverUrl: `http://${host}:${actualPort}`,
      };
    } catch (error) {
      try {
        server.close();
      } catch {
        // Ignore close failures while retrying the next port.
      }

      if (isPortInUseError(error)) {
        currentPort += 1;
        continue;
      }

      throw error;
    }
  }
};
