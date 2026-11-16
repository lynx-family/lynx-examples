export type PlainObject = Record<string, unknown>;

export interface PublicAssertion {
  readonly targetIndex: number;
  readonly selector: string;
  readonly property: string;
  readonly expected: string;
}

export interface PublicCase {
  readonly id: string;
  readonly title: string;
  readonly sectionKey: string;
  readonly assertions: readonly PublicAssertion[];
}

/** Card-local schema. It must not contain a runner session, endpoint, or token. */
export interface PublicManifest {
  readonly cases: readonly PublicCase[];
}

export interface AssertionResult extends PublicAssertion {
  readonly actual: string;
  readonly status: "pass" | "fail" | "error";
}

export interface CaseResult {
  readonly id: string;
  readonly title: string;
  readonly status: "pass" | "fail" | "error";
  readonly assertions: readonly AssertionResult[];
  readonly diagnostics: readonly Diagnostic[];
}

export interface Diagnostic {
  readonly severity: "info" | "warning" | "error";
  readonly code: string;
  readonly message: string;
}

/** Exact token-free result shape validated by nonvisual-result-protocol.mjs. */
export interface SuiteResult {
  readonly assertionCount: number;
  readonly caseCount: number;
  readonly executionStatus: "completed" | "failed" | "timed_out" | "aborted";
  readonly conformanceOutcome: "pass" | "fail" | "not_run" | "inconclusive";
  readonly diagnostics: readonly Diagnostic[];
  readonly cases: readonly CaseResult[];
}

export interface TextElement {
  getComputedStyleProperty(name: string): unknown;
}

export interface MainThreadHost {
  loadStyleSheet(sectionKey: string, cardName: "__Card__"): unknown | Promise<unknown>;
  replaceStyleSheets(sheets: readonly unknown[]): unknown | Promise<unknown>;
  querySelectorAll(selector: string): readonly TextElement[];
  flushLayout(): void | Promise<void>;
  requestAnimationFrame(callback: () => void): unknown;
}

export interface MainRuntimeApi {
  start(input: PlainObject): PlainObject;
  poll(input: PlainObject): PlainObject;
  cancel(input: PlainObject): PlainObject;
}

export interface BackgroundSessionConfig {
  readonly endpoint: string;
  readonly runId: string;
  readonly token: string;
  readonly buildFingerprint: string;
  /** Host-validated device polling budget derived from the runner timeout. */
  readonly devicePollBudgetMs: number;
  readonly test: { readonly id: string; readonly profile: string; readonly sourceHash: string };
}

export interface BackgroundHost {
  callLepusMethod(name: string, input: PlainObject, callback: (value: unknown) => void): void;
  fetch(
    url: string,
    init: { method: "POST"; headers: Record<string, string>; body: string },
  ): Promise<{ json(): Promise<unknown> }>;
  sleep(milliseconds: number): Promise<void>;
  now(): number;
}
