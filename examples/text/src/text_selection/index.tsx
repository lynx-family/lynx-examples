// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { root, useState } from "@lynx-js/react";

import "./index.scss";

// TextSelection component for text selection and context menu handling
const TextSelection = () => {
  // State for selected text element ID
  const [selectedId, setSelectedId] = useState("");
  // State for context menu visibility
  const [showContextMenu, setShowContextMenu] = useState(false);
  // State for context menu left offset
  const [contextMenuLeftOffset, setContextMenuLeftOffset] = useState(0);
  // State for context menu top offset
  const [contextMenuTopOffset, setContextMenuTopOffset] = useState(0);

  // Handle query errors
  const handleQueryError = (res) => {
    console.log(res.code, res.data);
  };

  // Handle text selection change
  const handleSelectionChange = (e) => {
    if (e.detail.start === -1) {
      setSelectedId("");
      hiddenContextMenu();
      return;
    }
    const newSelectedId = "#" + e.target.id;
    setSelectedId(newSelectedId);
    lynx.createSelectorQuery()
      .select(newSelectedId)
      .invoke({
        method: "getTextBoundingRect",
        params: { start: e.detail.start, end: e.detail.end },
        success: (res) => {
          showContextMenuAtPosition(
            res.boundingRect.left + res.boundingRect.width / 2 - 50,
            res.boundingRect.top + res.boundingRect.height + 20,
          );
        },
        fail: handleQueryError,
      })
      .exec();
  };

  // Handle copy action
  const handleCopy = (e) => {
    copyText();
    clearSelection();
  };

  // Copy selected text
  const copyText = () => {
    if (selectedId === "") return;
    lynx.createSelectorQuery()
      .select(selectedId)
      .invoke({
        method: "getSelectedText",
        params: {},
        success: (res) => {
          console.log("getSelectedText:" + JSON.stringify(res));
        },
        fail: handleQueryError,
      })
      .exec();
  };

  // Clear text selection
  const clearSelection = () => {
    if (selectedId === "") return;
    lynx.createSelectorQuery()
      .select(selectedId)
      .invoke({
        method: "setTextSelection",
        params: { startX: -1, startY: -1, endX: -1, endY: -1, showStartHandle: false, showEndHandle: false },
        success(res) {
          console.log("clearTextSelection", res);
        },
        fail: handleQueryError,
      })
      .exec();
    setSelectedId("");
  };

  // Hide context menu
  const hiddenContextMenu = () => {
    if (!showContextMenu) return;
    setShowContextMenu(false);
  };

  // Show context menu at given position
  const showContextMenuAtPosition = (left, top) => {
    setShowContextMenu(true);
    setContextMenuLeftOffset(left);
    setContextMenuTopOffset(top);
  };

  return (
    <page>
      <view className="Background" />
      <view className="App">
        <view
          style={{
            left: contextMenuLeftOffset + "px",
            top: contextMenuTopOffset + "px",
            visibility: showContextMenu ? "visible" : "hidden",
          }}
          className="ContextMenu"
        >
          <text className="ContextMenuText" bindtap={handleCopy}>
            Copy
          </text>
          <text className="ContextMenuText">
            Search
          </text>
        </view>
        <view id="container" style={{ width: "90vw" }} className="Container">
          <text
            id="1"
            className="NormalText"
            text-selection={true}
            custom-context-menu={true}
            flatten={false}
            bindselectionchange={handleSelectionChange}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare maximus vehicula. Duis nisi velit,
            dictum id mauris vitae, lobortis pretium quam. Quisque sed nisi pulvinar, consequat justo id, feugiat leo.
            Cras eu elementum dui.
          </text>
        </view>
      </view>
    </page>
  );
};

export default TextSelection;

root.render(<TextSelection />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
