import path from "node:path";

import type {
  ComponentDefinition,
  EventDefinition,
  NodeDefinition,
  StateDefinition,
  StyleDefinition,
  TaskDefinition,
  TextNodeDefinition,
  ViewNodeDefinition,
} from "../runtime/types.js";
import { FRAMEWORK_LAYERS } from "./constants.js";

interface Token {
  column: number;
  kind: "eof" | "string" | "symbol" | "word";
  line: number;
  raw: string;
  value: string;
}

type ParsedTextNode = Omit<TextNodeDefinition, "className">;
type ParsedViewNode = Omit<ViewNodeDefinition, "children" | "className"> & {
  children: ParsedNode[];
};
type ParsedNode = ParsedTextNode | ParsedViewNode;

interface ParsedStyle {
  declarations: Array<{ property: string; value: string }>;
  node: string;
}

export interface CompileOptions {
  projectRoot: string;
  source: string;
  sourcePath: string;
}

export interface LynxIntermediateRepresentation {
  actionPath: string;
  component: ComponentDefinition;
  projectRoot: string;
  sourcePath: string;
}

const symbols = new Set(["{", "}", "=", "(", ")", ",", ":"]);

function flattenNodes(nodes: ParsedNode[]): ParsedNode[] {
  return nodes.flatMap((node) => node.type === "view" ? [node, ...flattenNodes(node.children)] : [node]);
}

function compileNode(node: ParsedNode, screenClass: string): NodeDefinition {
  const className = `${screenClass}-${toKebabCase(node.id)}`;
  if (node.type === "view") {
    return {
      ...node,
      children: node.children.map((child) => compileNode(child, screenClass)),
      className,
    };
  }
  return { ...node, className };
}

function tokenize(source: string, sourceName: string): Token[] {
  const tokens: Token[] = [];
  let column = 1;
  let index = 0;
  let line = 1;

  const advance = (): string => {
    const character = source[index] ?? "";
    index += 1;
    if (character === "\n") {
      line += 1;
      column = 1;
    } else {
      column += 1;
    }
    return character;
  };

  const fail = (message: string, tokenLine = line, tokenColumn = column): never => {
    throw new SyntaxError(
      `${sourceName}:${tokenLine}:${tokenColumn}: ${message}`,
    );
  };

  while (index < source.length) {
    const character = source[index]!;
    if (/\s/u.test(character)) {
      advance();
      continue;
    }

    if (character === "/" && source[index + 1] === "/") {
      while (index < source.length && source[index] !== "\n") advance();
      continue;
    }

    const tokenLine = line;
    const tokenColumn = column;
    if (source.startsWith("<-", index)) {
      advance();
      advance();
      tokens.push({
        column: tokenColumn,
        kind: "symbol",
        line: tokenLine,
        raw: "<-",
        value: "<-",
      });
      continue;
    }

    if (symbols.has(character)) {
      advance();
      tokens.push({
        column: tokenColumn,
        kind: "symbol",
        line: tokenLine,
        raw: character,
        value: character,
      });
      continue;
    }

    if (character === "\"") {
      const start = index;
      advance();
      let escaped = false;
      let closed = false;
      while (index < source.length) {
        const current = source[index]!;
        if (current === "\n") fail("Unterminated string", tokenLine, tokenColumn);
        advance();
        if (escaped) {
          escaped = false;
        } else if (current === "\\") {
          escaped = true;
        } else if (current === "\"") {
          closed = true;
          break;
        }
      }
      if (!closed) fail("Unterminated string", tokenLine, tokenColumn);
      const raw = source.slice(start, index);
      let value = "";
      try {
        value = JSON.parse(raw) as string;
      } catch {
        fail("Invalid string escape", tokenLine, tokenColumn);
      }
      tokens.push({
        column: tokenColumn,
        kind: "string",
        line: tokenLine,
        raw,
        value,
      });
      continue;
    }

    const start = index;
    while (index < source.length) {
      const current = source[index]!;
      if (
        /\s/u.test(current)
        || symbols.has(current)
        || source.startsWith("<-", index)
      ) {
        break;
      }
      advance();
    }
    if (start === index) fail(`Unexpected character ${JSON.stringify(character)}`);
    const raw = source.slice(start, index);
    tokens.push({
      column: tokenColumn,
      kind: "word",
      line: tokenLine,
      raw,
      value: raw,
    });
  }

  tokens.push({ column, kind: "eof", line, raw: "", value: "" });
  return tokens;
}

