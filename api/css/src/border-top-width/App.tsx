import { root } from "@lynx-js/react";
import "./index.scss";

const BorderTopWidth = () => {
  const scrollViewStyle = {
    height: "100%",
  };

  const fixedAreaStyle = {
    width: "100%",
    height: "100%",
    flexDirection: "column" as const,
  };

  const widthOptions = [
    ["thin", "medium", "thick"],
    ["1px", "10px", "2rpx"],
    ["1em", "0.1em", "0.3rem"],
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
                  style={{ borderTopWidth: width }}
                >
                  <text className="text">{width}</text>
                </view>
              ))}
            </view>
          </view>
        ))}

        {widthOptions.map((row, rowIndex) => (
          <view key={`style-${rowIndex}`}>
            <view className="row">
              {row.map((width, colIndex) => (
                <view
                  key={`style-${rowIndex}-${colIndex}`}
                  className={`box styleDiff${colIndex}`}
                  style={{ borderTopWidth: width }}
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
                  style={{ borderTopWidth: width }}
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

root.render(<BorderTopWidth />);
