import styles from "./App.module.css";

export function App() {
  return (
    <view className={styles.page}>
      <view className={styles.card}>
        <view className={styles.header}>
          <view className={styles.avatar}>
            <text className={styles.initial}>M</text>
          </view>
          <view>
            <text className={styles.title}>CSS Modules</text>
            <text className={styles.subtitle}>src/App.module.css</text>
          </view>
        </view>

        <view className={styles.divider} />

        <view className={styles.row}>
          <text className={styles.label}>Scope</text>
          <text className={styles.value}>Local</text>
        </view>
        <view className={styles.row}>
          <text className={styles.label}>Selector</text>
          <text className={styles.value}>{styles.card}</text>
        </view>

        <view className={styles.divider} />

        <view className={styles.tags}>
          <view className={styles.tag}>
            <text className={styles.caption}>Lynx</text>
          </view>
          <view className={styles.tag}>
            <text className={styles.caption}>Web</text>
          </view>
        </view>
      </view>
    </view>
  );
}
