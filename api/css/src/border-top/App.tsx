import { root } from "@lynx-js/react";
import "./index.scss";

const BorderTop = () => {
  const scrollViewStyle = {
    height: "100%",
  };

  const fixedAreaStyle = {
    width: "100%",
    height: "100%",
    flexDirection: "column" as const,
  };

  const styles = [
    ["thick double red", "thin dotted blue"],
    ["10px dashed orange", "medium solid #0000ff"],
    ["5px groove rgba(0,255,0,0.6)", "10rpx ridge hsl(89,43%,51%)"],
    ["thick outset hsla(89,43%,51%,0.3)", "16px inset #ab0"],
  ];

  return (
    <scroll-view className="root" scroll-orientation="vertical" style={scrollViewStyle}>
      <view className="fixed_area" style={fixedAreaStyle}>
        {styles.map((row, rowIndex) => (
          <view key={`normal-${rowIndex}`}>
            <view className="row">
              {row.map((borderStyle, colIndex) => (
                <view
                  key={`normal-${rowIndex}-${colIndex}`}
                  className="box"
                  style={{ borderTop: borderStyle }}
                >
                  <text className="text">{borderStyle}</text>
                </view>
              ))}
            </view>
          </view>
        ))}

        {styles.map((row, rowIndex) => (
          <view key={`radius-${rowIndex}`}>
            <view className="row">
              {row.map((borderStyle, colIndex) => (
                <view
                  key={`radius-${rowIndex}-${colIndex}`}
                  className={`box radiusStyle${colIndex}`}
                  style={{ borderTop: borderStyle }}
                >
                  <text className="text">{borderStyle}</text>
                </view>
              ))}
            </view>
          </view>
        ))}
      </view>
    </scroll-view>
  );
};

root.render(<BorderTop />);
