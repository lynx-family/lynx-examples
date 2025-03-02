import { root } from "@lynx-js/react";
import "./styles.scss";
import { Page } from "../Components/Page";
import { picsArr } from "../utils/pics";
import { Swiper } from "./Swiper";

export default function App() {
  return (
    <Page>
      <Swiper data={picsArr} />
    </Page>
  );
}

root.render(<App />);
