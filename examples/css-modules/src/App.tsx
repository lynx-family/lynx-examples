import styles from "./App.module.css";

export function App() {
  return (
    <view className={styles.page}>
      <view className={styles.card}>
        <view className={styles.header}>
          <view className={styles.avatar}>
            <text className={styles.initial}>L</text>
          </view>
          <view>
            <text className={styles.title}>Lynx Explorer</text>
            <text className={styles.subtitle}>Styled with CSS Modules</text>
          </view>
        </view>

        <view className={styles.divider} />

        <view className={styles.row}>
          <text className={styles.label}>Stylesheet</text>
          <text className={styles.value}>src/App.module.css</text>
        </view>
        <view className={styles.row}>
          <text className={styles.label}>Scope</text>
          <text className={styles.value}>Local</text>
        </view>

        <view className={styles.actions}>
          <view className={`${styles.button} ${styles.primary}`}>
            <text className={styles.caption}>Open</text>
          </view>
          <view className={`${styles.button} ${styles.secondary}`}>
            <text className={styles.caption}>Share</text>
          </view>
        </view>
      </view>
    </view>
  );
}
