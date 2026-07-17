import type { RawTextElementRef } from "@lynx-js/type-element-api";

import { createPage, createText, createView } from "../common/main-thread/element.js";
import { bindMainThreadEvent } from "../common/main-thread/event.js";
import { setupMainThread } from "../common/main-thread/setup.js";

type WeatherState = {
  condition: string;
  high: string;
  humidity: string;
  icon: string;
  low: string;
  temperature: string;
  wind: string;
};

const weatherStates: WeatherState[] = [
  {
    condition: "Cloudy",
    high: "82°",
    humidity: "60%",
    icon: "☁️",
    low: "66°",
    temperature: "75°",
    wind: "16 mph",
  },
  {
    condition: "Partly cloudy",
    high: "84°",
    humidity: "56%",
    icon: "⛅",
    low: "67°",
    temperature: "78°",
    wind: "12 mph",
  },
  {
    condition: "Light rain",
    high: "77°",
    humidity: "71%",
    icon: "🌦️",
    low: "63°",
    temperature: "72°",
    wind: "9 mph",
  },
];

const { page, pageId } = createPage("page");

function setText(node: RawTextElementRef, value: string): void {
  __SetAttribute(node, "text", value);
}

function createForecastDay(
  label: string,
  icon: string,
  condition: string,
  range: string,
): ReturnType<typeof createView> {
  const day = createView(pageId, "forecast-day");
  const dayLabel = createText(pageId, "forecast-label", label);
  const dayIcon = createText(pageId, "forecast-icon", icon);
  const dayCondition = createText(pageId, "forecast-condition", condition);
  const dayRange = createText(pageId, "forecast-range", range);
  __AppendElement(day, dayLabel.text);
  __AppendElement(day, dayIcon.text);
  __AppendElement(day, dayCondition.text);
  __AppendElement(day, dayRange.text);
  return day;
}

function renderPage(): void {
  let refreshCount = 0;
  let weatherIndex = 0;

  const card = createView(pageId, "weather-card");
  __SetAttribute(card, "aria-label", "旧金山天气卡");
  __AppendElement(page, card);

  const header = createView(pageId, "weather-header");
  const locationGroup = createView(pageId, "weather-location-group");
  const eyebrow = createText(pageId, "weather-eyebrow", "CURRENT WEATHER");
  const city = createText(pageId, "weather-city", "San Francisco");
  const updated = createText(pageId, "weather-updated", "Just now · Fahrenheit");
  __AppendElement(locationGroup, eyebrow.text);
  __AppendElement(locationGroup, city.text);
  __AppendElement(locationGroup, updated.text);
  const iconBubble = createView(pageId, "weather-icon-bubble");
  const weatherIcon = createText(pageId, "weather-icon", weatherStates[0].icon);
  __AppendElement(iconBubble, weatherIcon.text);
  __AppendElement(header, locationGroup);
  __AppendElement(header, iconBubble);
  __AppendElement(card, header);

  const current = createView(pageId, "weather-current");
  const temperature = createText(
    pageId,
    "weather-temperature",
    weatherStates[0].temperature,
  );
  const currentCopy = createView(pageId, "weather-current-copy");
  const condition = createText(pageId, "weather-condition", weatherStates[0].condition);
  const range = createText(
    pageId,
    "weather-range",
    `High ${weatherStates[0].high}  ·  Low ${weatherStates[0].low}`,
  );
  __AppendElement(currentCopy, condition.text);
  __AppendElement(currentCopy, range.text);
  __AppendElement(current, temperature.text);
  __AppendElement(current, currentCopy);
  __AppendElement(card, current);

  const metrics = createView(pageId, "weather-metrics");
  const humidityMetric = createView(pageId, "weather-metric");
  const humidityLabel = createText(pageId, "weather-metric-label", "HUMIDITY");
  const humidityValue = createText(
    pageId,
    "weather-metric-value",
    weatherStates[0].humidity,
  );
  __AppendElement(humidityMetric, humidityLabel.text);
  __AppendElement(humidityMetric, humidityValue.text);
  const divider = createView(pageId, "weather-metric-divider");
  const windMetric = createView(pageId, "weather-metric");
  const windLabel = createText(pageId, "weather-metric-label", "WIND");
  const windValue = createText(pageId, "weather-metric-value", weatherStates[0].wind);
  __AppendElement(windMetric, windLabel.text);
  __AppendElement(windMetric, windValue.text);
  __AppendElement(metrics, humidityMetric);
  __AppendElement(metrics, divider);
  __AppendElement(metrics, windMetric);
  __AppendElement(card, metrics);

  const forecast = createView(pageId, "weather-forecast");
  __AppendElement(
    forecast,
    createForecastDay("Tomorrow", "☀️", "Sunny", "81° / 66°"),
  );
  __AppendElement(
    forecast,
    createForecastDay("Day 3", "⛅", "Partly cloudy", "79° / 64°"),
  );
  __AppendElement(
    forecast,
    createForecastDay("Day 4", "🌦️", "Light rain", "77° / 63°"),
  );
  __AppendElement(card, forecast);

  const refreshButton = createView(pageId, "weather-refresh");
  __SetID(refreshButton, "refresh-weather");
  __SetAttribute(refreshButton, "aria-label", "刷新天气预报");
  const refreshIcon = createText(pageId, "weather-refresh-icon", "↻");
  const refreshLabel = createText(pageId, "weather-refresh-text", "刷新天气预报");
  __AppendElement(refreshButton, refreshIcon.text);
  __AppendElement(refreshButton, refreshLabel.text);
  __AppendElement(card, refreshButton);

  const footer = createText(pageId, "weather-footer", "Lynx · 单线程天气卡");
  __AppendElement(card, footer.text);

  bindMainThreadEvent(refreshButton, "tap", () => {
    weatherIndex = (weatherIndex + 1) % weatherStates.length;
    refreshCount += 1;
    const nextWeather = weatherStates[weatherIndex];
    setText(weatherIcon.raw, nextWeather.icon);
    setText(temperature.raw, nextWeather.temperature);
    setText(condition.raw, nextWeather.condition);
    setText(range.raw, `High ${nextWeather.high}  ·  Low ${nextWeather.low}`);
    setText(humidityValue.raw, nextWeather.humidity);
    setText(windValue.raw, nextWeather.wind);
    setText(updated.raw, `Refreshed ${refreshCount}× · Fahrenheit`);
    setText(refreshLabel.raw, `已刷新 ${refreshCount} 次`);
    __FlushElementTree();
  });
}

setupMainThread({ renderPage }, { enableBackgroundSync: false });
