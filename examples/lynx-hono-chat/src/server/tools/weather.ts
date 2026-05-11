import { tool, zodSchema } from "ai";
import { z } from "zod";

export type WeatherLookup = {
  city: string;
  latitude: number;
  longitude: number;
  timezone: string;
  condition: string;
  temperatureC: number;
  apparentTemperatureC: number | null;
  windSpeedKmh: number | null;
  observationTime: string;
};

type OpenMeteoGeocodeResult = {
  name: string;
  country?: string;
  admin1?: string;
  latitude: number;
  longitude: number;
  timezone?: string;
};

const logWeatherTool = (event: string, payload?: unknown) => {
  if (payload === undefined) {
    console.info(`[weather-tool] ${event}`);
    return;
  }

  console.info(`[weather-tool] ${event}`, payload);
};

const WEATHER_CODE_LABELS: Record<number, string> = {
  0: "Clear sky",
  1: "Mainly clear",
  2: "Partly cloudy",
  3: "Overcast",
  45: "Fog",
  48: "Depositing rime fog",
  51: "Light drizzle",
  53: "Moderate drizzle",
  55: "Dense drizzle",
  56: "Light freezing drizzle",
  57: "Dense freezing drizzle",
  61: "Slight rain",
  63: "Moderate rain",
  65: "Heavy rain",
  66: "Light freezing rain",
  67: "Heavy freezing rain",
  71: "Slight snow",
  73: "Moderate snow",
  75: "Heavy snow",
  77: "Snow grains",
  80: "Slight rain showers",
  81: "Moderate rain showers",
  82: "Violent rain showers",
  85: "Slight snow showers",
  86: "Heavy snow showers",
  95: "Thunderstorm",
  96: "Thunderstorm with slight hail",
  99: "Thunderstorm with heavy hail",
};

export const extractCityFromPrompt = (prompt: string): string | null => {
  const normalized = prompt.trim();
  const patterns = [
    /weather\s+(?:in|for)\s+([a-zA-Z\u4e00-\u9fa5\s.-]+?)(?:\?|$|,|\.|\s+today|\s+now)/i,
    /temperature\s+(?:in|for)\s+([a-zA-Z\u4e00-\u9fa5\s.-]+?)(?:\?|$|,|\.|\s+today|\s+now)/i,
    /([a-zA-Z\u4e00-\u9fa5\s.-]+?)\s+weather/i,
    /([A-Za-z\u4e00-\u9fa5\s.-]+?)的天气/,
    /查询\s*([A-Za-z\u4e00-\u9fa5\s.-]+?)\s*天气/,
  ];

  for (const pattern of patterns) {
    const city = normalized.match(pattern)?.[1]?.trim();
    if (city) {
      return city;
    }
  }

  return null;
};

const formatResolvedCity = (location: OpenMeteoGeocodeResult): string => {
  const parts = [location.name];

  if (location.admin1 && location.admin1 !== location.name) {
    parts.push(location.admin1);
  }

  if (location.country) {
    parts.push(location.country);
  }

  return parts.join(", ");
};

const mapWeatherCodeToLabel = (code: number | null | undefined): string => {
  if (typeof code !== "number") {
    return "Unknown conditions";
  }

  return WEATHER_CODE_LABELS[code] ?? "Unknown conditions";
};

export const lookupWeather = async (city: string): Promise<WeatherLookup> => {
  const normalizedCity = city.trim();
  if (!normalizedCity) {
    throw new Error("City is required.");
  }

  logWeatherTool("lookup.start", { city: normalizedCity });

  const geocodeUrl = new URL("https://geocoding-api.open-meteo.com/v1/search");
  geocodeUrl.searchParams.set("name", normalizedCity);
  geocodeUrl.searchParams.set("count", "1");
  geocodeUrl.searchParams.set("language", "en");
  geocodeUrl.searchParams.set("format", "json");

  const geocodeResponse = await fetch(geocodeUrl, { signal: AbortSignal.timeout(5000) });
  if (!geocodeResponse.ok) {
    throw new Error(`Geocoding failed with status ${geocodeResponse.status}.`);
  }

  const geocodeJson = (await geocodeResponse.json()) as {
    results?: OpenMeteoGeocodeResult[];
  };
  const location = geocodeJson.results?.[0];

  if (!location) {
    logWeatherTool("lookup.geocode.miss", { city: normalizedCity });
    throw new Error(`Could not find weather for "${normalizedCity}".`);
  }

  logWeatherTool("lookup.geocode.hit", {
    requestedCity: normalizedCity,
    resolvedCity: formatResolvedCity(location),
    latitude: location.latitude,
    longitude: location.longitude,
  });

  const forecastUrl = new URL("https://api.open-meteo.com/v1/forecast");
  forecastUrl.searchParams.set("latitude", String(location.latitude));
  forecastUrl.searchParams.set("longitude", String(location.longitude));
  forecastUrl.searchParams.set(
    "current",
    "temperature_2m,apparent_temperature,weather_code,wind_speed_10m",
  );
  forecastUrl.searchParams.set("timezone", "auto");

  const forecastResponse = await fetch(forecastUrl, { signal: AbortSignal.timeout(5000) });
  if (!forecastResponse.ok) {
    throw new Error(
      `Weather forecast failed with status ${forecastResponse.status}.`,
    );
  }

  const forecastJson = (await forecastResponse.json()) as {
    timezone?: string;
    current?: {
      time?: string;
      temperature_2m?: number;
      apparent_temperature?: number;
      weather_code?: number;
      wind_speed_10m?: number;
    };
  };
  const current = forecastJson.current;

  if (!current || typeof current.temperature_2m !== "number") {
    logWeatherTool("lookup.forecast.invalid", {
      city: normalizedCity,
      forecast: forecastJson,
    });
    throw new Error("Weather service returned an incomplete response.");
  }

  const result = {
    city: formatResolvedCity(location),
    latitude: location.latitude,
    longitude: location.longitude,
    timezone: forecastJson.timezone ?? location.timezone ?? "UTC",
    condition: mapWeatherCodeToLabel(current.weather_code),
    temperatureC: current.temperature_2m,
    apparentTemperatureC: typeof current.apparent_temperature === "number"
      ? current.apparent_temperature
      : null,
    windSpeedKmh: typeof current.wind_speed_10m === "number" ? current.wind_speed_10m : null,
    observationTime: current.time ?? "",
  };

  logWeatherTool("lookup.success", result);

  return result;
};

export const formatWeatherReply = (weather: WeatherLookup): string => {
  const parts = [
    `Current weather in ${weather.city}: ${Math.round(weather.temperatureC)}°C`,
    weather.apparentTemperatureC === null
      ? null
      : `feels like ${Math.round(weather.apparentTemperatureC)}°C`,
    weather.condition,
    weather.windSpeedKmh === null
      ? null
      : `wind ${Math.round(weather.windSpeedKmh)} km/h`,
  ].filter(Boolean);

  return `${parts.join(", ")}.`;
};

export const weatherTool = tool({
  description: "Get the current weather for a city.",
  inputSchema: zodSchema(
    z.object({
      city: z.string().min(1).max(64),
    }),
  ),
  execute: async ({ city }) => {
    logWeatherTool("execute", { city });

    try {
      const weather = await lookupWeather(city);
      logWeatherTool("execute.success", {
        city,
        resolvedCity: weather.city,
        temperatureC: weather.temperatureC,
        condition: weather.condition,
      });
      return weather;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown weather tool error";

      console.error("[weather-tool] execute.error", {
        city,
        error: errorMessage,
      });
      throw error;
    }
  },
});
