import { useResponsiveScale } from "../useResponsiveScale";
import desktopFrame from "./assets/desktop-frame.png";
import lynxLogo from "./assets/lynx-logo.png";
import { useDesktopDrag } from "./useDesktopDrag";
import "./App.css";

export function App() {
  const { handleLayoutChange, scale } = useResponsiveScale({
    baseWidth: 980,
    baseHeight: 420,
    minScale: 0.56,
  });
  const {
    desktopHot,
    docked,
    dragging,
    logoCardStyle,
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
  const posterStyle = {
    gap: `${18 * scale}px`,
    paddingTop: `${28 * scale}px`,
    paddingBottom: `${24 * scale}px`,
  };
  const headerStyle = {
    gap: `${8 * scale}px`,
    maxWidth: `${760 * scale}px`,
  };
  const titleStyle = {
    fontSize: `${44 * scale}px`,
  };

  return (
    <page
      className="Page"
      bindmousemove={handleMove}
      bindmouseup={finishDrag}
      bindmouseleave={cancelDrag}
      bindlayoutchange={handleLayoutChange}
    >
      <view className="PageBackdrop">
        <view className="PageOrb" />
        <view className="BackdropGlow BackdropGlow--a" />
        <view className="BackdropGlow BackdropGlow--b" />
        <view className="BackdropGlow BackdropGlow--accent" />
      </view>
      <view className="Poster" style={posterStyle}>
        <view className="Header" style={headerStyle}>
          <text className="Title" style={titleStyle}>Bringing Lynx to desktop</text>
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
