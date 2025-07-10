import { createRootRoute, Outlet, useRouter } from "@tanstack/react-router";

import { Button } from "../components/button.js";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const router = useRouter();

  return (
    <>
      <view style={{ margin: "10vh" }}>
        <Button bindtap={() => router.history.back()}>
          <text>Back</text>
        </Button>

        <view style={{ height: "10vh" }} />

        <Outlet />
      </view>
    </>
  );
}
