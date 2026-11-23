import type { ComponentInstance, ServerToClientMessage } from "@lynx-js/genui/a2ui";
import { EXAMPLE_CATALOG_ID } from "../catalogId.js";

export const initialMessages: ServerToClientMessage[] = [
  {
    "version": "1.0",
    "createSurface": {
      "surfaceId": "main",
      "catalogId": EXAMPLE_CATALOG_ID,
    },
  },
  {
    "version": "1.0",
    "updateComponents": {
      "surfaceId": "main",
      "components": [
        {
          "id": "root",
          "component": "Card",
          "child": "quiz-col",
          "variant": "elevated",
        },
        {
          "id": "quiz-col",
          "component": "Column",
          "children": ["q-label", "q-text", "options-col", "submit-row", "result-area"],
          "align": "stretch",
        },
        { "id": "q-label", "component": "Text", "text": "Trivia Quiz", "variant": "caption", "emphasis": "medium" },
        {
          "id": "q-text",
          "component": "Text",
          "text": "Which shape has three sides?",
          "variant": "h4",
          "emphasis": "strong",
        },
        {
          "id": "options-col",
          "component": "Column",
          "children": ["opt-a", "opt-b", "opt-c", "opt-d"],
          "align": "stretch",
        },
        {
          "id": "opt-a",
          "component": "Button",
          "variant": "borderless",
          "child": "opt-a-label",
          "action": { "event": { "name": "select_answer", "context": { "answer": "Triangle" } } },
        },
        { "id": "opt-a-label", "component": "Text", "text": "A. Triangle" },
        {
          "id": "opt-b",
          "component": "Button",
          "variant": "borderless",
          "child": "opt-b-label",
          "action": { "event": { "name": "select_answer", "context": { "answer": "Square" } } },
        },
        { "id": "opt-b-label", "component": "Text", "text": "B. Square" },
        {
          "id": "opt-c",
          "component": "Button",
          "variant": "borderless",
          "child": "opt-c-label",
          "action": { "event": { "name": "select_answer", "context": { "answer": "Circle" } } },
        },
        { "id": "opt-c-label", "component": "Text", "text": "C. Circle" },
        {
          "id": "opt-d",
          "component": "Button",
          "variant": "borderless",
          "child": "opt-d-label",
          "action": { "event": { "name": "select_answer", "context": { "answer": "Hexagon" } } },
        },
        { "id": "opt-d-label", "component": "Text", "text": "D. Hexagon" },
        {
          "id": "submit-row",
          "component": "Row",
          "children": ["btn-submit", "selected-hint"],
          "align": "center",
        },
        {
          "id": "btn-submit",
          "component": "Button",
          "variant": "primary",
          "child": "btn-submit-label",
          "action": { "event": { "name": "submit_answer", "context": {} } },
        },
        { "id": "btn-submit-label", "component": "Text", "text": "Submit" },
        { "id": "selected-hint", "component": "Text", "text": "Select an answer", "variant": "caption" },
        {
          "id": "result-area",
          "component": "Column",
          "children": [],
          "align": "stretch",
        },
      ],
    },
  },
] satisfies ServerToClientMessage[];

// Client Action: highlight selected option via store message (immediate, no delay)
const OPTION_IDS: Record<string, string> = {
  "Triangle": "opt-a",
  "Square": "opt-b",
  "Circle": "opt-c",
  "Hexagon": "opt-d",
};
const ALL_OPTIONS = ["Triangle", "Square", "Circle", "Hexagon"];

export function buildSelectMessage(selected: string): ServerToClientMessage {
  const components: ComponentInstance[] = [];
  for (const opt of ALL_OPTIONS) {
    const id = OPTION_IDS[opt];
    components.push({
      "id": id,
      "component": "Button",
      "variant": opt === selected ? "primary" : "borderless",
      "child": `${id}-label`,
      "action": { "event": { "name": "select_answer", "context": { "answer": opt } } },
    });
  }
  components.push({
    "id": "selected-hint",
    "component": "Text",
    "text": `Selected: ${selected}`,
    "variant": "caption",
    "emphasis": "medium",
  });
  components.push({
    "id": "btn-submit",
    "component": "Button",
    "variant": "primary",
    "child": "btn-submit-label",
    "action": { "event": { "name": "submit_answer", "context": { "answer": selected } } },
  });
  return {
    "version": "1.0",
    "updateComponents": { "surfaceId": "main", "components": components },
  } satisfies ServerToClientMessage;
}

