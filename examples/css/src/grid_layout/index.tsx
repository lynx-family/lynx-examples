import { root } from "@lynx-js/react";
import { useCallback, useEffect, useState } from "@lynx-js/react";
import arrow from "./assets/arrow.png";
import lynxLogo from "./assets/lynx-logo.png";
import reactLynxLogo from "./assets/react-logo.png";

import "./index.scss";
const GridComponent = () => {
  const [alterLogo, setAlterLogo] = useState(false);

  useEffect(() => {
    console.info("Hello, ReactLynx");
  }, []);

  const onTap = useCallback(() => {
    "background-only";
    setAlterLogo(!alterLogo);
  }, [alterLogo]);

  return (
    <page>
      <view className="Background" />
      <view className="Container">
        <view className="GridContainer" style={{ gridTemplateColumns: "20% max-content minmax(50px, max-content)" }}>
          <view className="Logo" bindtap={onTap}>
            {alterLogo
              ? <image src={reactLynxLogo} className="Logo--react" />
              : <image src={lynxLogo} className="Logo--lynx" />}
          </view>
          <text className="Title" style={{ alignSelf: "center" }}>No Wrap</text>
          <text className="Subtitle">min-width:50px, will fit the container</text>
        </view>
        <view className="Content">
          <image src={arrow} className="Arrow" />
          <text className="Description">Tap the logo and have fun!</text>
          <text className="Hint">
            Edit<text style={{ fontStyle: "italic" }}>{" src/index.tsx "}</text>
            to see updates!
          </text>
        </view>
      </view>
    </page>
  );
};
root.render(<GridComponent />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
