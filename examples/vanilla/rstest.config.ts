import { defineConfig } from "@rstest/core";

export default defineConfig({
  testEnvironment: "jsdom",
  setupFiles: [
    // Set the PAPI polyfill hook before the testing environment installs.
    "./test/setup.ts",
    "@lynx-js/testing-environment/env/rstest",
  ],
  globals: true,
  include: ["test/**/*.test.ts"],
});
