export function smoothstep01(x: number) {
  const t = clamp01(x);
  return t * t * (3 - 2 * t);
}

export function clamp01(x: number) {
  return x < 0 ? 0 : x > 1 ? 1 : x;
}
