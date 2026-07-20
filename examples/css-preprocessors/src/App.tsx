import "./card.scss";
import "./card.less";
import "./card.styl";

interface CardProps {
  /** Scope class the matching stylesheet nests all of its rules under. */
  flavor: "sass" | "less" | "stylus";
  language: string;
  file: string;
  /** How the language declares a variable. */
  variable: string;
}

function Card({ flavor, language, file, variable }: CardProps) {
  return (
    <view className={flavor}>
      <view className="header">
        <view className="avatar">
          <text className="initial">{language[0]}</text>
        </view>
        <view>
          <text className="title">{language}</text>
          <text className="subtitle">{file}</text>
        </view>
      </view>

      <view className="divider" />

      <view className="rows">
        <view className="row">
          <text className="label">Scope</text>
          <text className="value">.{flavor}</text>
        </view>
        <view className="row">
          <text className="label">Variable</text>
          <text className="value">{variable}</text>
        </view>
      </view>
    </view>
  );
}

export function App() {
  return (
    <scroll-view className="page" scroll-orientation="vertical">
      <Card flavor="sass" language="Sass" file="src/card.scss" variable="$accent" />
      <Card flavor="less" language="Less" file="src/card.less" variable="@accent" />
      <Card flavor="stylus" language="Stylus" file="src/card.styl" variable="accent =" />
    </scroll-view>
  );
}
