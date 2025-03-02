import { furnituresPictures } from "../Pictures/furnitures/furnituresPictures.jsx";

import { root } from "@lynx-js/react";
import Gallery from "./Gallery.jsx";

function PictureList() {
  return <Gallery pictureData={furnituresPictures} />;
}

root.render(<PictureList />);
