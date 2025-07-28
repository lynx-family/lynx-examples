import { createFileRoute, useNavigate } from "@tanstack/react-router";

import { Button } from "../components/button.js";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const navigate = useNavigate();

  return (
    <view>
      <text>Current Page: Home</text>
      <view style={{ height: "8px" }} />
      <Button bindtap={() => navigate({ to: "/a" })}>
        <text>Go to Page A</text>
      </Button>
    </view>
  );
}
