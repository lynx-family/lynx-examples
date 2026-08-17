import type { ElementRef, RawTextElementRef } from "@lynx-js/type-element-api";

import type { PerformancePatch } from "../background/performance.js";
import { createText, createView } from "./element.js";
import { bindMainThreadEvent } from "./event.js";

type PerformanceSummaries = Partial<Record<PerformancePatch["kind"], string>>;

export type PerformancePanel = {
  destroy: () => void;
  update: (patch: PerformancePatch) => void;
};

export function renderPerformancePanel(
  page: ElementRef,
  pageId: number,
  summaries: PerformanceSummaries,
): PerformancePanel {
  const performanceButton = createView(pageId, "performance-fab");
  __AppendElement(
    performanceButton,
    createText(pageId, "performance-fab-label", "Perf").text,
  );
  __AppendElement(page, performanceButton);

  const performancePanel = createView(pageId, "performance-panel");
  __AppendElement(
    performancePanel,
    createText(pageId, "performance-title", "Performance API").text,
  );

  const initialRender = createText(
    pageId,
    "performance-row",
    summaries.initialRender ?? "Initial render: waiting for loadBundle...",
  );
  let initialRenderText: RawTextElementRef | undefined = initialRender.raw;
  __AppendElement(performancePanel, initialRender.text);

  const update = createText(
    pageId,
    "performance-row",
    summaries.update ?? "Update: interact with the page to measure the pipeline",
  );
  let updateText: RawTextElementRef | undefined = update.raw;
  __AppendElement(performancePanel, update.text);

  __AppendElement(
    performancePanel,
    createText(
      pageId,
      "performance-hint",
      "Full entries are logged on the background thread.",
    ).text,
  );
  __AppendElement(page, performancePanel);

  let isExpanded = false;
  bindMainThreadEvent(performanceButton, "tap", () => {
    isExpanded = !isExpanded;
    __SetClasses(
      performancePanel,
      isExpanded ? "performance-panel" : "performance-panel performance-panel-collapsed",
    );
    __FlushElementTree();
  });
  __SetClasses(performancePanel, "performance-panel performance-panel-collapsed");

  return {
    update(patch) {
      summaries[patch.kind] = patch.summary;
      const target = patch.kind === "initialRender"
        ? initialRenderText
        : updateText;
      if (!target) return;
      __SetAttribute(target, "text", patch.summary);
      __FlushElementTree();
    },
    destroy() {
      initialRenderText = undefined;
      updateText = undefined;
    },
  };
}
