import { clamp01 } from "./math.js";

function lerpColor(
  t: number,
  colorA: string,
  colorB: string,
): string {
  const [rA, gA, bA] = hexToRgb(colorA);
  const [rB, gB, bB] = hexToRgb(colorB);

  const r = mix(rA, rB, t);
  const g = mix(gA, gB, t);
  const b = mix(bA, bB, t);

  return rgbToHex(r, g, b);
}

function hexToRgb(hex: string): [number, number, number] {
  const n = hex.replace("#", "");
  return [
    parseInt(n.slice(0, 2), 16),
    parseInt(n.slice(2, 4), 16),
    parseInt(n.slice(4, 6), 16),
  ];
}

function rgbToHex(r: number, g: number, b: number): string {
  return (
    "#"
    + [r, g, b]
      .map(v => Math.round(v).toString(16).padStart(2, "0"))
      .join("")
  );
}

function mix(a: number, b: number, t: number) {
  return a * (1 - t) + b * t;
}

function lerpColor4(
  t: number,
  c0: string,
  c1: string,
  c2: string,
  c3: string,
): string {
  const x = clamp01(t);

  if (x < 1 / 3) {
    return lerpColor(x / (1 / 3), c0, c1);
  }
  if (x < 2 / 3) {
    return lerpColor((x - 1 / 3) / (1 / 3), c1, c2);
  }
  return lerpColor((x - 2 / 3) / (1 / 3), c2, c3);
}

export { lerpColor, lerpColor4 };
