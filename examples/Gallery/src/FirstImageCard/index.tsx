import { furnituresPictures } from "../Pictures/furnitures/furnituresPictures.jsx";
import ImageCard from "./ImageCard.jsx";
import "../index.scss";

import { root } from "@lynx-js/react";

function FirstImageCard() {
  const MyFirstPicture = furnituresPictures[0];
  return (
    <view className="gallery-wrapper single-card">
      <ImageCard picture={MyFirstPicture} />
    </view>
  );
}

root.render(<FirstImageCard />);
