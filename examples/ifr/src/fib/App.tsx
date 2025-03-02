import JSBI from "jsbi";

import "./App.css";

const JSBI_ZERO = /* @__PURE__ */ JSBI.BigInt(0);
const JSBI_ONE = /* @__PURE__ */ JSBI.BigInt(1);
const JSBI_TWO = /* @__PURE__ */ JSBI.BigInt(2);

function fib(n: JSBI): JSBI {
  if (JSBI.lessThan(n, JSBI_ZERO)) {
    throw new Error("n must be non-negative");
  }
  if (JSBI.equal(n, JSBI_ZERO)) return JSBI_ZERO;
  if (JSBI.equal(n, JSBI_ONE)) return JSBI_ONE;

  let a = JSBI_ZERO, b = JSBI_ONE;
  for (let i = JSBI_TWO; JSBI.lessThanOrEqual(i, n); i = JSBI.add(i, JSBI_ONE)) {
    const next = JSBI.add(a, b);
    a = b;
    b = next;
  }

  return JSBI.BigInt(b);
}

export function App() {
  const n = JSBI.BigInt(10000);

  return (
    <view style="padding: 32rpx; display: flex; flex-direction: column; justify-content: center; align-items: center; width: 100%; height: 100%;">
      <text>fib({n.toString()})</text>
      <text>is</text>
      <scroll-view style="width: 100%; height: 50%;" scroll-y>
        <text>{fib(n).toString()}</text>
      </scroll-view>
    </view>
  );
}
