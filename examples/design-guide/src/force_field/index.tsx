import { root } from "@lynx-js/react";
import { useMemo } from "@lynx-js/react";

import { Caption } from "../shared/components/caption/index.jsx";
import { usePointerPoint } from "../shared/hooks/use-pointer-point/index.js";
import { CELLS } from "./cells.js";
import { lerpColor } from "./color.js";
import { makeForceField } from "./field-force.js";
import { Dot, DotField } from "./field.jsx";
import { clamp01 } from "./math.js";
import "./index.css";

const RADIUS = 0.60;

const forceAt = makeForceField({
  radius: RADIUS,
  strength: 0.15,
  falloff: 1.25,
  mode: "repel",
  swirl: 0.6,
  clampMax: 0.14,
});

function App() {
  const {
    p, // Force point in normalized space
    bind, // Spreadable interaction bindings (touch + mouse + layout)
  } = usePointerPoint({ x0: 0.6, y0: 1 });

  const models = useMemo(() => {
    let minD = Infinity;
    let accentId: string | null = null;

    // First pass: compute everything and track nearest dot
    const tmp = CELLS.map((cell) => {
      const f = forceAt({ x: cell.cx, y: cell.cy }, p);

      if (f.d < minD) {
        minD = f.d;
        accentId = cell.id;
      }

      const x = clamp01(cell.cx + f.dx);
      const y = clamp01(cell.cy + f.dy);

      const dist01 = clamp01(f.d / RADIUS);
      const g = Math.pow(dist01, 1.5);

      const s = 0.5 + (1 - g) * 2.5;
      const color = lerpColor(g, "#ff7385", "#00d0f1");

      return { id: cell.id, x, y, s, color };
    });

    // Second pass: mark accent
    return tmp.map((m) => ({
      ...m,
      useAccent: m.id === accentId,
    }));
  }, [p.x, p.y]);

  return (
    <view className="design-container">
      <DotField
        fieldSize={300}
        dotSize={5}
        dotAccentColor="#ff1a6e"
        {...bind}
      >
        {models.map((m) => (
          <Dot
            key={m.id}
            x={m.x}
            y={m.y}
            s={m.s}
            color={m.color}
            useAccent={m.useAccent}
          />
        ))}
      </DotField>
      <Caption
        title="Force Field"
        subtitle="Powered by Inline CSS Variables"
        footnote="Requires Lynx SDK 3.6+"
      />
    </view>
  );
}

root.render(<App />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
