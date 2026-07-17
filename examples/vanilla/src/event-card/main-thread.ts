import type { TextElementRef } from "@lynx-js/type-element-api";

import { createPage, createText, createView } from "../common/main-thread/element.js";
import { bindMainThreadEvent } from "../common/main-thread/event.js";
import { setupMainThread } from "../common/main-thread/setup.js";

const { page, pageId } = createPage("page");

function setText(node: TextElementRef, value: string): void {
  __ReplaceElements(node, [__CreateRawText(value)], __GetChildren(node));
}

function renderPage(): void {
  let isJoined = false;
  let reminderEnabled = false;

  const card = createView(pageId, "event-card");
  __SetAttribute(card, "aria-label", "设计系统开放日活动卡");
  __AppendElement(page, card);

  const hero = createView(pageId, "event-hero");
  const orbLarge = createView(pageId, "event-orb event-orb-large");
  const orbSmall = createView(pageId, "event-orb event-orb-small");
  __AppendElement(hero, orbLarge);
  __AppendElement(hero, orbSmall);

  const heroContent = createView(pageId, "event-hero-content");
  const heroTop = createView(pageId, "event-hero-top");
  const series = createText(pageId, "event-series", "DESIGN COMMUNITY");
  const status = createView(pageId, "event-status");
  const statusDot = createView(pageId, "event-status-dot");
  const statusText = createText(pageId, "event-status-text", "本周六");
  __AppendElement(status, statusDot);
  __AppendElement(status, statusText.text);
  __AppendElement(heroTop, series.text);
  __AppendElement(heroTop, status);
  __AppendElement(heroContent, heroTop);

  const date = createText(pageId, "event-date", "JUL 20 · 14:00");
  const title = createText(pageId, "event-title", "设计系统开放日");
  const subtitle = createText(
    pageId,
    "event-subtitle",
    "从灵感到落地：打造一致而有温度的产品体验",
  );
  __AppendElement(heroContent, date.text);
  __AppendElement(heroContent, title.text);
  __AppendElement(heroContent, subtitle.text);
  __AppendElement(hero, heroContent);
  __AppendElement(card, hero);

  const content = createView(pageId, "event-content");
  const scheduleRow = createView(pageId, "event-info-row");
  const scheduleIcon = createText(
    pageId,
    "event-info-icon event-info-icon-purple",
    "⌚",
  );
  const scheduleCopy = createView(pageId, "event-info-copy");
  const scheduleLabel = createText(pageId, "event-info-label", "时间");
  const scheduleValue = createText(
    pageId,
    "event-info-value",
    "7 月 20 日，星期六 · 14:00–16:30",
  );
  __AppendElement(scheduleCopy, scheduleLabel.text);
  __AppendElement(scheduleCopy, scheduleValue.text);
  __AppendElement(scheduleRow, scheduleIcon.text);
  __AppendElement(scheduleRow, scheduleCopy);
  __AppendElement(content, scheduleRow);

  const locationRow = createView(pageId, "event-info-row event-location-row");
  const locationIcon = createText(
    pageId,
    "event-info-icon event-info-icon-orange",
    "⌖",
  );
  const locationCopy = createView(pageId, "event-info-copy");
  const locationLabel = createText(pageId, "event-info-label", "地点");
  const locationValue = createText(
    pageId,
    "event-info-value",
    "上海 · 西岸艺术中心 A2 厅",
  );
  __AppendElement(locationCopy, locationLabel.text);
  __AppendElement(locationCopy, locationValue.text);
  __AppendElement(locationRow, locationIcon.text);
  __AppendElement(locationRow, locationCopy);
  __AppendElement(content, locationRow);

  const divider = createView(pageId, "event-divider");
  __AppendElement(content, divider);

  const communityRow = createView(pageId, "event-community-row");
  const attendeeList = createView(pageId, "event-attendee-list");
  const avatarOne = createText(pageId, "event-avatar event-avatar-one", "AL");
  const avatarTwo = createText(pageId, "event-avatar event-avatar-two", "MK");
  const avatarThree = createText(pageId, "event-avatar event-avatar-three", "YU");
  const avatarMore = createText(pageId, "event-avatar event-avatar-more", "+38");
  __AppendElement(attendeeList, avatarOne.text);
  __AppendElement(attendeeList, avatarTwo.text);
  __AppendElement(attendeeList, avatarThree.text);
  __AppendElement(attendeeList, avatarMore.text);
  const communityCopy = createView(pageId, "event-community-copy");
  const communityTitle = createText(pageId, "event-community-title", "41 位设计师已参加");
  const communityDetail = createText(pageId, "event-community-detail", "席位有限，免费报名");
  __AppendElement(communityCopy, communityTitle.text);
  __AppendElement(communityCopy, communityDetail.text);
  __AppendElement(communityRow, attendeeList);
  __AppendElement(communityRow, communityCopy);
  __AppendElement(content, communityRow);

  const feedback = createView(pageId, "event-feedback hidden");
  const feedbackIcon = createText(pageId, "event-feedback-icon", "✓");
  const feedbackText = createText(
    pageId,
    "event-feedback-text",
    "已加入日程 · 活动前 15 分钟提醒",
  );
  __AppendElement(feedback, feedbackIcon.text);
  __AppendElement(feedback, feedbackText.text);
  __AppendElement(content, feedback);

  const actions = createView(pageId, "event-actions");
  const reminderButton = createView(pageId, "event-reminder-button");
  __SetID(reminderButton, "event-reminder");
  __SetAttribute(reminderButton, "aria-label", "设置活动提醒");
  const reminderIcon = createText(pageId, "event-reminder-icon", "♢");
  const reminderLabel = createText(pageId, "event-reminder-label", "设提醒");
  __AppendElement(reminderButton, reminderIcon.text);
  __AppendElement(reminderButton, reminderLabel.text);

  const joinButton = createView(pageId, "event-join-button");
  __SetID(joinButton, "join-event");
  __SetAttribute(joinButton, "aria-label", "加入活动日程");
  const joinIcon = createText(pageId, "event-join-icon", "+");
  const joinLabel = createText(pageId, "event-join-label", "加入日程");
  __AppendElement(joinButton, joinIcon.text);
  __AppendElement(joinButton, joinLabel.text);

  bindMainThreadEvent(reminderButton, "tap", () => {
    reminderEnabled = !reminderEnabled;
    __SetClasses(
      reminderButton,
      reminderEnabled ? "event-reminder-button enabled" : "event-reminder-button",
    );
    setText(reminderIcon.text, reminderEnabled ? "◆" : "♢");
    setText(reminderLabel.text, reminderEnabled ? "已提醒" : "设提醒");
    __FlushElementTree();
  });

  bindMainThreadEvent(joinButton, "tap", () => {
    isJoined = !isJoined;
    __SetClasses(
      joinButton,
      isJoined ? "event-join-button joined" : "event-join-button",
    );
    __SetClasses(feedback, isJoined ? "event-feedback" : "event-feedback hidden");
    setText(joinIcon.text, isJoined ? "✓" : "+");
    setText(joinLabel.text, isJoined ? "已加入日程" : "加入日程");
    __FlushElementTree();
  });

  __AppendElement(actions, reminderButton);
  __AppendElement(actions, joinButton);
  __AppendElement(content, actions);
  __AppendElement(card, content);
}

setupMainThread({ renderPage }, { enableBackgroundSync: false });
