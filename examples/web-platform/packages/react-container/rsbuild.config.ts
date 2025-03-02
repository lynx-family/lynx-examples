import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [pluginReact()],
  server: {
    publicDir: [
      {
        name: path.join(
          __dirname,
          "../",
          "lynx-project",
          "dist",
        ),
      },
    ],
  },
});
