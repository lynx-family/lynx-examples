export type Filter = "all" | "active" | "completed";

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export interface RenderState {
  loading?: boolean;
  filter?: Filter;
  todos?: Todo[];
}
