import { root } from "@lynx-js/react";
import "./index.scss";

const BorderLeftStyle = () => {
  const scrollViewStyle = {
    height: "100%",
  };

  const fixedAreaStyle = {
    width: "100%",
    height: "100%",
    flexDirection: "column" as const,
  };

  const styles = [
    ["solid", "dashed", "dotted"],
    ["double", "groove", "ridge"],
    ["inset", "outset", "hidden"],
  ];

  return (
    <scroll-view className="root" scroll-orientation="vertical" style={scrollViewStyle}>
      <view className="fixed_area" style={fixedAreaStyle}>
        {styles.map((row, rowIndex) => (
          <view key={`normal1-${rowIndex}`}>
            <view className="row">
              {row.map((style, colIndex) => (
                <view
                  key={`normal1-${rowIndex}-${colIndex}`}
                  className="box colorWidth1"
                  style={{ borderLeftStyle: style }}
                >
                  <text className="text">{style}</text>
                </view>
              ))}
            </view>
          </view>
        ))}

        {styles.map((row, rowIndex) => (
          <view key={`normal2-${rowIndex}`}>
            <view className="row">
              {row.map((style, colIndex) => (
                <view
                  key={`normal2-${rowIndex}-${colIndex}`}
                  className="box colorWidth1"
                  style={{ borderLeftStyle: style }}
                >
                  <text className="text">{style}</text>
                </view>
              ))}
            </view>
          </view>
        ))}

        {styles.map((row, rowIndex) => (
          <view key={`radius-${rowIndex}`}>
            <view className="row">
              {row.map((style, colIndex) => (
                <view
                  key={`radius-${rowIndex}-${colIndex}`}
                  className="box colorWidth2 radiusSame"
                  style={{ borderLeftStyle: style }}
                >
                  <text className="text">{style}</text>
                </view>
              ))}
            </view>
          </view>
        ))}
      </view>
    </scroll-view>
  );
};

root.render(<BorderLeftStyle />);
