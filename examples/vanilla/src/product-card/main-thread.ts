import type { RawTextElementRef } from "@lynx-js/type-element-api";

import { createPage, createText, createView } from "../common/main-thread/element.js";
import { bindMainThreadEvent } from "../common/main-thread/event.js";
import { setupMainThread } from "../common/main-thread/setup.js";

const productImageUrl = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=85";

const { page, pageId } = createPage("page");

function setText(node: RawTextElementRef, value: string): void {
  __SetAttribute(node, "text", value);
}

function renderPage(): void {
  let cartCount = 0;
  let isSaved = false;

  const card = createView(pageId, "product-card");
  __SetAttribute(card, "aria-label", "限量款 Velocity Runner 商品卡");
  __AppendElement(page, card);

  const media = createView(pageId, "product-media");
  const image = __CreateImage(pageId);
  __SetClasses(image, "product-image");
  __SetAttribute(image, "src", productImageUrl);
  __SetAttribute(image, "mode", "aspectFill");
  const shade = createView(pageId, "product-shade");
  const badge = createView(pageId, "product-badge");
  const badgeText = createText(pageId, "product-badge-text", "LIMITED EDITION");
  __AppendElement(badge, badgeText.text);
  __AppendElement(media, image);
  __AppendElement(media, shade);
  __AppendElement(media, badge);
  __AppendElement(card, media);

  const content = createView(pageId, "product-content");
  const metaRow = createView(pageId, "product-meta-row");
  const category = createText(pageId, "product-category", "SNEAKERS · SOLAR SERIES");
  const availability = createText(pageId, "product-availability", "● 仅剩少量");
  __AppendElement(metaRow, category.text);
  __AppendElement(metaRow, availability.text);
  __AppendElement(content, metaRow);

  const name = createText(pageId, "product-name", "Velocity Runner ‘Solar Red’");
  const description = createText(
    pageId,
    "product-description",
    "轻量透气鞋面，搭配响应式缓震与高抓地橡胶外底。",
  );
  __AppendElement(content, name.text);
  __AppendElement(content, description.text);

  const ratingRow = createView(pageId, "product-rating-row");
  const rating = createText(pageId, "product-rating", "★★★★★  4.8");
  const reviews = createText(pageId, "product-reviews", "326 条评价");
  __AppendElement(ratingRow, rating.text);
  __AppendElement(ratingRow, reviews.text);
  __AppendElement(content, ratingRow);

  const priceRow = createView(pageId, "product-price-row");
  const priceGroup = createView(pageId, "product-price-group");
  const price = createText(pageId, "product-price", "$129");
  const originalPrice = createText(pageId, "product-original-price", "$159");
  __AppendElement(priceGroup, price.text);
  __AppendElement(priceGroup, originalPrice.text);
  const delivery = createText(pageId, "product-delivery", "免运费 · 48h 发货");
  __AppendElement(priceRow, priceGroup);
  __AppendElement(priceRow, delivery.text);
  __AppendElement(content, priceRow);

  const cartFeedback = createView(pageId, "cart-feedback hidden");
  const feedbackIcon = createText(pageId, "cart-feedback-icon", "✓");
  const feedbackCopy = createView(pageId, "cart-feedback-copy");
  const feedbackTitle = createText(pageId, "cart-feedback-title", "已加入购物车");
  const feedbackDetail = createText(pageId, "cart-feedback-detail", "购物车内共有 1 件");
  __AppendElement(feedbackCopy, feedbackTitle.text);
  __AppendElement(feedbackCopy, feedbackDetail.text);
  __AppendElement(cartFeedback, feedbackIcon.text);
  __AppendElement(cartFeedback, feedbackCopy);
  __AppendElement(content, cartFeedback);

  const actions = createView(pageId, "product-actions");
  const saveButton = createView(pageId, "save-button");
  __SetID(saveButton, "save-product");
  __SetAttribute(saveButton, "aria-label", "收藏商品");
  const saveIcon = createText(pageId, "save-icon", "♡");
  const saveLabel = createText(pageId, "save-label", "收藏");
  __AppendElement(saveButton, saveIcon.text);
  __AppendElement(saveButton, saveLabel.text);

  const cartButton = createView(pageId, "cart-button");
  __SetID(cartButton, "add-to-cart");
  __SetAttribute(cartButton, "aria-label", "加入购物车");
  const cartIcon = createText(pageId, "cart-button-icon", "+");
  const cartLabel = createText(pageId, "cart-button-label", "加入购物车");
  __AppendElement(cartButton, cartIcon.text);
  __AppendElement(cartButton, cartLabel.text);

  bindMainThreadEvent(saveButton, "tap", () => {
    isSaved = !isSaved;
    __SetClasses(saveButton, isSaved ? "save-button saved" : "save-button");
    setText(saveIcon.raw, isSaved ? "♥" : "♡");
    setText(saveLabel.raw, isSaved ? "已收藏" : "收藏");
    __FlushElementTree();
  });

  bindMainThreadEvent(cartButton, "tap", () => {
    cartCount += 1;
    __SetClasses(cartFeedback, "cart-feedback");
    setText(feedbackDetail.raw, `购物车内共有 ${cartCount} 件`);
    setText(cartLabel.raw, `已加入 · ${cartCount}`);
    __FlushElementTree();
  });

  __AppendElement(actions, saveButton);
  __AppendElement(actions, cartButton);
  __AppendElement(content, actions);
  __AppendElement(card, content);
}

setupMainThread({ renderPage }, { enableBackgroundSync: false });
