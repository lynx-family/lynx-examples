import i18next from "i18next";
import type { i18n } from "i18next";

const localI18nInstance: i18n = i18next.createInstance();

const localesContext = import.meta.webpackContext("./locales", {
  recursive: false,
  regExp: /\.json$/,
});

localI18nInstance.init({
  lng: "en",
  // The default JSON format needs `Intl.PluralRules` API, which is currently unavailable in Lynx.
  compatibilityJSON: "v3",
  resources: Object.fromEntries(
    localesContext.keys().map((key) => [
      key.match(/\/([^/]+)\.json$/)?.[1] || key,
      {
        translation: localesContext(key) as Record<string, string>,
      },
    ]),
  ),
});

export { localI18nInstance as i18n };
