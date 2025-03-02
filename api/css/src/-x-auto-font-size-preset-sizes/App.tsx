import { root } from "@lynx-js/react";
import "./index.scss";

const XAutoFontSizePresetSizes = () => {
  const containerStyle = {
    display: "linear" as const,
    backgroundColor: "white",
  };

  const baseTextStyle = {
    backgroundColor: "gray",
    fontSize: "20px",
    overflow: "hidden",
  };

  const autoFontStyle = {
    ...baseTextStyle,
    XAutoFontSize: "true",
  };

  const autoFontWithSizeStyle = {
    ...baseTextStyle,
    XAutoFontSize: "true 10px",
  };

  const autoFontWithRangeStyle = {
    ...baseTextStyle,
    XAutoFontSize: "true 10px 50px",
  };

  const autoFontWithStepStyle = {
    ...baseTextStyle,
    XAutoFontSize: "true 10px 50px 3px",
  };

  const presetSizesStyle = {
    ...baseTextStyle,
    XAutoFontSize: "true",
    XAutoFontSizePresetSizes: "10px 16px 25px",
  };

  const sampleText = "This is a test text for auto-sizing font This is a test text for auto-sizing font";

  return (
    <view className="intro" style={containerStyle}>
      <text text-maxline="1" style={autoFontStyle}>
        {sampleText}
      </text>

      <text text-maxline="1" style={autoFontWithSizeStyle}>
        {sampleText}
      </text>

      <text text-maxline="1" style={autoFontWithRangeStyle}>
        {sampleText}
      </text>

      <text text-maxline="1" style={autoFontWithStepStyle}>
        {sampleText}
      </text>

      <text text-maxline="1" style={presetSizesStyle}>
        {sampleText}
      </text>
    </view>
  );
};

root.render(<XAutoFontSizePresetSizes />);
