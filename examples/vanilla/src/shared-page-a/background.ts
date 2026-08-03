import { setData } from "../common/background/data.js";
import { setBackgroundEventHandler } from "../common/background/event.js";
import { setupBackground } from "../common/background/setup.js";

setupBackground();

// `public/shared-state.js`, served by the dev server. The webpack public
// path is normalized by rspeedy dev to `http://<host>:<port>/` (device
// reachable, actual port), so the URL needs no config-time baking.
// lynx-core shares plain modules per JS context by default, so when pages
// run in one shared-context LynxGroup, lynx.requireModuleAsync hands every
// page the same module instance.
declare let __webpack_public_path__: string;
const SHARED_STATE_URL = `${__webpack_public_path__}shared-state.js`;
const PAGE = "page-a";

type SharedState = {
  state: { count: number };
  bump: (page: string) => number;
};

let shared: SharedState | undefined;

lynx.requireModuleAsync<SharedState>(SHARED_STATE_URL, (error, mod) => {
  if (error || !mod) {
    console.error(
      `[vanilla-shared] load failed: ${error?.message ?? "no exports"}`,
    );
    // Make the failure visible: a page whose shared module failed to load
    // would otherwise look fine but ignore every tap.
    setData({ count: "ERR" });
    return;
  }
  shared = mod;
  // Debug path: bump once on load, so the counter is alive (and the sharing
  // observable) without any human interaction.
  setData({ count: mod.bump(PAGE) });
});

setBackgroundEventHandler((handlerName) => {
  if (!shared) return false;
  if (handlerName === "bump") {
    // Human path: tap +1 — increments the module instance shared with the
    // other pages in the group.
    setData({ count: shared.bump(PAGE) });
    return true;
  }
  if (handlerName === "sync") {
    // Read-only refresh: shows increments made by the other pages.
    setData({ count: shared.state.count });
    return true;
  }
  return false;
});