class Parser {
  readonly #sourceName: string;
  readonly #tokens: Token[];
  #index = 0;

  constructor(source: string, sourceName: string) {
    this.#sourceName = sourceName;
    this.#tokens = tokenize(source, sourceName);
  }

  parse(): ComponentDefinition {
    this.#expectWord("screen");
    const screenName = this.#expectName("screen name");
    this.#expectSymbol("{");

    const events: EventDefinition[] = [];
    const nodes: ParsedNode[] = [];
    const state: Record<string, StateDefinition> = {};
    const parsedStyles: ParsedStyle[] = [];
    const tasks: TaskDefinition[] = [];

    while (!this.#matchSymbol("}")) {
      const declaration = this.#peek();
      switch (declaration.value) {
        case "state": {
          const definition = this.#parseState();
          if (state[definition.name]) this.#fail(`Duplicate state ${definition.name}`);
          state[definition.name] = definition;
          break;
        }
        case "view":
        case "text": {
          const result = this.#parseNode();
          nodes.push(result.node);
          events.push(...result.events);
          break;
        }
        case "task": {
          const task = this.#parseTask();
          if (tasks.some((candidate) => candidate.name === task.name)) {
            this.#fail(`Duplicate task ${task.name}`);
          }
          tasks.push(task);
          break;
        }
        case "style": {
          const style = this.#parseStyle();
          if (parsedStyles.some((candidate) => candidate.node === style.node)) {
            this.#fail(`Duplicate style for #${style.node}`);
          }
          parsedStyles.push(style);
          break;
        }
        default:
          this.#fail(`Unknown declaration ${JSON.stringify(declaration.value)}`);
      }
    }
    const allNodes = flattenNodes(nodes);
    const nodeIds = new Set<string>();
    for (const node of allNodes) {
      if (nodeIds.has(node.id)) this.#fail(`Duplicate node #${node.id}`);
      nodeIds.add(node.id);
      if (node.type === "text" && !state[node.value]) {
        this.#fail(`Node #${node.id} reads unknown state ${node.value}`);
      }
    }
    for (const task of tasks) {
      if (!state[task.target]) {
        this.#fail(`Task ${task.name} writes unknown state ${task.target}`);
      }
    }
    for (const event of events) {
      if (!tasks.some((task) => task.name === event.task)) {
        this.#fail(`Event ${event.name} runs unknown task ${event.task}`);
      }
    }
    for (const style of parsedStyles) {
      if (!nodeIds.has(style.node)) {
        this.#fail(`Style targets unknown node #${style.node}`);
      }
    }
    this.#expectKind("eof", "end of file");

    const screenClass = toKebabCase(screenName);
    const compiledNodes = nodes.map((node) => compileNode(node, screenClass));
    const styles: StyleDefinition[] = parsedStyles.map((style) => ({
      className: `${screenClass}-${toKebabCase(style.node)}`,
      declarations: style.declarations
        .map(({ property, value }) => `${property}: ${value};`)
        .join("\n  "),
    }));

    return {
      events,
      nodes: compiledNodes,
      screenName,
      state,
      styles,
      tasks,
    };
  }

