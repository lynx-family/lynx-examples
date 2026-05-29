import type { CatalogManifest } from "@lynx-js/genui/a2ui";

import "./Loading.css";

export interface LoadingProps {
  id?: string;
  variant?: "inline" | "block";
}

export const loadingManifest = {
  Loading: {
    properties: {
      variant: {
        type: "string",
        enum: ["inline", "block"],
      },
    },
  },
} satisfies CatalogManifest;

export function Loading(props: LoadingProps) {
  const variant = props.variant ?? "inline";

  return (
    <view className={`loading loading-${variant}`}>
      <view className="loading-skeleton loading-skeleton-primary" />
      {variant === "block" ? <view className="loading-skeleton loading-skeleton-secondary" /> : null}
    </view>
  );
}
