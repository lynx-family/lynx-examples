import { root } from "@lynx-js/react";
import "./index.scss";

const Flex = () => {
  const firstBoxStyle = {
    flex: "1",
    backgroundColor: "rgba(255,0,200,0.2)",
  };

  const secondBoxStyle = {
    flex: "1 30px",
    marginLeft: "5px",
    backgroundColor: "rgba(0,0,255,0.2)",
  };

  const thirdBoxStyle = {
    flex: "2 1 auto",
    marginLeft: "5px",
    backgroundColor: "rgba(0,0,255,0.2)",
  };

  return (
    <view className="container">
      <view className="height" style={firstBoxStyle}>
        <text>flex:1;</text>
      </view>
      <view className="height" style={secondBoxStyle}>
        <text>flex:1 30px;</text>
      </view>
      <view className="height" style={thirdBoxStyle}>
        <text>flex:2 1 auto;</text>
      </view>
    </view>
  );
};

root.render(<Flex />);
