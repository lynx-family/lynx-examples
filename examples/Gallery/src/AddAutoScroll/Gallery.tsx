import "../index.scss";
import { useEffect, useRef } from "@lynx-js/react";
import type { NodesRef } from "@lynx-js/types";
import LikeImageCard from "../Components/LikeImageCard.jsx";
import type { Picture } from "../Pictures/furnitures/furnituresPictures.jsx";
import { calculateEstimatedSize } from "../utils.jsx";

export const Gallery = (props: { pictureData: Picture[] }) => {
  const { pictureData } = props;
  const galleryRef = useRef<NodesRef>(null);

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
      <list
        ref={galleryRef}
        className="list"
        list-type="waterfall"
        column-count={2}
        scroll-orientation="vertical"
        custom-list-name="list-container"
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
