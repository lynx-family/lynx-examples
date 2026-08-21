import type { ActionMap } from "../runtime/types.js";

const greetings = [
  "Hello Lynx",
  "Hello from the background thread",
  "Hello from Greeting.lynx",
];
let greetingIndex = 0;

export const actions: ActionMap = {
  async fetchGreeting(): Promise<string> {
    const greeting = greetings[greetingIndex] ?? greetings[0]!;
    greetingIndex = (greetingIndex + 1) % greetings.length;
    return greeting;
  },
};
