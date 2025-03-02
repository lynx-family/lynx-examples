import { root } from "@lynx-js/react";
import "./index.scss";

const BorderWidth = () => {
  const scrollViewStyle = {
    height: "100%",
  };

  const fixedAreaStyle = {
    width: "100%",
    height: "100%",
    flexDirection: "column" as const,
  };

  const widthOptions = [
    ["thin", "thin medium"],
    ["thin medium thick", "thin medium thick 10px"],
    ["5px 1px 0px 15px", "0.5px 0.2em 5rpx"],
    ["0.2em 0.4em 0.5rem 3rpx", "thick 1px"],
  ];

  const widthOptions2 = [
    ["thick", "thick thin"],
    ["medium thick 1px", "thick 10px"],
    ["5px 0px 15px", "0.5px 5rpx 1rem"],
    ["0.2em 0.5rem 3rpx", "thick 6px"],
  ];

  return (
    <scroll-view className="root" scroll-orientation="vertical" style={scrollViewStyle}>
      <view className="fixed_area" style={fixedAreaStyle}>
        {widthOptions.map((row, rowIndex) => (
          <view key={`solid-${rowIndex}`}>
            <view className="row">
              {row.map((width, colIndex) => (
                <view
                  key={`solid-${rowIndex}-${colIndex}`}
                  className="box solid"
                  style={{ borderWidth: width }}
                >
                  <text className="text">{width}</text>
                </view>
              ))}
            </view>
          </view>
        ))}

        {widthOptions2.map((row, rowIndex) => (
          <view key={`style-${rowIndex}`}>
            <view className="row">
              {row.map((width, colIndex) => (
                <view
                  key={`style-${rowIndex}-${colIndex}`}
                  className={`box styleDiff${colIndex}`}
                  style={{ borderWidth: width }}
                >
                  <text className="text">{width}</text>
                </view>
              ))}
            </view>
          </view>
        ))}

        {widthOptions.map((row, rowIndex) => (
          <view key={`radius-${rowIndex}`}>
            <view className="row">
              {row.map((width, colIndex) => (
                <view
                  key={`radius-${rowIndex}-${colIndex}`}
                  className={`box styleDiff${colIndex} radiusStyle${colIndex}`}
                  style={{ borderWidth: width }}
                >
                  <text className="text">{width}</text>
                </view>
              ))}
            </view>
          </view>
        ))}
      </view>
    </scroll-view>
  );
};

root.render(<BorderWidth />);
