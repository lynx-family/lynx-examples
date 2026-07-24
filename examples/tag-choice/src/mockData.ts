export interface Choice {
  label?: string;
  text: string;
}

export const choices: Choice[] = [
  { label: "clear", text: "Clear explanation" },
  { label: "examples", text: "Useful examples" },
  { label: "pace", text: "Good pacing" },
  { label: "visual", text: "Strong visuals" },
  { label: "practical", text: "Practical steps" },
  { label: "", text: "Hidden fallback entry" },
];

export const initialChoices = ["clear", "practical"];
