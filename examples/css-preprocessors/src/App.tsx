import "./card.scss";
import "./card.less";
import "./card.styl";

interface CardProps {
  /** Scope class the matching stylesheet nests all of its rules under. */
  flavor: "sass" | "less" | "stylus";
  language: string;
  file: string;
}

function Card({ flavor, language, file }: CardProps) {
  return (
    <view className={flavor}>
      <view className="header">
        <view className="avatar">
          <text className="initial">{language[0]}</text>
        </view>
        <view>
          <text className="title">Lynx Explorer</text>
          <text className="subtitle">Styled with {language}</text>
        </view>
      </view>

      <view className="divider" />

      <view className="row">
        <text className="label">Stylesheet</text>
        <text className="value">{file}</text>
      </view>
      <view className="row">
        <text className="label">Scope</text>
        <text className="value">.{flavor}</text>
      </view>

      <view className="actions">
        <view className="button primary">
          <text className="caption">Open</text>
        </view>
        <view className="button secondary">
          <text className="caption">Share</text>
        </view>
      </view>
    </view>
  );
}

export function App() {
  return (
    <scroll-view className="page" scroll-orientation="vertical">
      <Card flavor="sass" language="Sass" file="src/card.scss" />
      <Card flavor="less" language="Less" file="src/card.less" />
      <Card flavor="stylus" language="Stylus" file="src/card.styl" />
    </scroll-view>
  );
}
