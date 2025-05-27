import { root } from "@lynx-js/react";
import "./styles.scss";
import { Page } from "../Components/Page";
import { picsArr } from "../utils/pics";
import { Swiper } from "./Swiper";

const easing = (x: number) => {
  "main thread";
  return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
};

export default function App() {
  return (
    <Page>
      <Swiper data={picsArr} main-thread:easing={easing} />
    </Page>
  );
}

root.render(<App />);
