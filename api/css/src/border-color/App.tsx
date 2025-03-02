import { root } from "@lynx-js/react";
import "./index.scss";

const BorderColor = () => {
  const scrollViewStyle = {
    height: "100%",
  };

  const fixedAreaStyle = {
    width: "100%",
    height: "100%",
    flexDirection: "column" as const,
  };

  const colors = [
    ["red", "rgb(255,0,0) rgba(0,255,0,0.3)"],
    ["#ff0000 #00ff00ff #aabbccdd", "black orange transparent pink"],
    ["black rgb(255,255,0) #ff00ff pink", "hsl(89,43%,51%) hsla(89,43%,51%,0.3) red transparent"],
  ];

  const colors2 = [
    ["green blue", "pink rgb(0,0,255) rgba(128,0,128,0.8)"],
    ["#ff00ff #00ffffbb #2211ffaa", "blue pink"],
    ["#aab #ff00ff hsl(89,43%,20%)", "hsl(89,60%,31%) blue"],
  ];

  return (
    <scroll-view className="root" scroll-orientation="vertical" style={scrollViewStyle}>
      <view className="fixed_area" style={fixedAreaStyle}>
        {colors.map((row, rowIndex) => (
          <view key={`solid-${rowIndex}`}>
            <view className="row">
              {row.map((color, colIndex) => (
                <view
                  key={`solid-${rowIndex}-${colIndex}`}
                  className="box widthSame solid"
                  style={{ borderColor: color }}
                >
                  <text className="text">{color}</text>
                </view>
              ))}
            </view>
          </view>
        ))}

        {colors2.map((row, rowIndex) => (
          <view key={`style-${rowIndex}`}>
            <view className="row">
              {row.map((color, colIndex) => (
                <view
                  key={`style-${rowIndex}-${colIndex}`}
                  className={`box widthSame styleDiff${colIndex}`}
                  style={{ borderColor: color }}
                >
                  <text className="text">{color}</text>
                </view>
              ))}
            </view>
          </view>
        ))}

        {colors.map((row, rowIndex) => (
          <view key={`radius-${rowIndex}`}>
            <view className="row">
              {row.map((color, colIndex) => (
                <view
                  key={`radius-${rowIndex}-${colIndex}`}
                  className={`box widthDiff styleDiff${colIndex} radiusStyle${colIndex}`}
                  style={{ borderColor: color }}
                >
                  <text className="text">{color}</text>
                </view>
              ))}
            </view>
          </view>
        ))}
      </view>
    </scroll-view>
  );
};

root.render(<BorderColor />);
