import { createBackgroundRuntime, createMainThreadRuntime } from "./index.js";
import { renderBackgroundIndexTemplate, renderMainThreadProcessorTemplate } from "./templates.js";
import type {
  BackgroundHost,
  BackgroundSessionConfig,
  MainRuntimeApi,
  PlainObject,
  PublicManifest,
  SuiteResult,
} from "./types.js";

const manifest: PublicManifest = {
  cases: [
    {
      id: "case-a",
      title: "first",
      sectionKey: "case-a",
      assertions: [{ targetIndex: 0, selector: "text.first", property: "color", expected: "red" }, {
        targetIndex: 1,
        selector: "text.second",
        property: "color",
        expected: "blue",
      }],
    },
    {
      id: "case-b",
      title: "second",
      sectionKey: "case-b",
      assertions: [{ targetIndex: 0, selector: "text.first", property: "color", expected: "green" }, {
        targetIndex: 1,
        selector: "text.second",
        property: "color",
        expected: "yellow",
      }],
    },
  ],
};

function expect(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(message);
}
const tick = (): Promise<void> => new Promise((resolve) => queueMicrotask(resolve));

function isPlainObject(value: unknown): value is PlainObject {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function isSuiteResult(value: unknown): value is SuiteResult {
  return isPlainObject(value)
    && typeof value.assertionCount === "number"
    && typeof value.caseCount === "number"
    && typeof value.executionStatus === "string"
    && typeof value.conformanceOutcome === "string"
    && Array.isArray(value.diagnostics)
    && Array.isArray(value.cases);
}

function completeResult(value: PlainObject): SuiteResult | null {
  return value.state === "complete" && isSuiteResult(value.result) ? value.result : null;
}

async function waitForComplete(runtime: MainRuntimeApi): Promise<SuiteResult> {
  for (let turn = 0; turn < 32; turn += 1) {
    const completed = completeResult(runtime.poll({}));
    if (completed !== null) return completed;
    await tick();
  }
  throw new Error("runtime did not complete");
}

async function testAllCasesAndSemanticFailure(): Promise<void> {
  let section = "";
  const runtime = createMainThreadRuntime(manifest, {
    loadStyleSheet: (key, card) => ({ key, card }),
    replaceStyleSheets: (sheets) => {
      const first = sheets[0];
      if (first === undefined) section = "";
      else if (isPlainObject(first) && typeof first.key === "string") section = first.key;
      else throw new Error("invalid test stylesheet");
    },
    querySelectorAll: (selector) =>
      selector === "text.first"
        ? [{ getComputedStyleProperty: () => section === "case-a" ? "red" : section === "case-b" ? "green" : "black" }]
        : selector === "text.second"
        ? [{
          getComputedStyleProperty: () => section === "case-a" ? "blue" : section === "case-b" ? "purple" : "black",
        }]
        : [],
    flushLayout: () => undefined,
    requestAnimationFrame: (callback) => callback(),
  });
  expect(runtime.start({}).state === "started", "start must return synchronously");
  const completed = await waitForComplete(runtime);
  expect(completed.caseCount === 2 && completed.assertionCount === 4, "expected all manifest cases and assertions");
  expect(
    completed.executionStatus === "completed" && completed.conformanceOutcome === "fail",
    "a color mismatch is a semantic conformance failure",
  );
  expect(
    completed.cases[0]?.status === "pass" && completed.cases[1]?.status === "fail",
    "expected ordered per-case results",
  );
}

async function testInfrastructureFailure(): Promise<void> {
  const runtime = createMainThreadRuntime({ cases: [manifest.cases[0]] }, {
    loadStyleSheet: () => ({}),
    replaceStyleSheets: () => undefined,
    querySelectorAll: (selector) => selector === "text.first" ? [{ getComputedStyleProperty: () => 42 }] : [],
    flushLayout: async () => undefined,
    requestAnimationFrame: (callback) => callback(),
  });
  runtime.start({});
  const completed = await waitForComplete(runtime);
  expect(
    completed.executionStatus === "failed" && completed.conformanceOutcome === "inconclusive",
    "invalid computed style is infrastructure failure",
  );
  expect(completed.cases[0].status === "error", "expected a case-level error result");
}

async function testDisplayMismatchCannotPass(): Promise<void> {
  const selectors: string[] = [];
  const properties: string[] = [];
  const displayManifest: PublicManifest = {
    cases: [{
      ...manifest.cases[0],
      assertions: [{
        ...manifest.cases[0].assertions[0],
        selector: "view.target",
        property: "display",
        expected: "none",
      }],
    }],
  };
  const runtime = createMainThreadRuntime(displayManifest, {
    loadStyleSheet: () => ({}),
    replaceStyleSheets: () => undefined,
    querySelectorAll: (selector) => {
      selectors.push(selector);
      return selector === "view.target"
        ? [{
          getComputedStyleProperty: (property) => {
            properties.push(property);
            return property === "display" ? "flex" : "none";
          },
        }]
        : [];
    },
    flushLayout: async () => undefined,
    requestAnimationFrame: (callback) => callback(),
  });
  runtime.start({});
  const completed = await waitForComplete(runtime);
  expect(
    completed.executionStatus === "completed" && completed.conformanceOutcome === "fail",
    "a display mismatch must be a semantic failure, not a false pass",
  );
  expect(
    completed.cases[0].assertions[0]?.actual === "flex" && completed.cases[0].assertions[0]?.status === "fail",
    "display must be compared against its actual computed value",
  );
  expect(
    selectors.length > 0 && selectors.every((selector) => selector === "view.target"),
    "the runtime must resolve the declared selector",
  );
  expect(
    properties.length > 0 && properties.every((property) => property === "display"),
    "the runtime must read the declared display property",
  );
}

async function testInvalidSelectorFailsClosed(): Promise<void> {
  let selectorReads = 0;
  const invalidManifest: PublicManifest = {
    cases: [{ ...manifest.cases[0], assertions: [{ ...manifest.cases[0].assertions[0], selector: "text > .target" }] }],
  };
  const runtime = createMainThreadRuntime(invalidManifest, {
    loadStyleSheet: () => ({}),
    replaceStyleSheets: () => undefined,
    querySelectorAll: () => {
      selectorReads += 1;
      return [];
    },
    flushLayout: async () => undefined,
    requestAnimationFrame: (callback) => callback(),
  });
  runtime.start({});
  const completed = await waitForComplete(runtime);
  expect(
    completed.executionStatus === "failed" && completed.conformanceOutcome === "inconclusive",
    "invalid selectors must be structured infrastructure failures",
  );
  expect(
    completed.cases[0].diagnostics[0]?.code === "EXECUTION_ERROR"
      && /invalid computed-style selector/.test(completed.cases[0].diagnostics[0]?.message ?? ""),
    "invalid selectors must retain the execution failure diagnostic",
  );
  expect(selectorReads === 0, "invalid selectors must fail before querying the host");
}

async function testMissingSheetStopsSuite(): Promise<void> {
  let replacements = 0;
  const runtime = createMainThreadRuntime(manifest, {
    loadStyleSheet: () => undefined,
    replaceStyleSheets: () => {
      replacements += 1;
    },
    querySelectorAll: () => [{ getComputedStyleProperty: () => "black" }],
    flushLayout: async () => undefined,
    requestAnimationFrame: (callback) => callback(),
  });
  runtime.start({});
  const completed = await waitForComplete(runtime);
  expect(
    completed.executionStatus === "failed" && completed.conformanceOutcome === "inconclusive",
    "missing stylesheet must be infrastructure failure",
  );
  expect(
    completed.caseCount === 1 && completed.cases[0]?.status === "error",
    "suite must stop after contaminated case error",
  );
  expect(replacements === 1, "missing stylesheet must not be applied before cleanup");
}

async function testEnvelopeReplay(): Promise<void> {
  const bodies: string[] = [];
  const background = createBackgroundRuntime(sessionConfig(), {
    callLepusMethod: (name, _input, callback) =>
      callback(
        name === "poll"
          ? {
            state: "complete",
            result: {
              assertionCount: 0,
              caseCount: 0,
              executionStatus: "completed",
              conformanceOutcome: "pass",
              diagnostics: [],
              cases: [],
            },
          }
          : { state: "started" },
      ),
    fetch: async (_url, init) => {
      bodies.push(init.body);
      return { json: async () => bodies.length === 2 ? { accepted: true } : { accepted: false } };
    },
    sleep: async () => undefined,
    now: () => 0,
  });
  const result = await background.onLoad({});
  expect(result.executionStatus === "completed" && bodies.length === 2, "expected retry until JSON ACK");
  expect(bodies[0] === bodies[1], "retries must replay the identical envelope");
  const envelope: unknown = JSON.parse(bodies[0] ?? "");
  expect(
    isPlainObject(envelope) && envelope.protocolVersion === 1 && isPlainObject(envelope.session),
    "expected a protocol v1 result envelope",
  );
  expect(
    envelope.session.runId === "run-1" && !("attempt" in envelope),
    "expected exact protocol envelope without attempt field",
  );
}

async function testCancellationPublishesInfrastructureResult(): Promise<void> {
  let posted: unknown;
  const background = createBackgroundRuntime(sessionConfig(), {
    callLepusMethod: (_name, _input, callback) => callback({ state: "cancelling" }),
    fetch: async (_url, init) => {
      posted = JSON.parse(init.body);
      return { json: async () => ({ accepted: true }) };
    },
    sleep: async () => undefined,
    now: () => 0,
  });
  const result = await background.cancel({});
  expect(
    result.executionStatus === "aborted" && result.conformanceOutcome === "inconclusive",
    "cancel must become an infrastructure result",
  );
  const postedResult = isPlainObject(posted) ? posted.result : undefined;
  expect(
    isPlainObject(postedResult) && postedResult.executionStatus === "aborted",
    "cancel result must be posted to the collector",
  );
}

function sessionConfig(devicePollBudgetMs = 60_000): BackgroundSessionConfig {
  return {
    endpoint: "http://127.0.0.1/result",
    runId: "run-1",
    token: "A".repeat(43),
    buildFingerprint: "build-1234",
    devicePollBudgetMs,
    test: { id: "test-1", profile: "default", sourceHash: "a".repeat(64) },
  };
}

async function testTimeoutUsesSessionBudgetAndCancels(): Promise<void> {
  let now = 0;
  let pollCount = 0;
  let cancelled = 0;
  const sleeps: number[] = [];
  const host: BackgroundHost = {
    callLepusMethod: (name, _input, callback) => {
      if (name === "poll") pollCount += 1;
      if (name === "cancel") cancelled += 1;
      callback(name === "start" ? { state: "started" } : { state: "pending" });
    },
    fetch: async () => ({ json: async () => ({ accepted: true }) }),
    sleep: async (milliseconds) => {
      sleeps.push(milliseconds);
      now += milliseconds;
    },
    now: () => now,
  };
  const result = await createBackgroundRuntime(sessionConfig(1_000), host).onLoad({});
  expect(result.executionStatus === "timed_out", "an unfinished suite must time out using the session budget");
  expect(cancelled === 1, "timeout must cancel the main-thread suite before publishing");
  expect(pollCount > 3, "a one-second host budget must not use the former fixed poll cap");
  expect(now === 900, "polling must stop at the 10% delivery safety margin");
  expect(sleeps.every((milliseconds) => milliseconds > 0 && milliseconds <= 250), "polling sleeps must remain bounded");
}

async function testSlowPollCannotOverrunDeliveryMargin(): Promise<void> {
  let now = 0;
  let cancelled = 0;
  const host: BackgroundHost = {
    callLepusMethod: (name, _input, callback) => {
      if (name === "poll") now += 950;
      if (name === "cancel") cancelled += 1;
      callback(name === "start" ? { state: "started" } : { state: "pending" });
    },
    fetch: async () => ({ json: async () => ({ accepted: true }) }),
    sleep: async () => undefined,
    now: () => now,
  };
  const result = await createBackgroundRuntime(sessionConfig(1_000), host).onLoad({});
  expect(
    result.executionStatus === "timed_out" && cancelled === 1,
    "a slow bridge poll must leave the suite cancelled and the delivery margin intact",
  );
  expect(now === 950, "the deadline must be checked after a slow poll, not only before it");
}

async function testHungStartStopsWaitingAtThePollingDeadline(): Promise<void> {
  let now = 0;
  let cancellations = 0;
  const host: BackgroundHost = {
    callLepusMethod: (name, _input, callback) => {
      if (name === "cancel") {
        cancellations += 1;
        return;
      }
      if (name !== "start") callback({ state: "pending" });
    },
    fetch: async () => ({ json: async () => ({ accepted: true }) }),
    sleep: async (milliseconds) => {
      now += milliseconds;
    },
    now: () => now,
  };
  const result = await createBackgroundRuntime(sessionConfig(1_000), host).onLoad({});
  expect(result.executionStatus === "timed_out", "a start callback that never arrives must become a timed-out result");
  expect(cancellations === 1 && now === 950, "hung start and its bounded cleanup must preserve the final POST reserve");
}

async function testHungPollStopsWaitingAndCancels(): Promise<void> {
  let now = 0;
  let cancellations = 0;
  const host: BackgroundHost = {
    callLepusMethod: (name, _input, callback) => {
      if (name === "cancel") {
        cancellations += 1;
        callback({ state: "cancelling" });
      } else if (name === "start") callback({ state: "started" });
    },
    fetch: async () => ({ json: async () => ({ accepted: true }) }),
    sleep: async (milliseconds) => {
      now += milliseconds;
    },
    now: () => now,
  };
  const result = await createBackgroundRuntime(sessionConfig(1_000), host).onLoad({});
  expect(result.executionStatus === "timed_out", "a poll callback that never arrives must become a timed-out result");
  expect(cancellations === 1 && now === 900, "a hung poll must stop at the polling deadline before cleanup");
}

async function testHungExplicitCancelDoesNotBlockPublication(): Promise<void> {
  let now = 0;
  const host: BackgroundHost = {
    callLepusMethod: () => undefined,
    fetch: async () => ({ json: async () => ({ accepted: true }) }),
    sleep: async (milliseconds) => {
      now += milliseconds;
    },
    now: () => now,
  };
  const result = await createBackgroundRuntime(sessionConfig(1_000), host).cancel({});
  expect(
    result.executionStatus === "aborted",
    "an explicit cancel must publish even when its bridge callback never arrives",
  );
  expect(now === 950, "explicit cancellation must leave a bounded reserve for delivery");
}

async function testTimeoutCancellationWinsOverLateMainThreadCompletion(): Promise<void> {
  let now = 0;
  let releaseLayout: (() => void) | undefined;
  const layoutBlocked = new Promise<void>((resolve) => {
    releaseLayout = resolve;
  });
  const main = createMainThreadRuntime({ cases: [manifest.cases[0]] }, {
    loadStyleSheet: () => ({}),
    replaceStyleSheets: () => undefined,
    querySelectorAll: (selector) =>
      selector === "text.first"
        ? [{ getComputedStyleProperty: () => "red" }]
        : [{ getComputedStyleProperty: () => "blue" }],
    flushLayout: () => layoutBlocked,
    requestAnimationFrame: (callback) => callback(),
  });
  const published: SuiteResult[] = [];
  const background = createBackgroundRuntime(sessionConfig(100), {
    callLepusMethod: (name, input, callback) => {
      const response = name === "start"
        ? main.start(input)
        : name === "poll"
        ? main.poll(input)
        : name === "cancel"
        ? main.cancel(input)
        : (() => {
          throw new Error(`unexpected bridge method ${name}`);
        })();
      callback(response);
    },
    fetch: async (_url, init) => {
      const posted = JSON.parse(init.body) as { result: SuiteResult };
      published.push(posted.result);
      return { json: async () => ({ accepted: true }) };
    },
    sleep: async (milliseconds) => {
      now += milliseconds;
    },
    now: () => now,
  });

  const timedOut = await background.onLoad({});
  expect(
    timedOut.executionStatus === "timed_out" && timedOut.conformanceOutcome === "inconclusive",
    "the background must time out at its absolute polling deadline",
  );
  expect(
    published.length === 1 && published[0]?.executionStatus === "timed_out",
    "the timed-out background result must be the only result published",
  );
  const cancelled = completeResult(main.poll({}));
  expect(
    cancelled?.executionStatus === "aborted" && cancelled.conformanceOutcome === "inconclusive",
    "cancel acknowledgement must promptly expose an aborted main-thread terminal result",
  );

  releaseLayout?.();
  await tick();
  await tick();
  const afterLateCompletion = completeResult(main.poll({}));
  expect(
    afterLateCompletion?.executionStatus === "aborted" && afterLateCompletion.conformanceOutcome === "inconclusive",
    "a released late operation must not overwrite cancellation with a pass",
  );
  expect(
    published.length === 1 && published[0]?.executionStatus === "timed_out",
    "late main-thread completion must not leak a second or passing publication",
  );
}

async function testHungFetchCannotChangeTheTerminalResultLater(): Promise<void> {
  let now = 0;
  let fetches = 0;
  let resolveFetch: ((value: { json(): Promise<unknown> }) => void) | undefined;
  const lateFetch = new Promise<{ json(): Promise<unknown> }>((resolve) => {
    resolveFetch = resolve;
  });
  const host: BackgroundHost = {
    callLepusMethod: (name, _input, callback) =>
      callback(
        name === "poll"
          ? {
            state: "complete",
            result: {
              assertionCount: 0,
              caseCount: 0,
              executionStatus: "completed",
              conformanceOutcome: "pass",
              diagnostics: [],
              cases: [],
            },
          }
          : { state: "started" },
      ),
    fetch: () => {
      fetches += 1;
      return lateFetch;
    },
    sleep: async (milliseconds) => {
      now += milliseconds;
    },
    now: () => now,
  };
  const result = await createBackgroundRuntime(sessionConfig(1_000), host).onLoad({});
  expect(
    result.executionStatus === "failed" && result.diagnostics[0]?.code === "TRANSPORT_FAILURE",
    "a hanging fetch must stop waiting at the overall deadline",
  );
  expect(now === 1_000 && fetches === 1, "a deadline-expired fetch must not retry beyond the session budget");
  resolveFetch?.({ json: async () => ({ accepted: true }) });
  await tick();
  expect(result.executionStatus === "failed", "a late fetch settlement must not alter an already terminal result");
}

function testTemplates(): void {
  const processor = renderMainThreadProcessorTemplate({
    manifestImportPath: "./generated/manifest.json",
    runtimeImportPath: "../../../tools/nonvisual-runtime/index.js",
  });
  const background = renderBackgroundIndexTemplate({ runtimeImportPath: "../../../tools/nonvisual-runtime/index.js" });
  expect(!/registerDataProcessor/.test(processor), "React processors do not register classic template preprocessing");
  expect(
    /import generatedManifest from "\.\/generated\/manifest\.json"/.test(processor)
      && /generatedManifest as PublicManifest/.test(processor),
    "processor must import the card-local manifest rather than embed it",
  );
  expect(
    /bridge\.start/.test(processor) && /bridge\.poll/.test(processor) && /bridge\.cancel/.test(processor),
    "processor must mount namespaced bridge globals",
  );
  expect(
    /import \{ initGlobalEnv \} from ["']\.\.\/\.\.\/\.\.\/tools\/nonvisual-runtime\/main-thread-env\.js["']/.test(
      processor,
    ) && /initGlobalEnv\(\)/.test(processor),
    "processor must explicitly initialize classic main-thread Element APIs",
  );
  expect(
    /flushLayout: \(\) => \{[\s\S]*__FlushElementTree\(\);/.test(processor)
      && !/onLayoutReady|triggerLayout/.test(processor),
    "processor must use the synchronous main-thread layout flush API",
  );
  expect(/if \(__MAIN_THREAD__\)/.test(processor), "bridge installation must be a main-thread function");
  expect(
    !/if \(typeof __LoadStyleSheet !== 'undefined' &&[\s\S]*const runtime/.test(processor),
    "missing capabilities must not prevent bridge mounting",
  );
  expect(
    /getComputedStyleProperty/.test(processor)
      && /__GetComputedStyleByKey\(element\.element, property\)/.test(processor),
    "processor must prefer the public computed-style API with a native fallback",
  );
  expect(
    /querySelectorAll: \(selector\) => mainThreadLynx\(\)\.querySelectorAll\(selector\)/.test(processor)
      && /getComputedStyleProperty\(property: string\)/.test(processor),
    "processor must forward declared selectors and properties to the main-thread APIs",
  );
  expect(!/token|runId|endpoint|lynxCoreInject/.test(processor), "processor must remain session and background free");
  expect(
    /useTestharness/.test(background) && /'main thread'/.test(background),
    "React bridge uses the committed-card hook and main-thread calls",
  );
  expect(!/Card\(/.test(background), "React entry must not use Card");
  expect(!/token|runId|endpoint/.test(background), "entry must remain session free");
}

await testAllCasesAndSemanticFailure();
await testInfrastructureFailure();
await testDisplayMismatchCannotPass();
await testInvalidSelectorFailsClosed();
await testMissingSheetStopsSuite();
await testEnvelopeReplay();
await testCancellationPublishesInfrastructureResult();
await testTimeoutUsesSessionBudgetAndCancels();
await testSlowPollCannotOverrunDeliveryMargin();
await testHungStartStopsWaitingAtThePollingDeadline();
await testHungPollStopsWaitingAndCancels();
await testHungExplicitCancelDoesNotBlockPublication();
await testTimeoutCancellationWinsOverLateMainThreadCompletion();
await testHungFetchCannotChangeTheTerminalResultLater();
testTemplates();
console.log("nonvisual-runtime tests passed");
