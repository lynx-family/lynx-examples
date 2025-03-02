import { root } from "@lynx-js/react";
import { furnituresPictures } from "../Pictures/furnitures/furnituresPictures.jsx";
import Gallery from "./Gallery.jsx";

function GalleryComplete() {
  return <Gallery pictureData={furnituresPictures} />;
}

root.render(<GalleryComplete />);