  #parseState(): StateDefinition {
    this.#expectWord("state");
    const name = this.#expectName("state name");
    this.#expectSymbol("=");
    const initialValue = this.#expectKind("string", "state string").value;
    return { initialValue, name };
  }

  #parseNode(): {
    events: EventDefinition[];
    node: ParsedNode;
  } {
    if (this.#peek().value === "view") return this.#parseView();
    if (this.#peek().value === "text") return this.#parseText();
    this.#fail(`Unknown node ${JSON.stringify(this.#peek().value)}`);
  }

  #parseView(): { events: EventDefinition[]; node: ParsedViewNode } {
    this.#expectWord("view");
    const id = this.#expectNodeId();
    this.#expectSymbol("{");
    const children: ParsedNode[] = [];
    const events: EventDefinition[] = [];

    while (!this.#matchSymbol("}")) {
      const result = this.#parseNode();
      children.push(result.node);
      events.push(...result.events);
    }

    return { events, node: { children, id, type: "view" } };
  }

  #parseText(): { events: EventDefinition[]; node: ParsedNode } {
    this.#expectWord("text");
    const id = this.#expectNodeId();
    this.#expectSymbol("{");
    const events: EventDefinition[] = [];
    let value: string | undefined;

    while (!this.#matchSymbol("}")) {
      if (this.#peek().value === "value") {
        this.#expectWord("value");
        this.#expectSymbol("=");
        value = this.#expectName("state binding");
        continue;
      }
      if (this.#peek().value === "on") {
        this.#expectWord("on");
        const name = this.#expectName("event name");
        this.#expectSymbol("{");
        this.#expectWord("run");
        const task = this.#expectName("task name");
        this.#expectSymbol("}");
        events.push({ name, node: id, task });
        continue;
      }
      this.#fail(`Unknown text declaration ${JSON.stringify(this.#peek().value)}`);
    }

    if (!value) this.#fail(`Text #${id} is missing a value binding`);
    return { events, node: { id, type: "text", value } };
  }

  #parseTask(): TaskDefinition {
    this.#expectWord("task");
    const name = this.#expectName("task name");
    this.#expectSymbol("{");
    const target = this.#expectName("task state target");
    this.#expectSymbol("<-");
    this.#expectWord("await");
    const actionName = this.#expectName("action name");
    this.#expectSymbol("(");
    const arguments_: string[] = [];
    while (!this.#matchSymbol(")")) {
      const argument = this.#take();
      if (argument.kind !== "string" && argument.kind !== "word") {
        this.#fail("Task arguments must be strings or words", argument);
      }
      arguments_.push(argument.value);
      if (!this.#matchSymbol(",")) {
        this.#expectSymbol(")");
        break;
      }
    }
    this.#expectSymbol("}");
    return {
      action: { arguments: arguments_, name: actionName },
      name,
      target,
    };
  }

  #parseStyle(): ParsedStyle {
    this.#expectWord("style");
    const node = this.#expectNodeId();
    this.#expectSymbol("{");
    const declarations: ParsedStyle["declarations"] = [];

    while (!this.#matchSymbol("}")) {
      const property = this.#expectName("CSS property");
      this.#expectSymbol(":");
      const valueLine = this.#peek().line;
      const valueTokens: Token[] = [];
      while (
        this.#peek().kind !== "eof"
        && this.#peek().value !== "}"
        && this.#peek().line === valueLine
      ) {
        valueTokens.push(this.#take());
      }
      if (valueTokens.length === 0) this.#fail(`CSS property ${property} has no value`);
      declarations.push({
        property,
        value: formatCSSValue(valueTokens),
      });
    }
    return { declarations, node };
  }

  #expectNodeId(): string {
    const token = this.#expectKind("word", "node id");
    if (!/^#[A-Za-z_][A-Za-z0-9_-]*$/u.test(token.value)) {
      this.#fail("Node ids must use the form #name", token);
    }
    return token.value.slice(1);
  }

  #expectName(label: string): string {
    const token = this.#expectKind("word", label);
    if (!/^[A-Za-z_][A-Za-z0-9_-]*$/u.test(token.value)) {
      this.#fail(`Invalid ${label} ${JSON.stringify(token.value)}`, token);
    }
    return token.value;
  }

  #expectWord(value: string): Token {
    const token = this.#expectKind("word", JSON.stringify(value));
    if (token.value !== value) this.#fail(`Expected ${JSON.stringify(value)}`, token);
    return token;
  }

  #expectSymbol(value: string): Token {
    const token = this.#expectKind("symbol", JSON.stringify(value));
    if (token.value !== value) this.#fail(`Expected ${JSON.stringify(value)}`, token);
    return token;
  }

  #matchSymbol(value: string): boolean {
    if (this.#peek().kind !== "symbol" || this.#peek().value !== value) {
      return false;
    }
    this.#take();
    return true;
  }

  #expectKind(kind: Token["kind"], label: string): Token {
    const token = this.#take();
    if (token.kind !== kind) this.#fail(`Expected ${label}`, token);
    return token;
  }

  #peek(): Token {
    return this.#tokens[this.#index]!;
  }

  #take(): Token {
    const token = this.#peek();
    this.#index += 1;
    return token;
  }

  #fail(message: string, token = this.#peek()): never {
    throw new SyntaxError(
      `${this.#sourceName}:${token.line}:${token.column}: ${message}`,
    );
  }
}

