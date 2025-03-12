import type { ReactNode } from "@lynx-js/react";
import "./styles.scss";
import type { CSSProperties } from "@lynx-js/types";
import favoriteIcon from "../../assets/heart.png";
import NavBar from "../NavBar";
import SafeArea from "../SafeArea";

export function Page({ children, title, style }: { children: ReactNode; title?: string; style?: CSSProperties }) {
  return (
    <SafeArea style={style}>
      <view className="page-container">
        {children}
        <view className="card-detail-container">
          <view className="card-detail">
            <view className="card-detail-title">
              <text className="card-detail-title-price">￥1314</text>
              <text className="card-detail-amount">Sold 1000+</text>
            </view>
            <view className="card-detail-desc">
              <text className="card-detail-desc-text">Single leather seat</text>
              <image
                mode="aspectFill"
                className="favorite-icon"
                src={favoriteIcon}
                style={{ width: "20px", height: "20px" }}
              />
            </view>
          </view>
        </view>
        <view className="order-button">
          <text className="order-text">Order Now</text>
        </view>
      </view>
    </SafeArea>
  );
}
