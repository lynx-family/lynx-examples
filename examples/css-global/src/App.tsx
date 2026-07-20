import "./App.css";

export function App() {
  return (
    <view className="page">
      <view className="card">
        <view className="header">
          <view className="avatar">
            <text className="initial">G</text>
          </view>
          <view>
            <text className="title">Global CSS</text>
            <text className="subtitle">src/App.css</text>
          </view>
        </view>

        <view className="divider" />

        <view className="rows">
          <view className="row">
            <text className="label">Scope</text>
            <text className="value">Global</text>
          </view>
          <view className="row">
            <text className="label">Selector</text>
            <text className="value">.card</text>
          </view>
        </view>
      </view>
    </view>
  );
}
