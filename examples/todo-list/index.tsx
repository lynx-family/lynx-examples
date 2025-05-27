// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { root, useEffect, useRef, useState } from "@lynx-js/react";
import type { Dispatch, SetStateAction } from "@lynx-js/react";
import type { BaseEvent, NodesRef } from "@lynx-js/types";
import "./index.scss";

interface Todo {
  id: number;
  done: boolean;
  text: string;
}

interface TodoItemProps {
  todo: Todo;
  isLastOne: boolean;
  onToggle: (todo: Todo) => void;
  onDelete: (todo: Todo) => void;
}

function TodoItem({ todo, isLastOne, onToggle, onDelete }: TodoItemProps) {
  const ref = useRef<NodesRef>(null);

  useEffect(() => {
    // always scroll the last one into view.
    if (isLastOne) {
      ref.current
        ?.invoke({
          method: "scrollIntoView",
          params: {
            scrollIntoViewOptions: {
              behavior: "smooth",
              block: "center",
              inline: "start",
            },
          },
        })
        .exec();
    }
  }, [isLastOne]);

  return (
    <view className="item" ref={ref}>
      <text className="btn" bindtap={(e) => onToggle(todo)}>
        {todo.done ? "☑️" : ""}
      </text>
      <text className="item__content">{todo.text}</text>
      <text className="btn" bindtap={(e) => onDelete(todo)}>
        🗑️
      </text>
    </view>
  );
}

function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const handleChange = (todo: Todo) => {
    setTodos((list) => list.map((item) => (item === todo ? { ...item, done: !item.done } : item)));
  };

  const handleDelete = (todo: Todo) => {
    setTodos((list) => list.filter((item) => item !== todo));
  };

  return (
    <scroll-view className="app" id="app">
      <view className="header">
        <text className="header__title">Todo List</text>
      </view>
      <scroll-view className="list" scroll-orientation="vertical">
        {todos.map((todo, index) => {
          return (
            <TodoItem
              key={index}
              todo={todo}
              onToggle={handleChange}
              onDelete={handleDelete}
              isLastOne={todo === todos[todos.length - 1]}
            />
          );
        })}
      </scroll-view>
      <AddTodo setTodos={setTodos} />
    </scroll-view>
  );
}

function AddTodo({ setTodos }: { setTodos: Dispatch<SetStateAction<Todo[]>> }) {
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e: BaseEvent<"input", { value: string }>) => {
    setInputValue(e.detail.value);
  };

  const handleAddTodo = () => {
    setTodos((todos: Todo[]) => [
      ...todos,
      { id: nextId++, done: false, text: inputValue },
    ]);
    setInputValue("");
  };

  return (
    <view className="item addTodo">
      <input
        value={inputValue}
        bottom-inset={"28px"}
        placeholder={"Add a todo here"}
        className="item__content addTodo__input"
        bindinput={handleInput}
      />
      <text className="btn btn--action" bindtap={handleAddTodo}>
        ✏️
      </text>
    </view>
  );
}

const initialTodos = [
  { id: 0, done: true, text: "Hi" },
  { id: 1, done: true, text: "ReactLynx 3" },
];
let nextId = 2;

export default TodoApp;
root.render(<TodoApp />);
