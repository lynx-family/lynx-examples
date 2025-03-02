import { ButtonWithTooltip } from "./ButtonWithTooltip.jsx";

export function App() {
  return (
    <view>
      <ButtonWithTooltip
        tooltipContent={
          <>
            <text>
              This tooltip does not fit above the button.
            </text>
            <text>
              This is why it's displayed below instead!
            </text>
          </>
        }
      >
        <text>Tap me (tooltip above)</text>
      </ButtonWithTooltip>
      <view style={{ height: "100px" }} />
      <ButtonWithTooltip
        tooltipContent={
          <view>
            <text>This tooltip fits above the button</text>
          </view>
        }
      >
        <text>Tap me (tooltip below)</text>
      </ButtonWithTooltip>
      <view style={{ height: "100px" }} />
      <ButtonWithTooltip
        tooltipContent={
          <view>
            <text>This tooltip fits above the button</text>
          </view>
        }
      >
        <text>Tap me (tooltip below)</text>
      </ButtonWithTooltip>
    </view>
  );
}
