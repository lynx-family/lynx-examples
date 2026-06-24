import { useState } from "@lynx-js/react";

import { SortableItem, SortableItemArea, SortableRoot } from "@lynx-js/lynx-ui";
import type { SortableData } from "@lynx-js/lynx-ui";

interface DemoItem {
  id: string;
  label: string;
}

function createData(): SortableData<DemoItem>[] {
  return Array.from({ length: 5 }, (_, i) => ({
    getSortingKey: () => `item-${i}`,
    dataItem: { id: `item-${i}`, label: `Item ${i + 1}` },
  }));
}

export function SortableSection() {
  const [data, setData] = useState<SortableData<DemoItem>[]>(createData);

  return (
    <view className="section">
      <text className="section-title">Sortable</text>
      <view className="section-content">
        <text className="row-label">Long-press & drag to reorder</text>
        <view
          className="sortable-boundary"
          id="sortableBoundary"
          style={{ zIndex: "0" }}
        >
          <SortableRoot
            data={data}
            boundaryId="sortableBoundary"
            onSortEnd={(sortedData: SortableData<DemoItem>[]) => setData(sortedData)}
          >
            {(item: SortableData<DemoItem>) => (
              <SortableItem
                key={item.getSortingKey()}
                as="DraggableRoot"
                className="sortable-item"
                sortingKey={item.getSortingKey()}
              >
                <SortableItemArea className="sortable-item-area">
                  <text className="sortable-item-text">
                    {item.dataItem.label}
                  </text>
                </SortableItemArea>
              </SortableItem>
            )}
          </SortableRoot>
        </view>
      </view>
    </view>
  );
}
