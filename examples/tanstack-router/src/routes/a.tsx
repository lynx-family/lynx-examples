import { createFileRoute, useNavigate } from "@tanstack/react-router";

import { Button } from "../components/button.js";

// @ts-ignore
export const Route = createFileRoute("/a")({
  component: PageA,
});

function PageA() {
  const navigate = useNavigate();

  return (
    <view>
      <text>Current Page: A</text>
      <view style={{ height: "8px" }} />
      <Button bindtap={() => navigate({ to: "/b" })}>
        <text>Go to Page B</text>
      </Button>
    </view>
  );
}
