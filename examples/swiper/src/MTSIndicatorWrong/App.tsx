import { root } from "@lynx-js/react";
import "./styles.scss";
import { picsArr } from "../utils/pics";
import { Swiper } from "./Swiper";

export default function App() {
  return <Swiper data={picsArr} />;
}

root.render(<App />);
