// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
import image_0 from "@assets/item_0.jpg";
import image_1 from "@assets/item_1.jpg";
import image_2 from "@assets/item_2.jpg";

export const VerticalScrollItem = (props: { index: number }) => {
  return (
    <view
      style={{ width: "calc(100% - 10px)", height: "160px," }}
    >
      <text style={{ fontSize: "16px", paddingLeft: "6px", paddingTop: "6px" }}>
        {`item-${props.index}`}
      </text>
      <image
        style={{ width: "calc(100% - 10px)", height: "160px" }}
        src={props.index % 3 == 0 ? image_0 : (props.index % 3 == 1 ? image_1 : image_2)}
      />
    </view>
  );
};

export const HorizontalScrollItem = (props: { index: number }) => {
  return (
    <view
      style={{ width: "200px", height: "180px", marginRight: "10px", backgroundColor: "gray" }}
    >
      <text style={{ fontSize: "16px", paddingLeft: "6px", paddingTop: "6px" }}>
        {`item-${props.index}`}
      </text>
      <image
        style={{ width: "200px", height: "160px" }}
        src={props.index % 3 == 0 ? image_0 : (props.index % 3 == 1 ? image_1 : image_2)}
      />
    </view>
  );
};
