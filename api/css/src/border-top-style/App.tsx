import { root } from "@lynx-js/react";
import "./index.scss";

const BorderTopStyle = () => {
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
                  style={{ borderStyle: style }}
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
                  style={{ borderStyle: style }}
                >
                  <text className="text">{style}</text>
                </view>
              ))}
            </view>
          </view>
        ))}

        {styles.map((row, rowIndex) => (
          <view key={`radius-same-${rowIndex}`}>
            <view className="row">
              {row.map((style, colIndex) => (
                <view
                  key={`radius-same-${rowIndex}-${colIndex}`}
                  className="box colorWidth2 radiusSame"
                  style={{ borderStyle: style }}
                >
                  <text className="text">{style}</text>
                </view>
              ))}
            </view>
          </view>
        ))}

        {styles.map((row, rowIndex) => (
          <view key={`radius-diff-${rowIndex}`}>
            <view className="row">
              {row.map((style, colIndex) => (
                <view
                  key={`radius-diff-${rowIndex}-${colIndex}`}
                  className="box colorWidth1 radiusDiff"
                  style={{ borderStyle: style }}
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

root.render(<BorderTopStyle />);
