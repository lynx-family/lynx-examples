import { createElement, root, useState } from "@lynx-js/react";

import "./index.css";

interface GreetingProps {
  name: string;
}

function Greeting({ name }: GreetingProps) {
  return createElement(
    "view",
    { className: "Greeting" },
    createElement(
      "text",
      { className: "GreetingText" },
      "Hello ",
      createElement("text", { className: "Name" }, name),
      " ! ",
    ),
    createElement("text", { className: "GreetingText" }, "Welcome !"),
  );
}

function CreateElementExample() {
  const [visible, setVisible] = useState(true);

  const toggleGreeting = () => {
    setVisible((current) => !current);
  };

  return createElement(
    "view",
    { className: "App" },
    createElement(
      "view",
      { className: "Button", bindtap: toggleGreeting },
      createElement(
        "text",
        { className: "ButtonText" },
        visible ? "Hide greeting" : "Show greeting",
      ),
    ),
    visible ? createElement(Greeting, { name: "Lynx" }) : null,
  );
}

root.render(createElement(CreateElementExample, null));
