import { root } from "@lynx-js/react";

import "./index.scss";

const FilterView = () => {
  return (
    <view
      style={{
        display: "linear",
      }}
    >
      <view style={{ flexDirection: "column" }} className="container grey">
        <view
          style={{
            backgroundImage: "linear-gradient(black,pink)",
            width: "300px",
            height: "300px",
          }}
        />
      </view>
    </view>
  );
};

root.render(<FilterView />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
