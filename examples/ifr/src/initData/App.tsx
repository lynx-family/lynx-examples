import { useInitData } from "@lynx-js/react";

import "./App.css";

declare module "@lynx-js/react" {
  interface InitData {
    mockData: string;
  }
}

export function App() {
  const initData = useInitData();

  return (
    <view style="display: flex; flex-direction: column; justify-content: center; align-items: center; width: 100%; height: 100%;">
      <text>Hello World</text>
      <text>{initData.mockData}</text>
    </view>
  );
}
