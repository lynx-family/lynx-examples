import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import vm from "node:vm";
import ts from "typescript";

const source = readFileSync(new URL("./main-thread-env.ts", import.meta.url), "utf8");
const code = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText;

function load(globals) {
  const context = vm.createContext({ exports: {}, ...globals });
  vm.runInContext(code, context);
  return { context, initialize: context.exports.initGlobalEnv };
}

test("initialization installs selectors and native computed-style access", () => {
  const page = {};
  const element = {};
  const calls = [];
  const { context, initialize } = load({
    lynx: {},
    requestAnimationFrame() {},
    __GetPageElement: () => page,
    __QuerySelectorAll: (root, selector, options) => {
      calls.push({ root, selector, options });
      return [element];
    },
    __GetComputedStyleByKey: (node, property) => {
      assert.equal(node, element);
      assert.equal(property, "color");
      return "rgb(0, 128, 0)";
    },
  });
  initialize();
  const targets = context.lynx.querySelectorAll("text.first");
  assert.equal(targets.length, 1);
  assert.equal(targets[0].getComputedStyleProperty("color"), "rgb(0, 128, 0)");
  assert.equal(calls[0].root, page);
  assert.equal(calls[0].selector, "text.first");
  assert.equal(calls[0].options.onlyCurrentComponent, false);
});

test("existing APIs are retained and initialization is idempotent", () => {
  const querySelectorAll = () => [];
  const requestAnimationFrame = () => 1;
  const { context, initialize } = load({ lynx: { querySelectorAll }, requestAnimationFrame });
  initialize();
  initialize();
  assert.equal(context.lynx.querySelectorAll, querySelectorAll);
  assert.equal(context.requestAnimationFrame, requestAnimationFrame);
});

test("rAF fallback preserves the native receiver, timestamp and frame id", () => {
  const lynx = {
    querySelectorAll: () => [],
    requestAnimationFrame(callback) {
      assert.equal(this, lynx);
      callback(42);
      return 7;
    },
  };
  const { context, initialize } = load({ lynx });
  initialize();
  let timestamp;
  assert.equal(
    context.requestAnimationFrame((value) => {
      timestamp = value;
    }),
    7,
  );
  assert.equal(timestamp, 42);
  assert.throws(() => context.requestAnimationFrame(), /requires a callback/);
});

test("missing selectors or native frame scheduling fail explicitly", () => {
  assert.throws(() => load({ lynx: {} }).initialize(), /Native Element PAPI is unavailable/);
  assert.throws(
    () => load({ lynx: { querySelectorAll: () => [] } }).initialize(),
    /requestAnimationFrame is unavailable/,
  );
});
