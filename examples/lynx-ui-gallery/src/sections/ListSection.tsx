import { List } from "@lynx-js/lynx-ui";

const DATA = Array.from({ length: 20 }, (_, i) => ({
  id: String(i),
  label: `List Item ${i + 1}`,
}));

export function ListSection() {
  return (
    <view className="section">
      <text className="section-title">List</text>
      <view className="section-content">
        <text className="row-label">Virtualized List (20 items)</text>
        <List
          className="gallery-list"
          listId="galleryList"
          listType="single"
          spanCount={1}
          scrollOrientation="vertical"
          bounces={false}
        >
          {DATA.map((item) => (
            <list-item key={item.id} item-key={item.id}>
              <view className="list-item">
                <text className="list-item-text">{item.label}</text>
              </view>
            </list-item>
          ))}
        </List>
      </view>
    </view>
  );
}
