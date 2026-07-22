import { useState } from "@lynx-js/react";

type LineInfo = {
  start: number;
  end: number;
  ellipsisCount: number;
};

type AdaptiveTextProps = {
  children: React.ReactNode;
  className?: string;
  "text-maxline": string;
  maxFontSize: number;
  minFontSize?: number;
  autoSizeStep?: number;
  lineHeightMultiplier?: number;
};

export function AdaptiveText({
  autoSizeStep = 1,
  minFontSize = 0,
  maxFontSize,
  lineHeightMultiplier,
  className,
  children,
  "text-maxline": textMaxLine,
}: AdaptiveTextProps) {
  const [fontSize, setFontSize] = useState(maxFontSize);
  const [opacity, setOpacity] = useState(0);

  const onLayout = (event: { detail: { lineCount: number; lines: LineInfo[] } }) => {
    const { lineCount, lines } = event.detail;
    const lastLine = lines[lineCount - 1];
    const hasEllipsis = Boolean(lastLine?.ellipsisCount);

    if (hasEllipsis && fontSize > minFontSize) {
      setFontSize(Math.max(minFontSize, fontSize - autoSizeStep));
      return;
    }

    setOpacity(1);
  };

  return (
    <text
      className={className}
      text-maxline={textMaxLine}
      bindlayout={onLayout}
      style={{
        textOverflow: "ellipsis",
        fontSize: `${fontSize}px`,
        ...(lineHeightMultiplier ? { lineHeight: `${fontSize * lineHeightMultiplier}px` } : {}),
        opacity,
      }}
    >
      {children}
    </text>
  );
}
