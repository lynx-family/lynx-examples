import "../index.scss";
import { useEffect, useMainThreadRef, useRef } from "@lynx-js/react";
import { type ListScrollEvent, MainThread } from "@lynx-js/types";
import type { NodesRef } from "@lynx-js/types";
import LikeImageCard from "../Components/LikeImageCard.jsx";
import type { Picture } from "../Pictures/furnitures/furnituresPictures.jsx";
import { calculateEstimatedSize } from "../utils.jsx";
import { NiceScrollbar, type NiceScrollbarRef } from "./NiceScrollbar.jsx";
import { adjustScrollbarMTS, NiceScrollbarMTS } from "./NiceScrollbarMTS.jsx";

export const Gallery = (props: { pictureData: Picture[] }) => {
  const { pictureData } = props;
  const scrollbarRef = useRef<NiceScrollbarRef>(null);
  const scrollbarMTSRef = useMainThreadRef<MainThread.Element>(null);
  const galleryRef = useRef<NodesRef>(null);

  const onScrollMTS = (event: ListScrollEvent) => {
    "main thread";
    adjustScrollbarMTS(
      event.detail.scrollTop,
      event.detail.scrollHeight,
      event.detail.listHeight || SystemInfo.pixelHeight / SystemInfo.pixelRatio,
      scrollbarMTSRef,
    );
  };

  const onScroll = (event: ListScrollEvent) => {
    scrollbarRef.current?.adjustScrollbar(
      event.detail.scrollTop,
      event.detail.scrollHeight,
      event.detail.listHeight || SystemInfo.pixelHeight / SystemInfo.pixelRatio,
    );
  };

  useEffect(() => {
    galleryRef.current
      ?.invoke({
        method: "autoScroll",
        params: {
          rate: "60",
          start: true,
        },
      })
      .exec();
  }, []);

  return (
    <view className="gallery-wrapper">
      <NiceScrollbar ref={scrollbarRef} />
      <NiceScrollbarMTS main-thread:ref={scrollbarMTSRef} />
      <list
        ref={galleryRef}
        className="list"
        list-type="waterfall"
        column-count={2}
        scroll-orientation="vertical"
        custom-list-name="list-container"
        bindscroll={onScroll}
        main-thread:bindscroll={onScrollMTS}
        scroll-event-throttle={0}
      >
        {pictureData.map((picture: Picture, index: number) => (
          <list-item
            estimated-main-axis-size-px={calculateEstimatedSize(picture.width, picture.height)}
            item-key={"" + index}
            key={"" + index}
          >
            <LikeImageCard picture={picture} />
          </list-item>
        ))}
      </list>
    </view>
  );
};

export default Gallery;
