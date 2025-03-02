import { root } from "@lynx-js/react";
import { useState } from "react";
import "./index.scss";

const App = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handlePageClick = () => {
    setShowPopup(prev => !prev);
  };

  return (
    <page className="container" bindtap={handlePageClick}>
      <view
        style={{
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <text className="title">Use Page Element Example, Click it</text>
      </view>
      {showPopup && (
        <view className="popup">
          <text className="popup-text">Click Response</text>
        </view>
      )}
    </page>
  );
};

root.render(<App />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
