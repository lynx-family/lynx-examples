import type { BackgroundHost, BackgroundSessionConfig, Diagnostic, PlainObject, SuiteResult } from "./types.js";

const MAX_POST_ATTEMPTS = 3;
const MIN_POLL_INTERVAL_MS = 10;
const MAX_POLL_INTERVAL_MS = 250;
const MIN_SAFETY_MARGIN_MS = 50;
const MAX_SAFETY_MARGIN_MS = 1_000;
const MIN_POST_RESERVE_MS = 25;
const MAX_WAIT_SLICE_MS = 50;

interface PollingPolicy {
  readonly overallDeadline: number;
  readonly pollingDeadline: number;
  readonly cancelDeadline: number;
  readonly intervalMs: number;
}

type DeadlineWait<T> =
  | { readonly state: "value"; readonly value: T }
  | { readonly state: "error"; readonly error: unknown }
  | { readonly state: "deadline" };

function isPlainObject(value: unknown): value is PlainObject {
  if (value === null || typeof value !== "object" || Array.isArray(value)) return false;
  const prototype = Object.getPrototypeOf(value);
  return prototype === Object.prototype || prototype === null;
}

function requireOnePlainObject(name: string, count: number, value: unknown): PlainObject {
  if (count !== 1 || !isPlainObject(value)) throw new Error(`${name} expects exactly one plain object`);
  return value;
}

function invoke(host: BackgroundHost, name: string, input: PlainObject): Promise<unknown> {
  return new Promise((resolve) => host.callLepusMethod(name, input, resolve));
}

/**
 * Lynx bridge and fetch APIs do not expose cancellation. Their underlying work
 * can continue after this returns, but its settled value is intentionally only
 * retained in this local state and cannot alter an already terminal result.
 */
async function awaitUntil<T>(host: BackgroundHost, work: Promise<T>, deadline: number): Promise<DeadlineWait<T>> {
  let settled: DeadlineWait<T> | undefined;
  void work.then(
    (value) => {
      settled = { state: "value", value };
    },
    (error: unknown) => {
      settled = { state: "error", error };
    },
  );
  await Promise.resolve();
  while (settled === undefined && host.now() < deadline) {
    await host.sleep(Math.min(MAX_WAIT_SLICE_MS, deadline - host.now()));
  }
  return settled ?? { state: "deadline" };
}

function diagnostic(code: string, message: string): Diagnostic {
  return { severity: "error", code, message };
}

function pollingPolicy(devicePollBudgetMs: number, now: number): PollingPolicy {
  if (!Number.isSafeInteger(devicePollBudgetMs) || devicePollBudgetMs <= MIN_SAFETY_MARGIN_MS) {
    throw new Error("session devicePollBudgetMs must be a safe integer greater than the safety margin");
  }
  const safetyMarginMs = Math.min(
    MAX_SAFETY_MARGIN_MS,
    Math.max(MIN_SAFETY_MARGIN_MS, Math.ceil(devicePollBudgetMs / 10)),
  );
  const pollingBudgetMs = devicePollBudgetMs - safetyMarginMs;
  const overallDeadline = now + devicePollBudgetMs;
  const postReserveMs = Math.min(safetyMarginMs, Math.max(MIN_POST_RESERVE_MS, Math.floor(safetyMarginMs / 2)));
  return {
    overallDeadline,
    pollingDeadline: now + pollingBudgetMs,
    cancelDeadline: overallDeadline - postReserveMs,
    intervalMs: Math.min(MAX_POLL_INTERVAL_MS, Math.max(MIN_POLL_INTERVAL_MS, Math.floor(pollingBudgetMs / 20))),
  };
}

function infrastructure(
  executionStatus: "failed" | "timed_out" | "aborted",
  code: string,
  message: string,
): SuiteResult {
  return {
    assertionCount: 0,
    caseCount: 0,
    executionStatus,
    conformanceOutcome: "inconclusive",
    diagnostics: [diagnostic(code, message)],
    cases: [],
  };
}

function isComplete(value: unknown): value is { state: "complete"; result: SuiteResult } {
  return isPlainObject(value) && value.state === "complete" && isPlainObject(value.result);
}

