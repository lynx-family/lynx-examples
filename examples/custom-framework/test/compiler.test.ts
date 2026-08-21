import { readFileSync } from "node:fs";
import path from "node:path";

import { describe, expect, it } from "@rstest/core";

import { compileLynxFile, generateLayerSource, generateStyles, parseLynx } from "../bundle/compiler.js";
import { FRAMEWORK_LAYERS } from "../bundle/constants.js";

const greetingSource = readFileSync(
  new URL("../src/Greeting.lynx", import.meta.url),
  "utf8",
);

describe("Greeting.lynx compiler", () => {
  it("parses source into an in-memory intermediate representation", () => {
    const projectRoot = path.join(path.sep, "virtual-project");
    const sourcePath = path.join(projectRoot, "src", "Greeting.lynx");
    const intermediate = compileLynxFile({
      projectRoot,
      source: greetingSource,
      sourcePath,
    });

    expect(intermediate.actionPath).toBe(
      path.join(projectRoot, "src", "Greeting.actions.ts"),
    );
    expect(intermediate.component.screenName).toBe("Greeting");
    expect(intermediate.sourcePath).toBe(sourcePath);
  });

  it("generates main-thread and background modules by layer", () => {
    const projectRoot = path.join(path.sep, "project");
    const intermediate = compileLynxFile({
      projectRoot,
      source: greetingSource,
      sourcePath: path.join(projectRoot, "src", "Greeting.lynx"),
    });

    const mainThread = generateLayerSource(
      intermediate,
      FRAMEWORK_LAYERS.mainThread,
    );
    expect(mainThread).toContain("import \"./Greeting.lynx?css\";");
    expect(mainThread).toContain(
      "import { startMainThread } from \"../runtime/main-thread\";",
    );
    expect(mainThread).toContain("startMainThread(component);");
    expect(mainThread).not.toContain("startBackground");

    const background = generateLayerSource(
      intermediate,
      FRAMEWORK_LAYERS.background,
    );
    expect(background).toContain(
      "import { actions } from \"./Greeting.actions\";",
    );
    expect(background).toContain(
      "import { startBackground } from \"../runtime/background\";",
    );
    expect(background).toContain("startBackground(component, actions);");
    expect(background).not.toContain("?css");
  });

  it("parses state, UI, event, task, and style declarations", () => {
    const component = parseLynx(greetingSource);

    expect(component).toMatchObject({
      events: [{ name: "tap", node: "title", task: "refreshGreeting" }],
      nodes: [{
        children: [{
          className: "greeting-title",
          id: "title",
          type: "text",
          value: "title",
        }],
        className: "greeting-content",
        id: "content",
        type: "view",
      }],
      screenName: "Greeting",
      state: {
        title: { initialValue: "Hello World", name: "title" },
      },
      tasks: [{
        action: { arguments: [], name: "fetchGreeting" },
        name: "refreshGreeting",
        target: "title",
      }],
    });
  });

  it("does not add or require a framework container", () => {
    const component = parseLynx(`screen Plain {
  state title = "Hello"
  text #title {
    value = title
  }
}`);

    expect(component.nodes).toEqual([{
      className: "plain-title",
      id: "title",
      type: "text",
      value: "title",
    }]);
  });

  it("emits container and text styles without styling page", () => {
    const styles = generateStyles(parseLynx(greetingSource));

    expect(styles).toContain(
      ".greeting-content {\n  width: 100%;\n  height: 100%;",
    );
    expect(styles).not.toContain(".greeting-page");
    expect(styles).toContain(
      "display: linear;\n  linear-gravity: center;\n  linear-cross-gravity: center;",
    );
    expect(styles).toContain("background-color: #f5f7ff;");
    expect(styles).toContain(
      ".greeting-title {\n  padding: 1.5rem 2rem;",
    );
    expect(styles).toContain("background-color: #4f46e5;");
  });

  it("rejects events that reference an unknown task", () => {
    expect(() => parseLynx(greetingSource.replace("run refreshGreeting", "run missing"))).toThrow(/unknown task/ui);
  });
});
