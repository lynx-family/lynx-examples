import type { ServerToClientMessage } from "@lynx-js/genui/a2ui";

export const initialMessages: ServerToClientMessage[] = [
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
          "child": "quiz-col",
          "variant": "elevated",
        },
        {
          "id": "quiz-col",
          "component": "Column",
          "children": ["q-label", "q-text", "options-col", "submit-row", "result-area"],
          "align": "stretch",
          "gap": "compact",
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
          "gap": "compact",
        },
        {
          "id": "opt-a",
          "component": "Button",
          "variant": "secondary",
          "child": "opt-a-label",
          "action": { "event": { "name": "select_answer", "context": { "answer": "Triangle" } } },
        },
        { "id": "opt-a-label", "component": "Text", "text": "A. Triangle" },
        {
          "id": "opt-b",
          "component": "Button",
          "variant": "secondary",
          "child": "opt-b-label",
          "action": { "event": { "name": "select_answer", "context": { "answer": "Square" } } },
        },
        { "id": "opt-b-label", "component": "Text", "text": "B. Square" },
        {
          "id": "opt-c",
          "component": "Button",
          "variant": "secondary",
          "child": "opt-c-label",
          "action": { "event": { "name": "select_answer", "context": { "answer": "Circle" } } },
        },
        { "id": "opt-c-label", "component": "Text", "text": "C. Circle" },
        {
          "id": "opt-d",
          "component": "Button",
          "variant": "secondary",
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
] as ServerToClientMessage[];

// Client Action: highlight selected option via store message (immediate, no delay)
const OPTION_IDS: Record<string, string> = {
  "Triangle": "opt-a",
  "Square": "opt-b",
  "Circle": "opt-c",
  "Hexagon": "opt-d",
};
const ALL_OPTIONS = ["Triangle", "Square", "Circle", "Hexagon"];

export function buildSelectMessage(selected: string): ServerToClientMessage {
  const components: Record<string, unknown>[] = [];
  for (const opt of ALL_OPTIONS) {
    const id = OPTION_IDS[opt];
    components.push({
      "id": id,
      "component": "Button",
      "variant": opt === selected ? "primary" : "secondary",
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
    "version": "v0.9",
    "updateComponents": { "surfaceId": "main", "components": components },
  } as ServerToClientMessage;
}

// Agent validates and streams result
const correctResponse: ServerToClientMessage[] = [
  {
    "version": "v0.9",
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
    "version": "v0.9",
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
] as ServerToClientMessage[];

const wrongResponse: ServerToClientMessage[] = [
  {
    "version": "v0.9",
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
    "version": "v0.9",
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
] as ServerToClientMessage[];

// Reset to initial state
export const resetMessage: ServerToClientMessage = {
  "version": "v0.9",
  "updateComponents": {
    "surfaceId": "main",
    "components": [
      {
        "id": "opt-a",
        "component": "Button",
        "variant": "secondary",
        "child": "opt-a-label",
        "action": { "event": { "name": "select_answer", "context": { "answer": "Triangle" } } },
      },
      {
        "id": "opt-b",
        "component": "Button",
        "variant": "secondary",
        "child": "opt-b-label",
        "action": { "event": { "name": "select_answer", "context": { "answer": "Square" } } },
      },
      {
        "id": "opt-c",
        "component": "Button",
        "variant": "secondary",
        "child": "opt-c-label",
        "action": { "event": { "name": "select_answer", "context": { "answer": "Circle" } } },
      },
      {
        "id": "opt-d",
        "component": "Button",
        "variant": "secondary",
        "child": "opt-d-label",
        "action": { "event": { "name": "select_answer", "context": { "answer": "Hexagon" } } },
      },
      { "id": "selected-hint", "component": "Text", "text": "Select an answer", "variant": "caption" },
      { "id": "btn-submit-label", "component": "Text", "text": "Submit" },
      { "id": "result-area", "component": "Column", "children": [], "align": "stretch" },
    ],
  },
} as ServerToClientMessage;

export function getAgentResponse(selectedAnswer: string): ServerToClientMessage[] | null {
  return selectedAnswer === "Triangle" ? correctResponse : wrongResponse;
}
