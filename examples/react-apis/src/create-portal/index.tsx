import { createPortal, type ReactNode, root, useState } from "@lynx-js/react";
import type { NodesRef } from "@lynx-js/types";

import "./index.css";

function CreatePortalExample() {
  const [portalHost, setPortalHost] = useState<NodesRef | null>(null);
  const [visible, setVisible] = useState(true);

  const togglePortal = () => {
    setVisible((current) => !current);
  };

  return (
    <page>
      <view className="App">
        <text className="Title">createPortal</text>

        <view className="Section">
          <text className="Label">Source</text>
          <view className="Button" bindtap={togglePortal}>
            <text className="ButtonText">{visible ? "Hide portal" : "Show portal"}</text>
          </view>
          {portalHost && visible
            ? (createPortal(
              <view className="PortalContent">
                <text className="PortalText">Rendered with createPortal</text>
              </view>,
              portalHost,
            ) as unknown as ReactNode)
            : null}
        </view>

        <view className="Section">
          <text className="Label">Target</text>
          <view className="PortalHost" ref={setPortalHost} />
        </view>
      </view>
    </page>
  );
}

root.render(<CreatePortalExample />);
