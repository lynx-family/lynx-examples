import desktopFrame from "./assets/desktop-frame.png";
import lynxLogo from "./assets/lynx-logo.png";
import { useDesktopDrag } from "./useDesktopDrag";
import "./App.css";

export function App() {
  const {
    desktopHot,
    docked,
    dragging,
    logoPos,
    cancelDrag,
    finishDrag,
    handleDesktopLayout,
    handleLogoDown,
    handleMove,
    handleStageLayout,
  } = useDesktopDrag();
  const desktopFrameClassName = `DesktopFrame ${desktopHot ? "DesktopFrame--hot" : ""} ${
    docked ? "DesktopFrame--occupied" : ""
  }`;
  const logoCardClassName = `LogoCard ${dragging ? "LogoCard--dragging" : ""} ${docked ? "LogoCard--docked" : ""}`;
  const logoCardStyle = {
    left: `${logoPos.x}px`,
    top: `${logoPos.y}px`,
    cursor: dragging ? "grabbing" : "grab",
  };

  return (
    <page
      className="Page"
      bindmousemove={handleMove}
      bindmouseup={finishDrag}
      bindmouseleave={cancelDrag}
    >
      <view className="PageBackdrop">
        <view className="PageOrb" />
        <view className="BackdropGlow BackdropGlow--a" />
        <view className="BackdropGlow BackdropGlow--b" />
        <view className="BackdropGlow BackdropGlow--accent" />
      </view>
      <view className="Poster">
        <view className="Header">
          <text className="Title">Bringing Lynx to desktop</text>
        </view>

        <view className="Stage" bindlayoutchange={handleStageLayout}>
          <view className={desktopFrameClassName} bindlayoutchange={handleDesktopLayout}>
            <image src={desktopFrame} className="DesktopFrameImage" />
          </view>

          <view
            className={logoCardClassName}
            style={logoCardStyle}
            bindmousedown={handleLogoDown}
            draggable={false}
          >
            <image src={lynxLogo} className="LogoImage" draggable={false} />
          </view>
        </view>
      </view>
    </page>
  );
}
