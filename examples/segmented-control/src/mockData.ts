export interface SegmentItem {
  value: string;
  title: string;
  trailingIcon?: boolean;
}

export const segmentItems: SegmentItem[] = [
  { value: "week", title: "7 days" },
  { value: "month", title: "28 days" },
  { value: "quarter", title: "60 days" },
  { value: "custom", title: "Custom", trailingIcon: true },
];

export const initialSegment = segmentItems[0].value;
