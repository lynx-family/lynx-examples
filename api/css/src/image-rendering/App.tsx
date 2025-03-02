import { root } from "@lynx-js/react";
import "./index.scss";

const ImageRendering = () => {
  const url =
    "data:image/bmp;base64,Qk12BQAAAAAAADYAAAAoAAAAFQAAAOv///8BABgAAAAAAEAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAAAAAAA////////AAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///////////////////wAAAP///////wAAAP///////////////wAAAP///////////////////wAAAAAAAAD///8AAAAAAAAAAAD///8AAAD///8AAAAAAAAAAAD///////////8AAAD///8AAAAAAAAAAAD///8AAAAAAAAA////AAAAAAAAAAAA////AAAA////AAAAAAAA////////AAAA////AAAA////AAAAAAAAAAAA////AAAAAAAAAP///wAAAAAAAAAAAP///wAAAP///////wAAAAAAAP///////////wAAAP///wAAAAAAAAAAAP///wAAAAAAAAD///////////////////8AAAD///8AAAD///8AAAD///////////8AAAD///////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAAA////AAAA////AAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///////////////////////////////wAAAP///wAAAP///////////////////////////////////////wAAAAAAAAD///8AAAD///////8AAAAAAAD///////8AAAAAAAAAAAAAAAAAAAAAAAD///8AAAAAAAD///8AAAAAAAAAAAAA////AAAAAAAA////////////////////AAAA////////AAAAAAAA////AAAAAAAA////AAAAAAAAAP///wAAAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAP///////////////////wAAAP///////////wAAAAAAAAD///////8AAAAAAAD///////////////////////////////8AAAD///////8AAAAAAAD///8AAAAAAAAAAAAA////AAAAAAAAAAAA////////AAAA////////AAAAAAAAAAAA////////////AAAA////////////AAAAAAAAAP///////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAP///wAAAAAAAP///////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AAAD///8AAAD///////////8AAAAAAAAAAAD///////8AAAD///8AAAAA////////////////////AAAA////////AAAAAAAA////////AAAA////////////////////////AAAAAAAAAP///wAAAAAAAAAAAP///wAAAP///////////wAAAP///wAAAP///wAAAP///////wAAAAAAAAAAAP///wAAAAD///8AAAAAAAAAAAD///8AAAD///8AAAAAAAD///8AAAAAAAAAAAAAAAAAAAD///8AAAD///8AAAD///8AAAAA////AAAAAAAAAAAA////AAAA////////AAAA////////////////AAAAAAAAAAAA////AAAA////////AAAAAP///////////////////wAAAP///wAAAP///wAAAAAAAAAAAAAAAP///////wAAAAAAAP///////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AAAAAAAAAAAD///////////////////8AAAD///////8AAAD///8A";

  const verticalStyle = {
    linearDirection: "column" as const,
  };

  const pixelatedStyle = {
    imageRendering: "pixelated" as const,
  };

  const autoStyle = {
    imageRendering: "auto" as const,
  };

  const crispEdgesStyle = {
    imageRendering: "crisp-edges" as const,
  };

  return (
    <scroll-view>
      <view style={verticalStyle}>
        <view className="image size" style={pixelatedStyle}></view>
        <view className="image size" style={autoStyle}></view>
        <view className="image size" style={crispEdgesStyle}></view>
      </view>

      <view style={verticalStyle}>
        <image src={url} className="size" style={pixelatedStyle}></image>
        <image src={url} className="size" style={autoStyle}></image>
        <image src={url} className="size" style={crispEdgesStyle}></image>
      </view>
    </scroll-view>
  );
};

root.render(<ImageRendering />);
