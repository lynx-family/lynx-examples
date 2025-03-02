import { BackgroundDraggable } from "./BackgroundDraggable.jsx";
import { MainThreadDraggable } from "./MainThreadDraggable.jsx";

export function App() {
  return (
    <view
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        backgroundColor: "white",
      }}
    >
      <view style="display:linear;linear-direction:row;width:100%;height:100%">
        <scroll-view
          id="scroll"
          bindscroll={() => {}}
          scroll-y
          style="display:linear;linear-direction:row;width:50%;height:100%"
        >
          <view style="background:yellow;width:100%;height:500px" />
          <view style="background:lightskyblue;width:100%;height:100px" />
          <view style="background:yellow;width:100%;height:1000px" />
        </scroll-view>
        <view style="width:50%;height:100%;display:linear;linear-direction:row;">
          <MainThreadDraggable size={100} />
          <BackgroundDraggable size={100} />
        </view>
      </view>
    </view>
  );
}
