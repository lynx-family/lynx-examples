// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { root } from "@lynx-js/react";
import { useEffect } from "react";

import "./index.scss";

/**
 * Metadata for each <text> node: position, dimensions, and selection bounds.
 */
interface TextNodeInfo {
  id: string; // Unique identifier for the DOM node
  left: number; // X-coordinate of node's left edge
  top: number; // Y-coordinate of node's top edge
  width: number; // Width of the node's bounding box
  height: number; // Height of the node's bounding box
  startX: number; // Selected region's start X
  startY: number; // Selected region's start Y
  endX: number; // Selected region's end X
  endY: number; // Selected region's end Y
}

// Global storage for node info and selection handlers
let textsInfo: TextNodeInfo[] = [];
let handlers: Array<{ x: number; y: number; radius: number; startX: number; startY: number }> = [];
let startPosition = { x: 0, y: 0 }; // Initial touch point for selection
let isSelecting = false; // Flag: currently dragging a selection handle

const CrossTextSelection = () => {
  // useEffect hook to run code when the component mounts and unmounts
  useEffect(() => {
    console.log("component did mount");
    getTextNodeRect();
    return () => {
      console.log("component will unmount");
    };
  }, []);

  // Handle long press event to start text selection
  const handleLongPress = (e) => {
    isSelecting = true;
    startPosition.x = e.detail.x;
    startPosition.y = e.detail.y;
    setSelection(e.detail.x, e.detail.y, e.detail.x, e.detail.y);
  };

  // Handle touch start event to check if the touch is on a handler
  const handleTouchStart = (e) => {
    if (handlers.length === 0) {
      return;
    }
    const { x, y } = e.detail;
    for (const [index, handler] of handlers.entries()) {
      if (Math.pow(handler.x - x, 2) + Math.pow(handler.y - y, 2) < Math.pow(handler.radius, 2)) {
        isSelecting = true;
        const another = handlers[(index + 1) % 2];
        startPosition = { x: another.startX, y: another.startY };
        break;
      }
    }
  };

  // Handle touch move event to update the selection area
  const handleTouchMove = (e) => {
    if (isSelecting) {
      setSelection(startPosition.x, startPosition.y, e.detail.x, e.detail.y);
    }
  };

  // Handle touch end event to finalize the selection
  const handleTouchEnd = (e) => {
    if (isSelecting) {
      setSelection(startPosition.x, startPosition.y, e.detail.x, e.detail.y);
    }
    isSelecting = false;
  };

  // Handle tap event to clear the selection
  const handleTap = (e) => {
    if (handlers.length === 0) {
      return;
    }
    setSelection(-1, -1, -1, -1);
  };

  // Asynchronous function to get the bounding rectangles of text nodes
  async function getTextNodeRect() {
    let resArray = await new Promise((resolve) => {
      lynx.createSelectorQuery()
        .selectAll("#container text")
        .fields(
          {
            query: true,
            id: true,
          },
          resolve,
        )
        .exec();
    });

    Promise.all(
      resArray.map((element) => {
        return new Promise((resolve) => {
          element.query
            .selectRoot()
            .invoke({
              method: "boundingClientRect",
              success: (res) => {
                resolve(res);
              },
            })
            .exec();
        });
      }),
    ).then((values) => {
      textsInfo = [...values].map(({ top, left, width, height, id }) => ({
        id: String(id),
        left: Number(left),
        top: Number(top),
        width: Number(width),
        height: Number(height),
        startX: -1,
        startY: 0,
        endX: width,
        endY: height,
      }));
    });
  }

  // Function to execute text selection on a specific node
  function execSelection(
    node: TextNodeInfo,
    startX: number,
    startY: number,
    endX: number,
    endY: number,
    showStartHandle = true,
    showEndHandle = true,
  ) {
    lynx
      .createSelectorQuery()
      .select(`#${node.id}`)
      .invoke({
        method: "setTextSelection",
        params: {
          startX,
          startY,
          endX,
          endY,
          showStartHandle,
          showEndHandle,
        },
        success(res) {
          if (!res) {
            return;
          }
          const boxes = res.boxes || [];
          const hs = res.handles || [];
          if (Array.isArray(boxes) && boxes.length > 0) {
            node.startX = boxes[0].left;
            node.startY = boxes[0].top + boxes[0].height / 2;
            node.endX = boxes[boxes.length - 1].left + boxes[boxes.length - 1].width;
            node.endY = boxes[boxes.length - 1].top + boxes[boxes.length - 1].height / 2;
          } else {
            node.startX =
              node.startY =
              node.endX =
              node.endY =
                -1;
          }
          showStartHandle && (handlers[0] = { ...hs[0], startX: node.startX, startY: node.startY });
          showEndHandle && (handlers[1] = { ...hs[1], startX: node.endX, startY: node.endY });
        },
      })
      .exec();
    if (startX === -1) {
      node.startX = -1;
      handlers = [];
    }
  }

  // Function to set the text selection based on the start and end coordinates
  function setSelection(x1: number, y1: number, x2: number, y2: number) {
    const [[startX, startY], [endX, endY]] = [
      [x1, y1],
      [x2, y2],
    ].sort((a, b) => {
      if (a[1] === b[1]) {
        return a[0] - b[0];
      }
      return a[1] - b[1];
    });
    const clear: TextNodeInfo[] = [];
    const update: TextNodeInfo[] = [];
    for (const node of textsInfo) {
      if (
        (startY < node.top && node.top + node.height < endY)
        || (node.left <= startX && startX <= node.left + node.width && node.top <= startY
          && startY <= node.top + node.height)
        || (node.left <= endX && endX <= node.left + node.width && node.top <= endY && endY <= node.top + node.height)
      ) {
        update.push(node);
      } else if (node.startX !== -1) {
        clear.push(node);
      }
    }
    if (clear.length > 0 || update.length > 0) {
      for (const node of clear) {
        execSelection(node, -1, -1, -1, -1, false, false);
      }
      const start = update[0];
      const end = update[update.length - 1];
      if (update.length === 1) {
        execSelection(
          start,
          Math.max(0, startX - start.left),
          Math.max(0, startY - start.top),
          Math.min(start.width, endX - start.left),
          Math.min(start.height, endY - start.top),
          true,
          true,
        );
      } else if (update.length > 1) {
        execSelection(
          start,
          Math.max(0, startX - start.left),
          Math.max(0, startY - start.top),
          start.width,
          start.height,
          true,
          false,
        );
        for (let i = 1; i < update.length - 1; i++) {
          execSelection(update[i], 0, 0, update[i].width, update[i].height, false, false);
        }
        execSelection(
          end,
          0,
          0,
          Math.min(end.width, endX - end.left),
          Math.min(end.height, endY - end.top),
          false,
          true,
        );
      }
      return true;
    }
    return false;
  }

  return (
    <page>
      <view className="Background" />
      <view className="App">
        <view
          id="container"
          style={{ width: "90vw" }}
          className="Container"
          bindlongpress={handleLongPress}
          bindtouchstart={handleTouchStart}
          bindtouchmove={handleTouchMove}
          bindtouchend={handleTouchEnd}
          bindtap={handleTap}
        >
          <text id="0" text-selection={true} custom-text-selection={true} flatten={false} className="Title">
            This is title
          </text>
          <view className="SplitLine" />
          <text id="1" className="NormalText" text-selection={true} custom-text-selection={true} flatten={false}>
            1.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare maximus vehicula. Duis nisi velit,
            dictum id mauris vitae, lobortis pretium quam. Quisque sed nisi pulvinar, consequat justo id, feugiat leo.
            Cras eu elementum dui.
          </text>
          <view className="SplitLine" />
          <text id="2" className="NormalText" text-selection={true} custom-text-selection={true} flatten={false}>
            2.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare maximus vehicula. Duis nisi velit,
            dictum id mauris vitae, lobortis pretium quam. Quisque sed nisi pulvinar, consequat justo id, feugiat leo.
            Cras eu elementum dui.
          </text>
          <view className="SplitLine" />
          <text id="3" className="NormalText" text-selection={true} custom-text-selection={true} flatten={false}>
            3.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare maximus vehicula. Duis nisi velit,
            dictum id mauris vitae, lobortis pretium quam. Quisque sed nisi pulvinar, consequat justo id, feugiat leo.
            Cras eu elementum dui.
          </text>
        </view>
      </view>
    </page>
  );
};

export default CrossTextSelection;

root.render(<CrossTextSelection />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
