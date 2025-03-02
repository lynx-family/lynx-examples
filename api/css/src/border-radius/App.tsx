import { root } from "@lynx-js/react";
import "./index.scss";

const BorderRadius = () => {
  const scrollViewStyle = {
    height: "100%",
  };

  const fixedAreaStyle = {
    width: "100%",
    height: "100%",
    flexDirection: "column" as const,
  };

  const styles = [
    ["2em", "2em / 5em"],
    ["2em 1em 4em / 0.5em 3em", "15px 50px"],
    ["15px 50px 30px 5px", "1em 2em 4em 4em / 1em 2em 2em 8em"],
    ["100px 200px", "100px 30px / 10px"],
    ["100em / 200em", "2px 0px 2em / 0em 100px"],
  ];

  return (
    <scroll-view className="root" scroll-orientation="vertical" style={scrollViewStyle}>
      <view className="fixed_area" style={fixedAreaStyle}>
        {styles.map((row, rowIndex) => (
          <view key={`same-${rowIndex}`}>
            <view className="row">
              {row.map((radius, colIndex) => (
                <view
                  key={`same-${rowIndex}-${colIndex}`}
                  className={`box size0 styleDiff${colIndex} colorWidthSame`}
                  style={{ borderRadius: radius }}
                >
                  <text className="text">{radius}</text>
                </view>
              ))}
            </view>
          </view>
        ))}

        {styles.map((row, rowIndex) => (
          <view key={`diff-${rowIndex}`}>
            <view className="row">
              {row.map((radius, colIndex) => (
                <view
                  key={`diff-${rowIndex}-${colIndex}`}
                  className={`box size0 colorWidthDiff${colIndex}`}
                  style={{ borderRadius: radius }}
                >
                  <text className="text">{radius}</text>
                </view>
              ))}
            </view>
          </view>
        ))}
      </view>
    </scroll-view>
  );
};

root.render(<BorderRadius />);
