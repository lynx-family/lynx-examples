import { useCallback, useState } from "@lynx-js/react";
import { i18n } from "./i18n.js";

import "./App.css";

export function App() {
  const [locale, setLocale] = useState("en");
  const getNextLocale = (locale: string) => {
    // mock locales
    const locales = ["en", "zh-CN"];
    const index = locales.indexOf(locale);
    return locales[(index + 1) % locales.length];
  };
  return (
    <view className="root">
      <text className="content">Hello, {i18n.t("world")}</text>
      <text
        bindtap={async () => {
          const nextLocale = getNextLocale(locale);
          await i18n.changeLanguage(nextLocale);
          setLocale(nextLocale);
        }}
        className="btn"
      >
        Change Language
      </text>
    </view>
  );
}
