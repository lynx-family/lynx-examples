import { root, useState } from "@lynx-js/react";
import type { ReactNode } from "@lynx-js/react";
import "./index.scss";

const AccordionItem = ({ title, content }: { title: ReactNode; content: ReactNode }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleItem = () => {
    setIsActive(!isActive);
  };
  return (
    <view className={`accordion-item ${isActive ? "active" : ""}`}>
      <view className="accordion-header" bindtap={toggleItem} style={{ transition: "background-color 0.5s" }}>
        <text>{title}</text>
        <text className={`icon ${isActive ? "rotate" : ""}`} style={{ transition: "transform 0.5s" }}>▼</text>
      </view>
      <view
        className="accordion-content"
        // use 200px to estimate the height
        style={{ maxHeight: isActive ? "200px" : "14px", transition: "max-height 2s linear" }}
      >
        <text className="content">{content}</text>
      </view>
    </view>
  );
};

const Accordion = () => {
  const items = [
    {
      title: "Item 1",
      content: "This is the content of item 1. ".repeat(10),
    },
    {
      title: "Item 2",
      content: "This is the content of item 2. ".repeat(10),
    },
    {
      title: "Item 3",
      content: "This is the content of item 3. ".repeat(10),
    },
  ];

  return (
    <view className="accordion">
      {items.map((item, index) => <AccordionItem key={index} title={item.title} content={item.content} />)}
    </view>
  );
};
root.render(<Accordion />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
