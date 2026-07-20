import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/b")({
  component: PageB,
});

function PageB() {
  return (
    <view>
      <text>Current Page: B</text>
    </view>
  );
}
