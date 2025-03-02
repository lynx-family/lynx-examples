import type { ReactNode } from "@lynx-js/react";
import "./styles.scss";
import type { CSSProperties } from "@lynx-js/types";
import favoriteIcon from "../../assets/heart.png";
import NavBar from "../NavBar";
import SafeArea from "../SafeArea";

export function Page({ children, title, style }: { children: ReactNode; title?: string; style?: CSSProperties }) {
  return (
    <SafeArea style={style}>
      <view class="page-container">
        {children}
        <view class="card-detail-container">
          <view class="card-detail">
            <view class="card-detail-title">
              <text class="card-detail-title-price">￥1314</text>
              <text class="card-detail-amount">Sold 1000+</text>
            </view>
            <view class="card-detail-desc">
              <text class="card-detail-desc-text">Single leather seat</text>
              <image
                mode="aspectFill"
                class="favorite-icon"
                src={favoriteIcon}
                style={{ width: "20px", height: "20px" }}
              />
            </view>
          </view>
        </view>
        <view class="order-button">
          <text class="order-text">Order Now</text>
        </view>
      </view>
    </SafeArea>
  );
}
