import type { ServerToClientMessage } from "@lynx-js/genui/a2ui";

export const initialMessages = [
  {
    "version": "v0.9",
    "createSurface": {
      "surfaceId": "main",
      "catalogId": "https://a2ui.org/specification/v0_9/basic_catalog.json",
    },
  },
  {
    "version": "v0.9",
    "updateComponents": {
      "surfaceId": "main",
      "components": [
        {
          "id": "root",
          "component": "Card",
          "variant": "elevated",
          "child": "weather-column",
        },
        {
          "id": "weather-column",
          "component": "Column",
          "children": [
            "weather-header-row",
            "temperature-text",
            "humidity-text",
            "weather-photo",
            "city-switch-button",
          ],
          "align": "stretch",
        },
        {
          "id": "weather-photo",
          "component": "Text",
          "text": "",
        },
        {
          "id": "city-switch-button",
          "component": "Text",
          "text": "",
        },
        {
          "id": "weather-header-row",
          "component": "Row",
          "children": [
            "sunny-icon",
            "weather-title-column",
          ],
          "align": "center",
        },
        {
          "id": "sunny-icon",
          "component": "Icon",
          "name": {
            "path": "/weather/icon",
          },
          "size": "lg",
          "color": "primary",
        },
        {
          "id": "weather-title-column",
          "component": "Column",
          "children": [
            "city-text",
            "condition-text",
          ],
        },
        {
          "id": "city-text",
          "component": "Text",
          "text": {
            "path": "/weather/city",
          },
          "variant": "h2",
        },
        {
          "id": "condition-text",
          "component": "Text",
          "text": {
            "path": "/weather/condition",
          },
          "variant": "body",
        },
        {
          "id": "temperature-text",
          "component": "Text",
          "text": {
            "path": "/weather/temperature",
          },
          "variant": "h1",
        },
        {
          "id": "humidity-text",
          "component": "Text",
          "text": {
            "path": "/weather/humidity",
          },
          "variant": "body",
        },
      ],
    },
  },
  {
    "version": "v0.9",
    "updateDataModel": {
      "surfaceId": "main",
      "value": {
        "weather": {
          "city": "San Francisco",
          "condition": "Sunny",
          "icon": "wb_sunny",
          "photo":
            "https://images.pexels.com/photos/36003582/pexels-photo-36003582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "temperature": "22°C",
          "humidity": "Humidity 60%",
        },
      },
    },
  },
  {
    "version": "v0.9",
    "updateComponents": {
      "surfaceId": "main",
      "components": [
        {
          "id": "weather-photo",
          "component": "Image",
          "url": {
            "path": "/weather/photo",
          },
          "variant": "header",
          "fit": "cover",
        },
      ],
    },
  },
  {
    "version": "v0.9",
    "updateComponents": {
      "surfaceId": "main",
      "components": [
        {
          "id": "city-switch-button",
          "component": "Button",
          "variant": "borderless",
          "child": "city-switch-label",
          "action": {
            "event": {
              "name": "switch_city_to_paris",
              "context": {
                "city": "Paris",
              },
            },
          },
        },
        {
          "id": "city-switch-label",
          "component": "Text",
          "text": "Switch to Paris",
        },
      ],
    },
  },
] as ServerToClientMessage[];

export const actionMessages: Record<string, readonly ServerToClientMessage[]> = {
  switch_city_to_paris: [
    {
      "version": "v0.9",
      "updateDataModel": {
        "surfaceId": "main",
        "path": "/weather",
        "value": {
          "city": "Paris",
          "condition": "Rainy",
          "icon": "rainy",
          "photo":
            "https://images.pexels.com/photos/12384888/pexels-photo-12384888.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "temperature": "21°C",
          "humidity": "Humidity 42%",
        },
      },
    },
    {
      "version": "v0.9",
      "updateComponents": {
        "surfaceId": "main",
        "components": [
          {
            "id": "city-switch-label",
            "component": "Text",
            "text": "Switch to San Francisco",
          },
          {
            "id": "city-switch-button",
            "component": "Button",
            "variant": "borderless",
            "child": "city-switch-label",
            "action": {
              "event": {
                "name": "switch_city_to_san_francisco",
                "context": {
                  "city": "San Francisco",
                },
              },
            },
          },
        ],
      },
    },
  ],
  switch_city_to_san_francisco: [
    {
      "version": "v0.9",
      "updateDataModel": {
        "surfaceId": "main",
        "path": "/weather",
        "value": {
          "city": "San Francisco",
          "condition": "Sunny",
          "icon": "wb_sunny",
          "photo":
            "https://images.pexels.com/photos/36003582/pexels-photo-36003582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "temperature": "22°C",
          "humidity": "Humidity 60%",
        },
      },
    },
    {
      "version": "v0.9",
      "updateComponents": {
        "surfaceId": "main",
        "components": [
          {
            "id": "city-switch-label",
            "component": "Text",
            "text": "Switch to Paris",
          },
          {
            "id": "city-switch-button",
            "component": "Button",
            "variant": "borderless",
            "child": "city-switch-label",
            "action": {
              "event": {
                "name": "switch_city_to_paris",
                "context": {
                  "city": "Paris",
                },
              },
            },
          },
        ],
      },
    },
  ],
};
