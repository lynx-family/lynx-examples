export const INTENT_EVENT = "Intent";
export const PATCH_EVENT = "Patch";

export interface StateDefinition {
  initialValue: string;
  name: string;
}

export interface TextNodeDefinition {
  className: string;
  id: string;
  type: "text";
  value: string;
}

export interface ViewNodeDefinition {
  children: NodeDefinition[];
  className: string;
  id: string;
  type: "view";
}

export type NodeDefinition = TextNodeDefinition | ViewNodeDefinition;

export interface EventDefinition {
  name: string;
  node: string;
  task: string;
}

export interface TaskDefinition {
  action: {
    arguments: string[];
    name: string;
  };
  name: string;
  target: string;
}

export interface StyleDefinition {
  className: string;
  declarations: string;
}

export interface ComponentDefinition {
  events: EventDefinition[];
  nodes: NodeDefinition[];
  screenName: string;
  state: Record<string, StateDefinition>;
  styles: StyleDefinition[];
  tasks: TaskDefinition[];
}

export type Action = (...arguments_: string[]) => unknown | Promise<unknown>;
export type ActionMap = Record<string, Action>;

export type FrameworkIntent =
  | { state: Record<string, string>; type: "initialize" }
  | { state: Record<string, string>; type: "update" }
  | { task: string; type: "run" }
  | { type: "destroy" };

export type SetTextPatch = [
  action: "__SetAttribute",
  id: string,
  key: "text",
  value: string,
];
