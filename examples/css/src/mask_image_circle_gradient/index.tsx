import { root } from "@lynx-js/react";

function App() {
  return (
    <view
      style={{
        marginTop: "50%",
        transform: "translate(-50%, -50%)",
        marginLeft: "50%",
        width: "150px",
        height: "150px",
      }}
    >
      <view
        style={{
          flexDirection: "column",
          background: "radial-gradient(circle at top left, rgb(255,53,26), rgb(0,235,235))",
          width: "100%",
          height: "100%",
          maskImage: "radial-gradient(circle 75px, black 75%, transparent)",
          position: "absolute",
        }}
      >
        <text
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            alignSelf: "center",
            color: "white",
            marginTop: "50%",
            transform: "translateY(-50%)",
          }}
        >
          LYNX
        </text>
      </view>
    </view>
  );
}

root.render(<App />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
