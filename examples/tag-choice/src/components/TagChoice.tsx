import type { Choice } from "../mockData.js";

interface TagChoiceProps {
  choices: Choice[];
  selectedChoices?: string[];
  onClickChoice?: (choice: string, isSelected: boolean) => void;
}

export function TagChoice({
  choices,
  selectedChoices = [],
  onClickChoice,
}: TagChoiceProps) {
  return (
    <view className="TagChoice">
      {choices.map((choice) => {
        const key = choice.label;
        if (!key) {
          return null;
        }

        const selected = selectedChoices.includes(key);
        return (
          <view
            className={`TagChoice__item${selected ? " TagChoice__item--selected" : ""}`}
            key={key}
            bindtap={() => onClickChoice?.(key, selected)}
            ignore-focus
          >
            <text className="TagChoice__text" ignore-focus>
              {choice.text}
            </text>
          </view>
        );
      })}
    </view>
  );
}
