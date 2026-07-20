import { useState } from "@lynx-js/react";

import { DialogBackdrop, DialogClose, DialogContent, DialogRoot, DialogTrigger, DialogView } from "@lynx-js/lynx-ui";

export function DialogSection() {
  const [show, setShow] = useState(false);

  return (
    <view className="section">
      <text className="section-title">Dialog</text>
      <view className="section-content">
        <DialogRoot show={show} onShowChange={setShow}>
          <DialogTrigger className="dialog-trigger">
            <text className="btn-text">Open Dialog</text>
          </DialogTrigger>

          <DialogView className="dialog-viewport">
            <DialogBackdrop className="dialog-backdrop" />
            <DialogContent className="dialog-content">
              <view className="dialog-body">
                <text className="dialog-title">Dialog Title</text>
                <text className="dialog-desc">
                  This is a dialog from lynx-ui. It supports backdrop dismissal and controlled visibility.
                </text>
              </view>
              <DialogClose className="dialog-close-btn">
                <text className="btn-text">Close</text>
              </DialogClose>
            </DialogContent>
          </DialogView>
        </DialogRoot>
      </view>
    </view>
  );
}
