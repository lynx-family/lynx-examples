// A hand-written module in the Lynx loadScript (AMD) format — the same shape
// the runtime wrapper emits — loadable via `lynx.requireModuleAsync`.
//
// No marker needed: lynx-core shares plain modules per JS context by default,
// so when multiple pages run in one shared-context LynxGroup they observe the
// same exports (and thus the same `state`). No bundler or toolchain
// involvement.
(function() {
  "use strict";
  var g = globalThis;
  function init(injected) {
    g.__bundle__holder = void 0;
    var tt = injected.tt;
    tt.define("vanilla-shared-state.js", function(require, module, exports) {
      var state = { count: 0 };
      exports.state = state;
      exports.bump = function(page) {
        state.count += 1;
        console.info(
          "[vanilla-shared] bump from " + page + ", count = " + state.count,
        );
        return state.count;
      };
    });
    return tt.require("vanilla-shared-state.js");
  }
  if (g && g.bundleSupportLoadScript) {
    var holder = { init: init };
    g.__bundle__holder = holder;
    return holder;
  }
  return init({ tt: g.tt });
})();
