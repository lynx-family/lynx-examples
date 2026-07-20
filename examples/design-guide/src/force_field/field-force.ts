import { smoothstep01 } from "./math.js";
export type Vec2 = { x: number; y: number };

export type ForceFieldOptions = {
  // Core shape
  /**
   * influence radius in normalized space (0..sqrt(2))
   */
  radius?: number;
  /**
   *  overall displacement magnitude (normalized units)
   */
  strength?: number;
  /**
   * higher = faster decay
   */
  falloff?: number;
  /**
   * interaction direction:
   * - "repel": push points away from the center
   * - "attract": pull points toward the center
   */
  mode?: "repel" | "attract";

  // Optional style
  /**
   * tangential component, gives "vortex" feel
   */
  swirl?: number;
  /**
   * avoids singularity near center
   */
  soften?: number;
  /**
   *  max displacement magnitude
   */
  clampMax?: number;
};

const DEFAULTS: Required<ForceFieldOptions> = {
  radius: 0.45,
  strength: 0.085,
  falloff: 2.2,
  mode: "repel",
  swirl: 0.0,
  soften: 0.02,
  clampMax: 0.12,
};

export function makeForceField(user: ForceFieldOptions = {}) {
  const opt = { ...DEFAULTS, ...user };

  return function forceAt(cell: Vec2, p: Vec2) {
    // Vector from p -> cell
    const vx = cell.x - p.x;
    const vy = cell.y - p.y;
    const d = Math.sqrt(vx * vx + vy * vy);

    // Outside radius: no force
    if (d >= opt.radius) return { dx: 0, dy: 0, t: 1, d };

    // Normalize direction (avoid NaN at center)
    const inv = 1 / Math.max(d, opt.soften);
    const nx = vx * inv;
    const ny = vy * inv;

    // 0..1 influence inside radius (1 at center, 0 at edge)
    const u = 1 - d / opt.radius;

    // Smooth & decay
    const influence = smoothstep01(u);
    const decay = Math.pow(influence, opt.falloff);

    // Base radial magnitude
    let mag = opt.strength * decay;

    // Repel vs attract
    if (opt.mode === "attract") mag = -mag;

    // Add optional swirl (tangential)
    // Tangent is perpendicular to radial: ( -ny, nx )
    const tx = -ny;
    const ty = nx;

    let dx = nx * mag + tx * (opt.swirl * mag);
    let dy = ny * mag + ty * (opt.swirl * mag);

    // Clamp displacement magnitude for stability
    const m = Math.sqrt(dx * dx + dy * dy);
    if (m > opt.clampMax) {
      const s = opt.clampMax / m;
      dx *= s;
      dy *= s;
    }

    // t: a handy 0..1 "field value" you can reuse for color/size
    // Here we invert so t=0 near center, t=1 far away.
    const t = 1 - decay;

    return { dx, dy, t, d };
  };
}
