// dprint-ignore
const addWasmBytes = new Uint8Array([
  // Equivalent WAT:
  // (module
  //   (func $add (param i32 i32) (result i32)
  //     local.get 0
  //     local.get 1
  //     i32.add)
  //   (export "add" (func $add)))

  // Wasm module header: magic number and version.
  0x00, 0x61, 0x73, 0x6d,
  0x01, 0x00, 0x00, 0x00,

  // Type section: (i32, i32) -> i32.
  0x01, 0x07, 0x01,
  0x60, 0x02, 0x7f, 0x7f, 0x01, 0x7f,

  // Function section: one function using type index 0.
  0x03, 0x02, 0x01, 0x00,

  // Export section: export function 0 as "add".
  0x07, 0x07, 0x01,
  0x03, 0x61, 0x64, 0x64,
  0x00, 0x00,

  // Code section: local.get 0; local.get 1; i32.add.
  0x0a, 0x09, 0x01, 0x07, 0x00,
  0x20, 0x00,
  0x20, 0x01,
  0x6a,
  0x0b,
]);

type AddExports = {
  add: (left: number, right: number) => number;
};

export function addWithWasm(left: number, right: number): number {
  const module = new WebAssembly.Module(addWasmBytes);
  const instance = new WebAssembly.Instance(module);
  const exports = instance.exports as AddExports;

  return exports.add(left, right);
}
