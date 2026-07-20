import { root } from "@lynx-js/react";
import "./index.scss";

const VariableFont = () => {
  const fontSamples = [
    {
      title: "Normal",
      description: "Default font style",
      className: "",
    },
    {
      title: "Variable Weight (wght)",
      description: "font-variation-settings: 'wght' 750",
      className: "font-variation-settings",
    },
    {
      title: "Old-style Figures (onum)",
      description: "font-feature-settings: 'onum'",
      className: "font-feature-settings",
    },
    {
      title: "Combined Usage",
      description: "Applying both 'wght' and 'onum' features",
      className: "font-feature-settings font-variation-settings",
    },
  ];

  return (
    <view
      style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "16px", backgroundColor: "#f4f4f4" }}
    >
      {fontSamples.map((sample, index) => (
        <view key={index} style={{ backgroundColor: "white", padding: "16px", borderRadius: "8px" }}>
          <text style={{ fontSize: "18px", fontWeight: "bold", color: "#333" }}>
            {sample.title}
          </text>
          <text style={{ fontSize: "14px", color: "#666", marginTop: "4px", marginBottom: "12px" }}>
            {sample.description}
          </text>
          <text className={`variable-font-normal ${sample.className}`} style={{ fontSize: "32px" }}>
            1234567890
          </text>
        </view>
      ))}
    </view>
  );
};

root.render(<VariableFont />);
