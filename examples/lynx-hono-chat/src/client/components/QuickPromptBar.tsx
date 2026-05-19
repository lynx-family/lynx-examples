import { Button } from "@lynx-js/lynx-ui";

export function QuickPromptBar({
  prompts,
  onSelect,
}: {
  prompts: string[];
  onSelect: (prompt: string) => void;
}) {
  return (
    <view className="PromptRow">
      {prompts.map(prompt => (
        <Button
          key={prompt}
          className="PromptButton"
          onClick={() => {
            "background only";
            onSelect(prompt);
          }}
        >
          <text className="PromptText">{prompt}</text>
        </Button>
      ))}
    </view>
  );
}
