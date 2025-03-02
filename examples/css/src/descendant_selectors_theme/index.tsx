import { root } from "@lynx-js/react";
import { useState } from "react";
import "./index.scss";

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const themeClass = isDark ? "theme-dark" : "theme-light";

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <view className={themeClass}>
      <view className="container">
        <view className="theme-card" bindtap={toggleTheme}>
          <text className="theme-icon">
            {isDark ? "🌙" : "☀️"}
          </text>
          <text className="title">
            {isDark ? "Dark Mode" : "Light Mode"}
          </text>
          <text className="subtitle">
            Tap to switch theme
          </text>
        </view>
        <view className="content-cards">
          <view className="card">
            <text className="card-title">Card Sample 1</text>
            <text className="card-text">This is a demo card showing theme switching effects.</text>
          </view>
          <view className="card">
            <text className="card-title">Card Sample 2</text>
            <text className="card-text">This is a demo card showing theme switching effects.</text>
          </view>
          <view className="card">
            <text className="card-title">Card Sample 3</text>
            <text className="card-text">This is a demo card showing theme switching effects.</text>
          </view>
          <view className="card">
            <text className="card-title">Card Sample 4</text>
            <text className="card-text">This is a demo card showing theme switching effects.</text>
          </view>
        </view>
      </view>
    </view>
  );
}

root.render(<App />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
