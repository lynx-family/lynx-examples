import { DraggableArea, DraggableRoot } from "@lynx-js/lynx-ui";

export function DraggableSection() {
  return (
    <view className="section">
      <text className="section-title">Draggable</text>
      <view className="section-content">
        <text className="row-label">Drag the boxes below</text>
        <view className="draggable-area">
          <DraggableRoot
            className="draggable-item"
            resetOnEnd={true}
            trigger="immediate"
          >
            <DraggableArea className="draggable-box">
              <text className="draggable-text">Drag (resets)</text>
            </DraggableArea>
          </DraggableRoot>

          <DraggableRoot
            className="draggable-item"
            resetOnEnd={false}
            trigger="immediate"
          >
            <DraggableArea className="draggable-box draggable-box-alt">
              <text className="draggable-text">Drag (stays)</text>
            </DraggableArea>
          </DraggableRoot>
        </view>
      </view>
    </view>
  );
}
