import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { stdin, stdout } from "node:process";
import { createInterface } from "node:readline/promises";

export const rootDir = resolve(import.meta.dirname, "../../");
export const envPath = resolve(rootDir, ".env.local");

const requiredEnvFields = [
  {
    key: "OPENAI_API_KEY",
    label: "OPENAI_API_KEY",
    description: "OpenAI API key",
  },
  {
    key: "OPENAI_BASE_URL",
    label: "OPENAI_BASE_URL",
    description: "OpenAI base URL",
  },
  { key: "OPENAI_MODEL", label: "OPENAI_MODEL", description: "OpenAI model" },
] as const;

type RequiredEnvKey = (typeof requiredEnvFields)[number]["key"];

const parseDotEnvContent = (content: string) => {
  const values: Partial<Record<RequiredEnvKey, string>> = {};

  for (const rawLine of content.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;

    const separatorIndex = line.indexOf("=");
    if (separatorIndex === -1) continue;

    const key = line.slice(0, separatorIndex).trim() as RequiredEnvKey;
    let value = line.slice(separatorIndex + 1).trim();

    if (
      (value.startsWith("\"") && value.endsWith("\""))
      || (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    if (requiredEnvFields.some((field) => field.key === key)) {
      values[key] = value;
    }
  }

  return values;
};

const serializeDotEnvContent = (
  values: Record<RequiredEnvKey, string>,
) =>
  `# OpenAI API key
OPENAI_API_KEY=${values.OPENAI_API_KEY}
# OpenAI base URL
OPENAI_BASE_URL=${values.OPENAI_BASE_URL}
# OpenAI model
OPENAI_MODEL=${values.OPENAI_MODEL}
`;

const maskSecretValue = (value: string): string => {
  if (value.length <= 10) return "***";
  return `${value.slice(0, 6)}...${value.slice(-4)}`;
};

const isSecretField = (key: string): boolean =>
  key.toUpperCase().includes("KEY") || key.toUpperCase().includes("SECRET");

const promptForRequiredEnvValues = async (
  initialValues: Partial<Record<RequiredEnvKey, string>>,
) => {
  if (!stdin.isTTY || !stdout.isTTY) {
    throw new Error(
      "Interactive setup requires a TTY. Please set the required environment variables before running the CLI.",
    );
  }

  const rl = createInterface({
    input: stdin,
    output: stdout,
  });

  const resolvedValues = { ...initialValues } as Record<RequiredEnvKey, string>;

  for (const field of requiredEnvFields) {
    while (true) {
      const currentValue = resolvedValues[field.key]?.trim() ?? "";
      const displayValue = currentValue && isSecretField(field.key)
        ? maskSecretValue(currentValue)
        : currentValue;
      const promptSuffix = displayValue ? ` [${displayValue}]` : "";
      const answer = await rl.question(`${field.description}${promptSuffix}: `);
      const nextValue = answer.trim() || currentValue;

      if (!nextValue) {
        stdout.write(`${field.label} is required.\n`);
        continue;
      }

      resolvedValues[field.key] = nextValue;
      break;
    }
  }

  rl.close();

  return resolvedValues;
};

export const prepareDotEnvLocal = async () => {
  if (process.env.CHAT_ENV_PREPARED === "1") {
    return parseDotEnvContent(
      existsSync(envPath) ? readFileSync(envPath, "utf8") : "",
    );
  }

  const existingValues = existsSync(envPath)
    ? parseDotEnvContent(readFileSync(envPath, "utf8"))
    : {};

  const mergedValues = { ...existingValues } as Record<RequiredEnvKey, string>;
  const interactiveValues = await promptForRequiredEnvValues(mergedValues);

  writeFileSync(envPath, serializeDotEnvContent(interactiveValues), "utf8");

  for (const [key, value] of Object.entries(interactiveValues)) {
    process.env[key] = value;
  }

  process.env.CHAT_ENV_PREPARED = "1";

  return interactiveValues;
};
