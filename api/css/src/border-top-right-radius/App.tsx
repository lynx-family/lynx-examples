import { root } from "@lynx-js/react";
import "./index.scss";

const BorderTopRightRadius = () => {
  const scrollViewStyle = {
    height: "100%",
  };

  const fixedAreaStyle = {
    width: "100%",
    height: "100%",
    flexDirection: "column" as const,
  };

  const styles = [
    ["2em", "2em 5em"],
    ["100px 500px", "50px 15px"],
    ["200px", "200em 100em"],
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
                  style={{ borderTopRightRadius: radius }}
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
                  style={{ borderTopRightRadius: radius }}
                >
                  <text className="text">{radius}</text>
                </view>
              ))}
            </view>
          </view>
        ))}

        {styles.map((row, rowIndex) => (
          <view key={`mixed-${rowIndex}`}>
            <view className="row">
              {row.map((radius, colIndex) => (
                <view
                  key={`mixed1-${rowIndex}-${colIndex}`}
                  className={`box size1 styleDiff${colIndex} colorWidthDiff${colIndex}`}
                  style={{ borderTopRightRadius: radius }}
                >
                  <text className="text">{radius}</text>
                </view>
              ))}
              {row.map((radius, colIndex) => (
                <view
                  key={`mixed2-${rowIndex}-${colIndex}`}
                  className={`box size2 colorWidthSame styleDiff2`}
                  style={{ borderTopRightRadius: radius }}
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

root.render(<BorderTopRightRadius />);
