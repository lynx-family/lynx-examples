import type {
  AssertionResult,
  CaseResult,
  Diagnostic,
  MainRuntimeApi,
  MainThreadHost,
  PlainObject,
  PublicCase,
  PublicManifest,
  SuiteResult,
} from "./types.js";

const CARD_NAME = "__Card__" as const;
const MAX_STABILIZATION_FRAMES = 8;
const SAFE_SELECTOR =
  /^(?=.{1,128}$)(?:(?:[A-Za-z][A-Za-z0-9-]{0,63})(?:[.#][A-Za-z_][A-Za-z0-9_-]{0,63})*|(?:[.#][A-Za-z_][A-Za-z0-9_-]{0,63})+)$/;
const SAFE_PROPERTY = /^(?=.{1,64}$)-?[a-z][a-z0-9-]*$/;

function isPlainObject(value: unknown): value is PlainObject {
  if (value === null || typeof value !== "object" || Array.isArray(value)) return false;
  const prototype = Object.getPrototypeOf(value);
  return prototype === Object.prototype || prototype === null;
}

function requireOnePlainObject(name: string, count: number, value: unknown): PlainObject {
  if (count !== 1 || !isPlainObject(value)) throw new Error(`${name} expects exactly one plain object`);
  return value;
}

function diagnostic(code: string, message: string): Diagnostic {
  return { severity: "error", code, message };
}

function errorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

function readVector(host: MainThreadHost, testCase: PublicCase): string[] {
  return testCase.assertions.map((assertion) => {
    if (!SAFE_SELECTOR.test(assertion.selector)) {
      throw new Error(`invalid computed-style selector ${String(assertion.selector)}`);
    }
    if (!SAFE_PROPERTY.test(assertion.property)) {
      throw new Error(`invalid computed-style property ${String(assertion.property)}`);
    }
    const targets = host.querySelectorAll(assertion.selector);
    if (targets.length !== 1) {
      throw new Error(
        `computed-style selector ${assertion.selector} resolved ${targets.length} targets; expected exactly one`,
      );
    }
    const target = targets[0];
    const actual = target.getComputedStyleProperty(assertion.property);
    if (typeof actual !== "string") {
      throw new Error(`computed ${assertion.property} for target ${assertion.targetIndex} is not a string`);
    }
    return actual;
  });
}

function sameVector(left: readonly string[], right: readonly string[]): boolean {
  return left.length === right.length && left.every((value, index) => value === right[index]);
}

function nextFrame(host: MainThreadHost): Promise<void> {
  return new Promise((resolve) => host.requestAnimationFrame(resolve));
}

async function stabilize(host: MainThreadHost, testCase: PublicCase): Promise<{ vector: string[]; frames: number }> {
  await host.flushLayout();
  let previous: string[] | undefined;
  for (let frames = 1; frames <= MAX_STABILIZATION_FRAMES; frames += 1) {
    await nextFrame(host);
    const current = readVector(host, testCase);
    if (previous !== undefined && sameVector(previous, current)) return { vector: current, frames };
    previous = current;
  }
  throw new Error(`style vector did not stabilize within ${MAX_STABILIZATION_FRAMES} frames`);
}

function errorCase(testCase: PublicCase, code: string, message: string): CaseResult {
  const assertions: AssertionResult[] = testCase.assertions.map((assertion) => ({
    ...assertion,
    actual: "",
    status: "error",
  }));
  return {
    id: testCase.id,
    title: testCase.title,
    status: "error",
    assertions,
    diagnostics: [diagnostic(code, message)],
  };
}

async function runCase(host: MainThreadHost, testCase: PublicCase): Promise<CaseResult> {
  let baseline: string[] | undefined;
  try {
    baseline = readVector(host, testCase);
    const sheet = await host.loadStyleSheet(testCase.sectionKey, CARD_NAME);
    if (sheet === null || sheet === undefined) throw new Error(`stylesheet ${testCase.sectionKey} did not load`);
    await host.replaceStyleSheets([sheet]);
    const styled = await stabilize(host, testCase);
    const assertions: AssertionResult[] = testCase.assertions.map((assertion, index) => ({
      ...assertion,
      actual: styled.vector[index],
      status: styled.vector[index] === assertion.expected ? "pass" : "fail",
    }));
    await host.replaceStyleSheets([]);
    const restored = await stabilize(host, testCase);
    if (!sameVector(baseline, restored.vector)) {
      return errorCase(
        testCase,
        "BASELINE_NOT_RESTORED",
        "clearing the dynamic stylesheet did not restore the baseline",
      );
    }
    const status = assertions.some((assertion) => assertion.status === "fail") ? "fail" : "pass";
    return { id: testCase.id, title: testCase.title, status, assertions, diagnostics: [] };
  } catch (error) {
    try {
      await host.replaceStyleSheets([]);
    } catch { /* cleanup failure is included below */ }
    return errorCase(testCase, "EXECUTION_ERROR", errorMessage(error));
  }
}

function suiteResult(
  cases: readonly CaseResult[],
  executionStatus: SuiteResult["executionStatus"],
  diagnostics: readonly Diagnostic[] = [],
): SuiteResult {
  const assertionCount = cases.reduce((count, testCase) => count + testCase.assertions.length, 0);
  if (executionStatus !== "completed") {
    return {
      assertionCount,
      caseCount: cases.length,
      executionStatus,
      conformanceOutcome: "inconclusive",
      diagnostics,
      cases,
    };
  }
  if (cases.some((testCase) => testCase.status === "error")) {
    return {
      assertionCount,
      caseCount: cases.length,
      executionStatus: "failed",
      conformanceOutcome: "inconclusive",
      diagnostics,
      cases,
    };
  }
  return {
    assertionCount,
    caseCount: cases.length,
    executionStatus,
    conformanceOutcome: cases.some((testCase) => testCase.status === "fail") ? "fail" : "pass",
    diagnostics,
    cases,
  };
}

/** Main-thread state machine. Bridge functions always return synchronous plain objects. */
export function createMainThreadRuntime(manifest: PublicManifest, host: MainThreadHost): MainRuntimeApi {
  let running = false;
  let generation = 0;
  let result: SuiteResult | undefined;

  function finish(runGeneration: number, nextResult: SuiteResult): void {
    if (runGeneration !== generation) return;
    result = nextResult;
    running = false;
  }

  async function runSuite(runGeneration: number): Promise<void> {
    const cases: CaseResult[] = [];
    for (const testCase of manifest.cases) {
      const testResult = await runCase(host, testCase);
      cases.push(testResult);
      if (runGeneration !== generation) return;
      if (testResult.status === "error") {
        finish(
          runGeneration,
          suiteResult(cases, "failed", [diagnostic("SUITE_STOPPED", "stopped after a case-level execution error")]),
        );
        return;
      }
    }
    finish(runGeneration, suiteResult(cases, "completed"));
  }

  function start(input: PlainObject): PlainObject {
    requireOnePlainObject("start", arguments.length, input);
    if (running) return { state: "running" };
    result = undefined;
    running = true;
    const runGeneration = ++generation;
    void runSuite(runGeneration).catch((error) => {
      finish(runGeneration, suiteResult([], "failed", [diagnostic("RUNTIME_FAILURE", errorMessage(error))]));
    });
    return { state: "started" };
  }

  function poll(input: PlainObject): PlainObject {
    requireOnePlainObject("poll", arguments.length, input);
    if (running) return { state: "running" };
    return result === undefined ? { state: "idle" } : { state: "complete", result };
  }

  function cancel(input: PlainObject): PlainObject {
    requireOnePlainObject("cancel", arguments.length, input);
    if (!running) return { state: "idle" };
    generation += 1;
    result = suiteResult([], "aborted", [diagnostic("CANCELLED", "suite was cancelled")]);
    running = false;
    return { state: "cancelling" };
  }

  return { start, poll, cancel };
}
