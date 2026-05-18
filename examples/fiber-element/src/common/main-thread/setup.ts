import type { ElementRef } from "@lynx-js/type-element-api";

type MainThreadApi = {
  renderPage: (...args: any[]) => unknown;
  updatePage: (...args: any[]) => unknown;
  getPageData?: (...args: any[]) => unknown;
  processData?: (...args: any[]) => unknown;
};

type MainThreadContext = {
  page: ElementRef;
  pageId: number;
};

function defaultGetPageData() {
  return {};
}

function defaultProcessData(data: unknown) {
  return data;
}

export function setupMainThread(
  init: (context: MainThreadContext) => MainThreadApi,
): void {
  const page = __CreatePage("0", 0);
  const pageId = __GetElementUniqueID(page);
  __SetClasses(page, "page");

  const api = init({
    page,
    pageId,
  });

  Object.assign(globalThis, {
    getPageData: defaultGetPageData,
    processData: defaultProcessData,
    ...api,
  });
}
