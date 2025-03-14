import "./global.sass";
import "./global.less";
import "./global.styl";

export function App() {
  return (
    <view>
      <text className="title">Hello, Sass</text>
      <view className="a">
        <text className="b">Hello, Less</text>
      </view>
      <text className="b">Hello, Less</text>
      <text className="bar">Hello, Styl</text>
    </view>
  );
}
