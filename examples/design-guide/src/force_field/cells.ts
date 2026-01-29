type Cell = { id: string; i: number; j: number; cx: number; cy: number };

const cols = 20;
const rows = 20;
const CELLS: Cell[] = [];

for (let c = 0; c < cols; c++) {
  for (let r = 0; r < rows; r++) {
    CELLS.push({
      id: `${r}-${c}`,
      i: r,
      j: c,
      // normalized cell center in [0,1]
      cx: (c + 0.5) / cols,
      cy: (r + 0.5) / rows,
    });
  }
}

export { CELLS };
