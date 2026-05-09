let count = 0;

function increment(): void {
  count += 1;
  lynx.getNativeApp().callLepusMethod("updatePage", { count });
}

const previousPublishEvent = lynxCoreInject.tt.publishEvent;

lynxCoreInject.tt.publishEvent = (handlerName: string, data: unknown) => {
  if (handlerName === "increment") {
    increment();
    return;
  }
  previousPublishEvent?.call(lynxCoreInject.tt, handlerName, data);
};
