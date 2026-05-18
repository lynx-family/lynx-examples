import { setupEventHandler } from "../common/background/event.js";
import { renderState, setRenderState, syncState } from "../common/background/state.js";

type CounterState = {
  count: number;
};

// get initial state from main thread
const state = renderState as CounterState;

// handle event from main thread and sync state to main thread
setupEventHandler((handlerName: string) => {
  if (handlerName === "increment") {
    const { count } = state;
    setRenderState({ count: count + 1 });
    syncState();
    return true;
  }
  return false;
});
