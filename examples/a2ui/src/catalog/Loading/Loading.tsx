import "./Loading.css";

/**
 * Loading placeholder shown while generated UI is streaming.
 *
 * @a2uiCatalog Loading
 */
export interface LoadingProps {
  /** Visual layout variant for the loading placeholder. */
  variant?: "inline" | "block";
}

export function Loading(props: LoadingProps) {
  const variant = props.variant ?? "inline";

  return (
    <view className={`loading loading-${variant}`}>
      <view className="loading-skeleton loading-skeleton-primary" />
      {variant === "block" ? <view className="loading-skeleton loading-skeleton-secondary" /> : null}
    </view>
  );
}
