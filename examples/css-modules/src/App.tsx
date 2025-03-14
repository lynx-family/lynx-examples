import styles from "./button.module.css";

export function Button() {
  return (
    <view className={styles.red}>
      <text>Button</text>
    </view>
  );
}

export function App() {
  return <Button />;
}
