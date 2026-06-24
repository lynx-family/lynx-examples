import { useRef, useState } from "@lynx-js/react";

import { FeedList } from "@lynx-js/lynx-ui";
import type { FeedListRef } from "@lynx-js/lynx-ui";

const INITIAL_ITEMS = Array.from({ length: 10 }, (_, i) => ({
  id: `feed-${i}`,
  label: `Feed Item ${i + 1}`,
}));

export function FeedListSection() {
  const feedRef = useRef<FeedListRef>(null);
  const [items, setItems] = useState(INITIAL_ITEMS);

  const handleLoadMore = () => {
    const len = items.length;
    if (len >= 25) {
      feedRef.current?.changeHasMoreStatus(false);
      return;
    }
    setTimeout(() => {
      setItems((prev) => [
        ...prev,
        ...Array.from({ length: 5 }, (_, i) => ({
          id: `feed-${len + i}`,
          label: `Feed Item ${len + i + 1}`,
        })),
      ]);
    }, 500);
  };

  return (
    <view className="section">
      <text className="section-title">FeedList</text>
      <view className="section-content">
        <text className="row-label">Scroll to load more</text>
        <FeedList
          className="feed-list"
          listId="galleryFeedList"
          ref={feedRef}
          listType="single"
          spanCount={1}
          scrollOrientation="vertical"
          bounces={false}
          upperThresholdItemCount={2}
          lowerThresholdItemCount={2}
          onLowerThresholdMeet={handleLoadMore}
          loadMoreFooter={
            <list-item key="footer" item-key="footer" full-span>
              <view className="feed-footer">
                <text className="feed-footer-text">Loading...</text>
              </view>
            </list-item>
          }
          noMoreDataFooter={
            <list-item key="noMore" item-key="noMore" full-span>
              <view className="feed-footer">
                <text className="feed-footer-text">No more data</text>
              </view>
            </list-item>
          }
        >
          {items.map((item) => (
            <list-item key={item.id} item-key={item.id}>
              <view className="feed-item">
                <text className="feed-item-text">{item.label}</text>
              </view>
            </list-item>
          ))}
        </FeedList>
      </view>
    </view>
  );
}
