import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginTypeCheck } from "@rsbuild/plugin-type-check";
import path from "path";

export default defineConfig({
  plugins: [pluginReact(), pluginTypeCheck()],
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