function formatCSSValue(tokens: Token[]): string {
  return tokens
    .map((token) => token.raw)
    .join(" ")
    .replaceAll(/\s+\(/gu, "(")
    .replaceAll(/\s+([,)])/gu, "$1")
    .replaceAll(/([(])\s+/gu, "$1")
    .replace(/;$/u, "");
}

function toKebabCase(value: string): string {
  return value
    .replaceAll(/([a-z0-9])([A-Z])/gu, "$1-$2")
    .replaceAll(/[^A-Za-z0-9]+/gu, "-")
    .replaceAll(/^-|-$/gu, "")
    .toLowerCase();
}

function moduleSpecifier(fromDirectory: string, target: string): string {
  const relative = path.relative(fromDirectory, target)
    .replaceAll(path.sep, "/")
    .replace(/\.[cm]?[jt]s$/u, "");
  return relative.startsWith(".") ? relative : `./${relative}`;
}

export function parseLynx(
  source: string,
  sourceName = "Greeting.lynx",
): ComponentDefinition {
  return new Parser(source, sourceName).parse();
}

export function generateStyles(component: ComponentDefinition): string {
  return component.styles
    .map((style) => `.${style.className} {\n  ${style.declarations}\n}\n`)
    .join("\n");
}

function generateComponentDeclaration(component: ComponentDefinition): string {
  return `const component = ${JSON.stringify(component, null, 2)};\n`;
}

export function compileLynxFile(
  options: CompileOptions,
): LynxIntermediateRepresentation {
  const { projectRoot, source, sourcePath } = options;
  const sourceName = path.relative(projectRoot, sourcePath).replaceAll(path.sep, "/");
  return {
    actionPath: sourcePath.replace(/\.lynx$/u, ".actions.ts"),
    component: parseLynx(source, sourceName),
    projectRoot,
    sourcePath,
  };
}

export function generateMainThreadSource(
  intermediate: LynxIntermediateRepresentation,
): string {
  const { component, projectRoot, sourcePath } = intermediate;
  const sourceDirectory = path.dirname(sourcePath);
  const mainThreadRuntime = moduleSpecifier(
    sourceDirectory,
    path.join(projectRoot, "runtime/main-thread.ts"),
  );
  const styleRequest = `${moduleSpecifier(sourceDirectory, sourcePath)}?css`;

  return `import ${JSON.stringify(styleRequest)};\n`
    + `import { startMainThread } from ${JSON.stringify(mainThreadRuntime)};\n\n`
    + generateComponentDeclaration(component)
    + "\nstartMainThread(component);\n";
}

export function generateBackgroundSource(
  intermediate: LynxIntermediateRepresentation,
): string {
  const { actionPath, component, projectRoot, sourcePath } = intermediate;
  const sourceDirectory = path.dirname(sourcePath);
  const backgroundRuntime = moduleSpecifier(
    sourceDirectory,
    path.join(projectRoot, "runtime/background.ts"),
  );
  const actionSource = component.tasks.length > 0
    ? `import { actions } from ${JSON.stringify(moduleSpecifier(sourceDirectory, actionPath))};\n`
    : "const actions = {};\n";

  return `import { startBackground } from ${JSON.stringify(backgroundRuntime)};\n`
    + actionSource
    + "\n"
    + generateComponentDeclaration(component)
    + "\nstartBackground(component, actions);\n";
}

export function generateLayerSource(
  intermediate: LynxIntermediateRepresentation,
  layer: string | undefined,
): string {
  if (layer === FRAMEWORK_LAYERS.mainThread) {
    return generateMainThreadSource(intermediate);
  }
  if (layer === FRAMEWORK_LAYERS.background) {
    return generateBackgroundSource(intermediate);
  }
  throw new Error(`[pluginMyLynx] Unsupported compiler layer: ${String(layer)}`);
}
