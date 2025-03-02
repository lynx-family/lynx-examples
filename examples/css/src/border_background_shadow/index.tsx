import { root } from "@lynx-js/react";

function App() {
  return (
    <view
      style={{
        flexDirection: "column",
        background: "linear-gradient(to right, rgb(255,53,26), rgb(0,235,235))",
        borderRadius: "0 50% 0 0",
        boxShadow: "3px 5px 5px black",
        borderLeft: "2px rgb(0,235,235) dotted",
        borderTop: "2px rgb(255,53,26) dashed",
        marginTop: "50%",
        transform: "translate(-50%, -50%)",
        marginLeft: "50%",
        width: "150px",
        height: "150px",
      }}
    >
    </view>
  );
}

root.render(<App />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
