import { Button, TextArea } from "@lynx-js/lynx-ui";

type ComposerCardProps = {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  disabled: boolean;
  busy: boolean;
};

export function ComposerCard({
  value,
  onChange,
  onSubmit,
  disabled,
  busy,
}: ComposerCardProps) {
  return (
    <view className="Composer">
      <TextArea
        className="ComposerInput"
        value={value}
        placeholder="Ask something practical."
        maxLines={6}
        maxLength={600}
        confirmType="send"
        onInput={(nextValue) => {
          "background only";
          onChange(nextValue);
        }}
        onConfirm={() => {
          "background only";
          onSubmit();
        }}
      />
      <view className="ComposerFooter">
        <text className="ComposerHint">
          {busy ? "Sending request..." : "Send to the Hono chat endpoint."}
        </text>
        <Button
          className="PrimaryButton"
          disabled={disabled}
          onClick={() => {
            "background only";
            onSubmit();
          }}
        >
          <text className="PrimaryButtonText">
            {busy ? "Working..." : "Send"}
          </text>
        </Button>
      </view>
    </view>
  );
}
