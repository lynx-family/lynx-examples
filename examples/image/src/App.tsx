// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import type { ErrorEvent, LoadEvent } from "@lynx-js/types";

import LynxIcon from "@assets/image/lynxicon.png?inline";
import DoctorIcon from "@assets/image/rsdoctor.png?inline";
import LibIcon from "@assets/image/rslib.png?inline";
import SpeedyIcon from "@assets/image/rspeedy.png?inline";

import "./App.css";

interface ExampleProps {
  url: string;
}

const ImageAutoSizeExample = ({ url }: ExampleProps) => {
  return (
    <view className="linear" style="linear-layout-gravity:left">
      <text className="sub-title">Image AutoSize Examples</text>
      <text>auto-size with no width</text>
      <image className="no-width" src={url} auto-size={true} />
      <text>auto-size with no height</text>
      <image className="no-height" src={url} auto-size={true} />
    </view>
  );
};

const ImageBasicExample = ({ url }: ExampleProps) => {
  return (
    <view className="linear">
      <text className="sub-title">Image Basic Examples</text>
      <text>scaleToFill</text>
      <image src={url} style="width:200px;height:100px" />
      <text>aspectFit</text>
      <image src={url} mode="aspectFit" style="width:200px;height:100px" />
      <text>aspectFill</text>
      <image src={url} mode="aspectFill" style="width:200px;height:100px" />
    </view>
  );
};

const ImageStyledExample = ({ url }: ExampleProps) => {
  return (
    <view className="linear">
      <text className="sub-title">Image Styled Examples</text>
      <text>aspectFit</text>
      <image
        className="mode-image"
        mode="aspectFit"
        src={url}
        style="border-radius: 10px"
      />

      <text>aspectFill</text>
      <image
        className="mode-image"
        mode="aspectFill"
        src={url}
        style="border-radius:50% "
      />

      <text>scaleToFill</text>
      <image
        className="mode-image"
        mode="scaleToFill"
        src={url}
        style="border-radius: 20px 30px 40px 10px"
      />
    </view>
  );
};

const ImageFilterExample = ({ url }: ExampleProps) => {
  return (
    <view className="linear">
      <text className="sub-title">Image Filter Examples</text>
      <text>origin pic</text>
      <image className="filter-image" src={url} />

      <text>blur pic</text>
      <image className="filter-image" src={url} blur-radius="5px" />

      <text>tint pic</text>
      <image className="filter-image" src={url} tint-color="#123aff" />
    </view>
  );
};

const ImageEventExample = ({ url }: ExampleProps) => {
  const handleImageLoad = (event: LoadEvent) => {
    console.log("Image loaded success:", JSON.stringify(event));
  };
  const handleImageError = (event: ErrorEvent) => {
    console.log("Image loaded error:", JSON.stringify(event));
  };
  return (
    <view className="linear">
      <text className="sub-title">Image Event Examples</text>
      <text>load event</text>
      <image className="filter-image" src={url} bindload={handleImageLoad} />
      <text>error event</text>
      <image
        className="filter-image"
        src={"error url"}
        binderror={handleImageError}
      />
    </view>
  );
};

const ImageExample = ({ type, url }: ExampleProps & { type: string }) => {
  switch (type) {
    case "auto-size":
      return <ImageAutoSizeExample url={url} />;
    case "styled":
      return <ImageStyledExample url={url} />;
    case "filter":
      return <ImageFilterExample url={url} />;
    case "event":
      return <ImageEventExample url={url} />;
    default:
      return <ImageBasicExample url={url} />;
  }
};

export const App = () => {
  const examples = [
    { type: "auto-size", url: LynxIcon },
    { type: "basic", url: SpeedyIcon },
    { type: "styled", url: LibIcon },
    { type: "filter", url: DoctorIcon },
    { type: "event", url: SpeedyIcon },
  ];

  return (
    <scroll-view scroll-orientation="vertical" style="padding:5px;width:100%; height:100%;">
      <text className="title">Image Examples</text>
      {examples.map((example, index) => <ImageExample type={example.type} url={example.url} />)}
    </scroll-view>
  );
};
