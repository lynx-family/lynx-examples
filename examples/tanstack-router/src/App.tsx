import { createMemoryHistory, createRouter, RouterProvider } from "@tanstack/react-router";

import { routeTree } from "./routeTree.gen.js";

const memoryHistory = createMemoryHistory({
  initialEntries: ["/"],
});

const router = createRouter({ routeTree, history: memoryHistory, isServer: false });

export function App() {
  return <RouterProvider router={router} />;
}