function envelope(config: BackgroundSessionConfig, result: SuiteResult): PlainObject {
  return {
    protocolVersion: 1,
    session: { runId: config.runId, token: config.token, buildFingerprint: config.buildFingerprint, test: config.test },
    result,
  };
}

async function postWithAck(
  host: BackgroundHost,
  config: BackgroundSessionConfig,
  result: SuiteResult,
  deadline: number,
): Promise<void> {
  const body = JSON.stringify(envelope(config, result));
  let lastError = "collector did not return an accepted JSON acknowledgement";
  for (let attempt = 0; attempt < MAX_POST_ATTEMPTS; attempt += 1) {
    if (host.now() >= deadline) throw new Error("collector acknowledgement exceeded the session deadline");
    try {
      const fetched = await awaitUntil(
        host,
        host.fetch(config.endpoint, { method: "POST", headers: { "content-type": "application/json" }, body }),
        deadline,
      );
      if (fetched.state === "deadline") throw new Error("collector request exceeded the session deadline");
      if (fetched.state === "error") throw fetched.error;
      const acknowledged = await awaitUntil(host, fetched.value.json(), deadline);
      if (acknowledged.state === "deadline") throw new Error("collector acknowledgement exceeded the session deadline");
      if (acknowledged.state === "error") throw acknowledged.error;
      if (isPlainObject(acknowledged.value) && acknowledged.value.accepted === true) return;
      lastError = "collector rejected the result";
    } catch (error) {
      lastError = error instanceof Error ? error.message : String(error);
    }
  }
  throw new Error(lastError);
}

async function cancelMainThread(host: BackgroundHost, deadline: number): Promise<void> {
  const cancelled = await awaitUntil(host, invoke(host, "cancel", {}), deadline);
  if (cancelled.state === "error") return;
}

export function createBackgroundRuntime(
  config: BackgroundSessionConfig,
  host: BackgroundHost,
): { onLoad(input: PlainObject): Promise<SuiteResult>; cancel(input: PlainObject): Promise<SuiteResult> } {
  async function publish(result: SuiteResult, deadline: number): Promise<SuiteResult> {
    try {
      await postWithAck(host, config, result, deadline);
      return result;
    } catch {
      return infrastructure(
        "failed",
        "TRANSPORT_FAILURE",
        "collector acknowledgement was not received; runner timeout is authoritative",
      );
    }
  }

  async function timedOut(policy: PollingPolicy): Promise<SuiteResult> {
    await cancelMainThread(host, policy.cancelDeadline);
    return publish(
      infrastructure("timed_out", "POLL_TIMEOUT", "main-thread suite did not complete before the polling deadline"),
      policy.overallDeadline,
    );
  }

  async function onLoad(input: PlainObject): Promise<SuiteResult> {
    requireOnePlainObject("onLoad", arguments.length, input);
    const policy = pollingPolicy(config.devicePollBudgetMs, host.now());
    try {
      const started = await awaitUntil(host, invoke(host, "start", {}), policy.pollingDeadline);
      if (started.state === "deadline") return timedOut(policy);
      if (started.state === "error") throw started.error;
      while (host.now() < policy.pollingDeadline) {
        const polled = await awaitUntil(host, invoke(host, "poll", {}), policy.pollingDeadline);
        if (polled.state === "deadline") return timedOut(policy);
        if (polled.state === "error") throw polled.error;
        if (isComplete(polled.value) && host.now() < policy.pollingDeadline) {
          return publish(polled.value.result, policy.overallDeadline);
        }
        const remainingMs = policy.pollingDeadline - host.now();
        if (remainingMs > 0) await host.sleep(Math.min(policy.intervalMs, remainingMs));
      }
      return timedOut(policy);
    } catch (error) {
      await cancelMainThread(host, policy.cancelDeadline);
      return publish(
        infrastructure("failed", "BRIDGE_FAILURE", error instanceof Error ? error.message : String(error)),
        policy.overallDeadline,
      );
    }
  }

  async function cancel(input: PlainObject): Promise<SuiteResult> {
    requireOnePlainObject("cancel", arguments.length, input);
    const policy = pollingPolicy(config.devicePollBudgetMs, host.now());
    await cancelMainThread(host, policy.cancelDeadline);
    return publish(infrastructure("aborted", "CANCELLED", "background suite was cancelled"), policy.overallDeadline);
  }

  return { onLoad, cancel };
}
