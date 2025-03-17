import { createSignal, setRootComponent } from "@lynx-js/solid";
import type { MainThread } from "@lynx-js/types";
import "./index.css";

function Counter() {
  const [count, setCount] = createSignal(1);
  const increment = (_e: MainThread.TouchEvent) => {
    setCount(count() + 1);
  };

  return (
    <view class="container">
      <image
        main-thread:bindtap={increment}
        class="logo"
        src="https://github.com/lynx-family.png"
      >
      </image>
      <text class="slogan">Lynx: Unlock Native for More</text>
      <text>{count()}</text>
    </view>
  );
}

setRootComponent(Counter);
