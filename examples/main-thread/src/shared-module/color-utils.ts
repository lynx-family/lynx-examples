/**
 * Shared color utilities — available on both Main Thread and Background Thread.
 *
 * This module does NOT contain a 'main thread' directive. It is imported
 * with `with { runtime: 'shared' }` so that its code is included in both
 * thread bundles.
 */

const COLORS = ["#4FC3F7", "#81C784", "#FFB74D", "#E57373", "#BA68C8"];

export function getNextColor(index: number): string {
  return COLORS[index % COLORS.length]!;
}

export function getColorCount(): number {
  return COLORS.length;
}
