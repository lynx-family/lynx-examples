import { useState } from "@lynx-js/react";

interface LineInfo {
  start: number;
  end: number;
  ellipsisCount: number;
}

type AdaptiveTextProps = JSX.IntrinsicElements["text"] & {
  style?: ReactLynx.CSSProperties;
  "text-maxline": number | string;
  maxFontSize: number;
  minFontSize?: number;
  autoSizeStep?: number;
  lineHeightMultiplier?: number;
  onSizeResolved?: (fontSize: number) => void;
};

export function AdaptiveText(props: AdaptiveTextProps) {
  const {
    autoSizeStep = 1,
    minFontSize = 0,
    onSizeResolved,
  } = props;
  const [fontSize, setFontSize] = useState(props.maxFontSize);
  const [opacity, setOpacity] = useState(0);

  const onLayout = (event: {
    detail: { lineCount: number; lines: LineInfo[] };
  }) => {
    const { lineCount, lines } = event.detail;
    const lastLine = lines[lineCount - 1];
    const hasEllipsis = lastLine.ellipsisCount > 0;

    if (hasEllipsis && fontSize > minFontSize) {
      setFontSize(fontSize - autoSizeStep);
    } else {
      setOpacity(1);
      onSizeResolved?.(fontSize);
    }
  };

  const styles = {
    ...(props.style ? props.style : {}),
    textOverflow: "ellipsis",
    fontSize: `${fontSize}rpx`,
    opacity,
    ...(props.lineHeightMultiplier
      ? { lineHeight: `${fontSize * props.lineHeightMultiplier}rpx` }
      : {}),
  };

  return (
    <text {...props} style={styles} bindlayout={onLayout}>
      {props.children}
    </text>
  );
}