// Agent validates and streams result
const correctResponse: ServerToClientMessage[] = [
  {
    "version": "1.0",
    "updateComponents": {
      "surfaceId": "main",
      "components": [
        { "id": "result-area", "component": "Column", "children": ["result-loading"], "align": "stretch" },
        { "id": "result-loading", "component": "Loading", "variant": "block" },
        { "id": "btn-submit-label", "component": "Text", "text": "Checking..." },
      ],
    },
  },
  {
    "version": "1.0",
    "updateComponents": {
      "surfaceId": "main",
      "components": [
        { "id": "result-area", "component": "Column", "children": ["result-card"], "align": "stretch" },
        { "id": "result-card", "component": "Card", "child": "result-col", "variant": "filled" },
        { "id": "result-col", "component": "Column", "children": ["result-row", "result-explain"], "align": "stretch" },
        { "id": "result-row", "component": "Row", "children": ["result-icon", "result-text"], "align": "center" },
        {
          "id": "result-icon",
          "component": "Image",
          "url": "https://img.icons8.com/fluency/48/checkmark.png",
          "variant": "icon",
        },
        { "id": "result-text", "component": "Text", "text": "Correct!", "variant": "h4", "emphasis": "strong" },
        {
          "id": "result-explain",
          "component": "Text",
          "text":
            "A triangle is a polygon with exactly three sides and three angles. The word comes from Latin \"tri\" (three) + \"angulus\" (angle).",
          "variant": "body",
        },
        { "id": "btn-submit-label", "component": "Text", "text": "Reset" },
      ],
    },
  },
] satisfies ServerToClientMessage[];

const wrongResponse: ServerToClientMessage[] = [
  {
    "version": "1.0",
    "updateComponents": {
      "surfaceId": "main",
      "components": [
        { "id": "result-area", "component": "Column", "children": ["result-loading"], "align": "stretch" },
        { "id": "result-loading", "component": "Loading", "variant": "block" },
        { "id": "btn-submit-label", "component": "Text", "text": "Checking..." },
      ],
    },
  },
  {
    "version": "1.0",
    "updateComponents": {
      "surfaceId": "main",
      "components": [
        { "id": "result-area", "component": "Column", "children": ["result-card"], "align": "stretch" },
        { "id": "result-card", "component": "Card", "child": "result-col", "variant": "filled" },
        { "id": "result-col", "component": "Column", "children": ["result-row", "result-explain"], "align": "stretch" },
        { "id": "result-row", "component": "Row", "children": ["result-icon", "result-text"], "align": "center" },
        {
          "id": "result-icon",
          "component": "Image",
          "url": "https://img.icons8.com/fluency/48/cancel.png",
          "variant": "icon",
        },
        { "id": "result-text", "component": "Text", "text": "Incorrect!", "variant": "h4", "emphasis": "strong" },
        {
          "id": "result-explain",
          "component": "Text",
          "text":
            "The correct answer is Triangle. A triangle has exactly three sides, while a Square has 4, a Circle has 0 straight sides, and a Hexagon has 6.",
          "variant": "body",
        },
        { "id": "btn-submit-label", "component": "Text", "text": "Reset" },
      ],
    },
  },
] satisfies ServerToClientMessage[];

// Reset to initial state
export const resetMessage: ServerToClientMessage = {
  "version": "1.0",
  "updateComponents": {
    "surfaceId": "main",
    "components": [
      {
        "id": "opt-a",
        "component": "Button",
        "variant": "borderless",
        "child": "opt-a-label",
        "action": { "event": { "name": "select_answer", "context": { "answer": "Triangle" } } },
      },
      {
        "id": "opt-b",
        "component": "Button",
        "variant": "borderless",
        "child": "opt-b-label",
        "action": { "event": { "name": "select_answer", "context": { "answer": "Square" } } },
      },
      {
        "id": "opt-c",
        "component": "Button",
        "variant": "borderless",
        "child": "opt-c-label",
        "action": { "event": { "name": "select_answer", "context": { "answer": "Circle" } } },
      },
      {
        "id": "opt-d",
        "component": "Button",
        "variant": "borderless",
        "child": "opt-d-label",
        "action": { "event": { "name": "select_answer", "context": { "answer": "Hexagon" } } },
      },
      { "id": "selected-hint", "component": "Text", "text": "Select an answer", "variant": "caption" },
      { "id": "btn-submit-label", "component": "Text", "text": "Submit" },
      { "id": "result-area", "component": "Column", "children": [], "align": "stretch" },
    ],
  },
} satisfies ServerToClientMessage;

export function getAgentResponse(selectedAnswer: string): ServerToClientMessage[] | null {
  return selectedAnswer === "Triangle" ? correctResponse : wrongResponse;
}
