"use strict";

const COMPILER_LOADER_API = Symbol.for("framework:my-lynx:compiler-loader");

module.exports = function compilerLoader(source) {
  this.cacheable();
  const compile = this[COMPILER_LOADER_API];
  if (typeof compile !== "function") {
    throw new Error("[pluginMyLynx] Compiler loader API is unavailable.");
  }

  return compile({
    layer: this._module?.layer,
    resourceQuery: this.resourceQuery,
    source,
  });
};
