import { useCallback, useRef, useState } from "@lynx-js/react";

const COLS = 5;
const ROWS = 10;

const colHeaders = Array.from({ length: COLS }, (_, i) => String.fromCharCode(65 + i));
const rowHeaders = Array.from({ length: ROWS }, (_, i) => i);

function makeEmptyGrid() {
  return Array.from({ length: COLS }, () => Array.from({ length: ROWS }, () => ""));
}

export function App() {
  const [cells, setCells] = useState(makeEmptyGrid);
  const [editingCell, setEditingCell] = useState<
    {
      c: number;
      r: number;
    } | null
  >(null);
  const [editValue, setEditValue] = useState("");
  const [, setTick] = useState(0);
  const cellsRef = useRef(cells);
  cellsRef.current = cells;

  const evalCell = useCallback((exp: string): string => {
    if (!exp || !exp.startsWith("=")) return exp;

    const replaced = exp
      .slice(1)
      .replace(
        /\b([A-Z])(\d{1,2})\b/g,
        (_, col: string, row: string) => `get(${col.charCodeAt(0) - 65},${row})`,
      );

    try {
      const getCellValue = (c: number, r: number): number | string => {
        const val = evalCell(cellsRef.current[c][r]);
        const num = Number(val);
        return Number.isFinite(num) ? num : val;
      };
      return String(
        new Function("get", `return ${replaced}`)(getCellValue),
      );
    } catch {
      return "#ERR";
    }
  }, []);

  const startEdit = useCallback(
    (c: number, r: number) => {
      setEditingCell({ c, r });
      setEditValue(cells[c][r]);
    },
    [cells],
  );

  const finishEdit = useCallback(
    (e?: any) => {
      if (editingCell) {
        const { c, r } = editingCell;
        const val = (e?.detail?.value ?? editValue).trim();
        setCells((prev) => {
          const next = prev.map((col) => [...col]);
          next[c][r] = val;
          return next;
        });
        setEditingCell(null);
        setTick((t) => t + 1);
      }
    },
    [editingCell, editValue],
  );

  return (
    <view style={{ padding: "10px" }}>
      {/* Header row */}
      <view style={{ display: "flex", flexDirection: "row" }}>
        <view
          style={{
            width: "30px",
            height: "28px",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#eee",
          }}
        >
          <text style={{ fontSize: "12px" }}></text>
        </view>
        {colHeaders.map((col) => (
          <view
            key={col}
            style={{
              width: "70px",
              height: "28px",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#eee",
              borderWidth: "0.5px",
              borderColor: "#ccc",
            }}
          >
            <text style={{ fontSize: "13px", fontWeight: "bold" }}>
              {col}
            </text>
          </view>
        ))}
      </view>

      {/* Data rows */}
      {rowHeaders.map((r) => (
        <view key={r} style={{ display: "flex", flexDirection: "row" }}>
          {/* Row header */}
          <view
            style={{
              width: "30px",
              height: "28px",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#eee",
              borderWidth: "0.5px",
              borderColor: "#ccc",
            }}
          >
            <text style={{ fontSize: "12px" }}>{r}</text>
          </view>
          {/* Cells */}
          {colHeaders.map((col, c) => (
            <view
              key={col + r}
              style={{
                width: "70px",
                height: "28px",
                borderWidth: "0.5px",
                borderColor: "#ccc",
                justifyContent: "center",
              }}
              bindtap={() => startEdit(c, r)}
            >
              {editingCell && editingCell.c === c && editingCell.r === r
                ? (
                  <input
                    type="text"
                    // @ts-expect-error @lynx-js/types InputProps misses value
                    value={editValue}
                    style={{
                      height: "28px",
                      fontSize: "13px",
                      padding: "0 4px",
                    }}
                    bindinput={(e: any) => setEditValue(e.detail.value)}
                    bindconfirm={finishEdit}
                    bindblur={finishEdit}
                  />
                )
                : (
                  <text style={{ fontSize: "13px", padding: "0 4px" }}>
                    {evalCell(cells[c][r])}
                  </text>
                )}
            </view>
          ))}
        </view>
      ))}

      <text style={{ marginTop: "12px", fontSize: "12px", color: "#999" }}>
        Tap a cell to edit. Use =A0+B1 for formulas.
      </text>
    </view>
  );
}
