import { root } from "@lynx-js/react";
import { useState } from "react";
import "./index.scss";

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [useJS, setUseJS] = useState(false);
  const [showError, setShowError] = useState(false);
  const themeClass = isDark ? "theme-dark" : "theme-light";

  const toggleTheme = () => {
    if (useJS) {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }

    setIsDark(prev => !prev);
  };

  const toggleThemeByJS = () => {
    setUseJS(true);
    const rootElement = lynx.getElementById("root");
    const newTheme = isDark ? "light" : "dark";

    if (rootElement) {
      if (isDark) {
        rootElement.setProperty({
          "--bg-primary": "#ffffff",
          "--bg-secondary": "#f5f5f5",
          "--text-primary": "#1a1a1a",
          "--text-secondary": "#666666",
          "--shadow": "rgba(0, 0, 0, 0.1)",
        });
      } else {
        rootElement.setProperty({
          "--bg-primary": "#2d2d2d",
          "--bg-secondary": "#1a1a1a",
          "--text-primary": "#ffffff",
          "--text-secondary": "#cccccc",
          "--shadow": "rgba(0, 0, 0, 0.3)",
        });
      }
      setIsDark(prev => !prev);
    }
  };

  return (
    <view id="root" className={themeClass}>
      <view className="container">
        <view className="theme-switchers">
          <view className="theme-card" bindtap={toggleTheme}>
            <text className="theme-icon">{isDark ? "🌙" : "☀️"}</text>
            <text className="title">{isDark ? "Dark Mode" : "Light Mode"}</text>
            <text className="subtitle">Tap to switch theme by className</text>
          </view>
          <view className="theme-card" bindtap={toggleThemeByJS}>
            <text className="theme-icon">{isDark ? "🌙" : "☀️"}</text>
            <text className="title">{isDark ? "Dark Mode" : "Light Mode"}</text>
            <text className="subtitle">Tap to switch theme through JS</text>
          </view>
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
      {showError && (
        <view className="error-message-container">
          <text className="error-message">
            Cannot change variables through the class after modifying them in JS!
          </text>
        </view>
      )}
    </view>
  );
}

root.render(<App />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
