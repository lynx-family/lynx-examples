import type { SegmentItem } from "../mockData.js";

interface SegmentedControlProps {
  value: string;
  onChange: (newValue: string) => void;
  items: SegmentItem[];
  isDisabled?: boolean;
}

export function SegmentedControl({
  items,
  value,
  onChange,
  isDisabled = false,
}: SegmentedControlProps) {
  return (
    <view
      className="SegmentedControl"
      style={{ opacity: isDisabled ? 0.48 : 1 }}
    >
      {items.map((item) => {
        const isSelected = value === item.value;

        return (
          <view
            key={item.value}
            className={`SegmentedControl__item${isSelected ? " SegmentedControl__item--selected" : ""}`}
            bindtap={() => onChange(item.value)}
          >
            <text
              text-maxline="1"
              className={`SegmentedControl__label${isSelected ? " SegmentedControl__label--selected" : ""}`}
            >
              {item.title}
            </text>
            {item.trailingIcon
              ? (
                <text
                  className={`SegmentedControl__indicator${isSelected ? " SegmentedControl__indicator--selected" : ""}`}
                >
                  ▾
                </text>
              )
              : null}
          </view>
        );
      })}
    </view>
  );
}
