import type { MessageEvent } from "@lynx-js/types";

const destroyLifetimeEventName = "__DestroyLifetime";
const setTitleEventName = "SetTitle";
const patchEventName = "Patch";

const mainThread = lynx.getCoreContext();

const [, setTitle] = useState("Hello World");
function useState(initialValue: string) {
  let value = initialValue;
  const setValue = function(id: number, nextValue: string): void {
    value = nextValue;
    handleUpdate(id, value);
  };
  return [value, setValue] as const;
}

function handleUpdate(id: number, title: string): void {
  const patch = [["__SetAttribute", id, "text", title]];
  mainThread.dispatchEvent({
    type: patchEventName,
    data: patch,
  });
}

mainThread.addEventListener(setTitleEventName, onSetTitle);
function onSetTitle(event: MessageEvent): void {
  const data = event.data;
  setTitle(data.id, data.value);
}

function clearBackground(): void {
  mainThread.removeEventListener(setTitleEventName, onSetTitle);
  mainThread.removeEventListener(destroyLifetimeEventName, clearBackground);
}

mainThread.addEventListener(destroyLifetimeEventName, clearBackground);
