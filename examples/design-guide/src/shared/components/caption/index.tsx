import "./index.css";

type CaptionProps = {
  title: string;
  subtitle?: string;
  footnote?: string;
};

export function Caption({ title, subtitle, footnote }: CaptionProps) {
  return (
    <view className="caption-container">
      <text className="caption-title">{title}</text>
      {subtitle && <text className="caption-subtitle">{subtitle}</text>}
      {footnote && <text className="caption-footnote">{footnote}</text>}
    </view>
  );
}
