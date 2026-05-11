export function setEventHandler(handleEvent: (handlerName: string) => unknown) {
  const previousPublishEvent = lynxCoreInject.tt.publishEvent;
  lynxCoreInject.tt.publishEvent = (handlerName: string, data: unknown) => {
    if (handleEvent(handlerName)) return;
    previousPublishEvent?.call(lynxCoreInject.tt, handlerName, data);
  };
}
