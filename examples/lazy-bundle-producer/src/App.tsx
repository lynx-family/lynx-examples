import { useEffect } from "@lynx-js/react";
import "./App.css";

export const App = () => {
  useEffect(() => {
    console.info("Hello, ReactLynx");
  }, []);
  return (
    <view className="root">
      <text className="text">Hello, This is Lazy Bundle!</text>
    </view>
  );
};
