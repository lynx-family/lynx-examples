// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { root, useState } from "@lynx-js/react";

const App = () => {
  const [visible, setVisible] = useState(true);

  return (
    <view
      style={{
        width: "100%",
        height: "100%",
        flexDirection: "column",
        backgroundColor: "white",
      }}
    >
      <svg
        content={`<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<rect x="10" y="20" width="50" height="50" fill="#ccff66" stroke="#ff0000"/>
<rect x="10" y="30" width="50" height="50" fill="none"/>
<circle cx="50" cy="50" r="20" fill="#ff000088" stroke-width="10" stroke="#00ff0088" />
<line x1="0" x2="0" y1="0" y2="100" stroke="black"/>
</svg>`}
        style={{ width: "374px", height: "125px", marginTop: "50px" }}
      />
      <svg
        content={`<svg height="210" width="500" xmlns="http://www.w3.org/2000/svg">
  <polyline points="0,0 50,150 100,75 150,50 200,140 250,140"
  stroke="green" stroke-width="3" />
  <polygon points="200,10 250,190 150,190" fill="blue" stroke="green" stroke-width="3" />
</svg>`}
        style={{ width: "374px", height: "125px", marginTop: "100px" }}
      />
      <svg
        content={`<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <clipPath id="myClip1" clipPathUnits="userSpaceOnUse">
    <circle cx="50" cy="50" r="35" />
  </clipPath>

  <clipPath id="myClip2" clipPathUnits="objectBoundingBox">
    <circle cx=".5" cy=".5" r=".35" />
  </clipPath>

  <!-- Some reference rect to materialized to clip path -->
  <rect id="r1" x="0" y="0" width="45" height="45" fill="#000" />
  <rect id="r2" x="0" y="55" width="45" height="45" fill="#000"/>
  <rect id="r3" x="55" y="55" width="45" height="45" fill="#000"/>
  <rect id="r4" x="55" y="0" width="45" height="45" fill="#000"/>

  <!-- The first 3 rect are clipped with userSpaceOnUse units -->
  <use clip-path="url(#myClip1)" href="#r1" fill="red" />
  <use clip-path="url(#myClip1)" href="#r2" fill="red" />
  <use clip-path="url(#myClip1)" href="#r3" fill="red" />

  <!-- The last rect is clipped with objectBoundingBox units -->
  <use clip-path="url(#myClip2)" href="#r4" fill="red" />
</svg>`}
        style={{ width: "374px", height: "125px", marginTop: "100px" }}
      />
    </view>
  );
};

root.render(<App />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
