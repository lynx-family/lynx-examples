// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import type * as Lynx from "@lynx-js/types";

import type { AnimaXReadyParam } from "../intrinsic-element.js";

export type AnimaXReadyEvent = Lynx.BaseEvent<"bindready", AnimaXReadyParam>;

export enum LayerPropertyType {
  Visibility = 1,
  TransformOpacity = 2,
  TransformAnchor = 3,
  TransformPosition = 4,
  TransformScale = 5,
  TransformRotation = 6,
  TextValue = 101,
  TextSize = 102,
  TextColor = 103,
}

export enum ResourcePropertyType {
  ImageDirName = 1,
  ImageFileName = 2,
  FontPath = 104,
  VideoDirName = 201,
  VideoFileName = 202,
}

export interface Point {
  x: number;
  y: number;
}

export interface ValueParam {
  stringValue?: string;
  pointX?: number;
  pointY?: number;
  doubleValue?: number;
  boolValue?: boolean;
  frameIndex: number;
}

export type DynamicValue = string | number | boolean | Point;
export type PropertyCallback = (success?: boolean, errorType?: number) => void;

export function isPropertyUpdateSuccessful(success?: boolean) {
  return success !== false;
}

interface NativeCompositionElement {
  play(): void;
  updateLayerProperty(
    type: LayerPropertyType,
    layerName: string,
    value: ValueParam,
    callback: PropertyCallback,
  ): void;
  setResourceProperty(
    type: ResourcePropertyType,
    resourceId: string,
    value: ValueParam,
    callback: PropertyCallback,
  ): void;
  submitResourcePropertiesUpdate(callback: PropertyCallback): void;
}

interface AnimaXModule {
  CompositionElement: new(elementID: string) => NativeCompositionElement;
}

const ALL_FRAME = -1;
const noop: PropertyCallback = () => {};

export function createValueParam(value: DynamicValue, targetFrame = ALL_FRAME): ValueParam {
  if (typeof value === "object") {
    return {
      pointX: value.x,
      pointY: value.y,
      frameIndex: targetFrame,
    };
  }

  if (typeof value === "string") {
    return {
      stringValue: value,
      frameIndex: targetFrame,
    };
  }

  if (typeof value === "number") {
    return {
      doubleValue: value,
      frameIndex: targetFrame,
    };
  }

  return {
    boolValue: value,
    frameIndex: targetFrame,
  };
}

export function formatColorString(color: string) {
  if (!/^(#|0x)([0-9a-fA-F]{2}){3,4}$/.test(color)) {
    return null;
  }

  return color.slice(color.startsWith("#") ? 1 : 2);
}

function autoAdaptValueParam(type: LayerPropertyType, value: ValueParam) {
  if (
    type !== LayerPropertyType.TransformAnchor
    && type !== LayerPropertyType.TransformPosition
    && type !== LayerPropertyType.TextSize
  ) {
    return;
  }

  const pixelRatio = (globalThis as { SystemInfo?: { pixelRatio?: number } }).SystemInfo?.pixelRatio;
  const density = typeof pixelRatio === "number" ? pixelRatio : 1;

  if (density === 1) {
    return;
  }

  if (typeof value.pointX === "number" && typeof value.pointY === "number") {
    value.pointX *= density;
    value.pointY *= density;
  } else if (typeof value.doubleValue === "number") {
    value.doubleValue *= density;
  }
}

function loadAnimaXModule() {
  "background only";

  const moduleLoader = (lynx as unknown as {
    getModuleLoader?: () => { load(moduleName: "animax"): AnimaXModule };
  }).getModuleLoader?.();
  const loadedModule = moduleLoader?.load("animax");

  if (loadedModule) {
    return loadedModule;
  }

  const app = (lynx as unknown as {
    getApp?: () => { _nativeApp?: { id?: string | number }; nativeAppId?: string | number };
  }).getApp?.();
  const runtimeId = app?._nativeApp?.id ?? app?.nativeAppId;
  const loaders = globalThis as unknown as Record<
    string,
    { load(moduleName: "animax"): AnimaXModule } | undefined
  >;
  const loader = runtimeId == null
    ? undefined
    : loaders[`napiLoaderOnRT${runtimeId}`];

  return loader?.load("animax");
}

export class CompositionElementProxy {
  private readonly element: NativeCompositionElement;

  constructor(element: NativeCompositionElement) {
    this.element = element;
  }

  updateTextByLayerName(
    layerName: string,
    newText: string,
    targetFrame?: number,
    callback?: PropertyCallback,
  ) {
    this.updateLayerProperty(
      LayerPropertyType.TextValue,
      layerName,
      createValueParam(newText, targetFrame),
      callback,
    );
  }

  updateTextSizeByLayerName(
    layerName: string,
    textSize: number,
    targetFrame?: number,
    callback?: PropertyCallback,
  ) {
    this.updateLayerProperty(
      LayerPropertyType.TextSize,
      layerName,
      createValueParam(textSize, targetFrame),
      callback,
    );
  }

  updateTextColorByLayerName(
    layerName: string,
    textColor: string,
    targetFrame?: number,
    callback?: PropertyCallback,
  ) {
    const color = formatColorString(textColor);

    if (color == null) {
      return false;
    }

    this.updateLayerProperty(
      LayerPropertyType.TextColor,
      layerName,
      createValueParam(color, targetFrame),
      callback,
    );
    return true;
  }

  updateImageById(imageId: string, newImageUrl: string, callback?: PropertyCallback) {
    this.setResourceProperty(
      ResourcePropertyType.ImageDirName,
      imageId,
      createValueParam(""),
      callback,
    );
    this.setResourceProperty(
      ResourcePropertyType.ImageFileName,
      imageId,
      createValueParam(newImageUrl),
      callback,
    );
  }

  updateVideoById(videoId: string, newVideoUrl: string, callback?: PropertyCallback) {
    this.setResourceProperty(
      ResourcePropertyType.VideoDirName,
      videoId,
      createValueParam(""),
      callback,
    );
    this.setResourceProperty(
      ResourcePropertyType.VideoFileName,
      videoId,
      createValueParam(newVideoUrl),
      callback,
    );
  }

  updateFontByName(fontName: string, newFontPath: string, callback?: PropertyCallback) {
    this.setResourceProperty(
      ResourcePropertyType.FontPath,
      fontName,
      createValueParam(newFontPath),
      callback,
    );
  }

  updateLayerProperty(
    type: LayerPropertyType,
    layerName: string,
    value: ValueParam,
    callback?: PropertyCallback,
  ) {
    autoAdaptValueParam(type, value);
    this.element.updateLayerProperty(type, layerName, value, callback ?? noop);
  }

  setResourceProperty(
    type: ResourcePropertyType,
    resourceId: string,
    value: ValueParam,
    callback?: PropertyCallback,
  ) {
    this.element.setResourceProperty(type, resourceId, value, callback ?? noop);
  }

  submitResourcePropertiesUpdate(callback?: PropertyCallback) {
    this.element.submitResourcePropertiesUpdate(callback ?? noop);
  }

  play() {
    this.element.play();
  }
}

export function createCompositionElementProxy(e: AnimaXReadyEvent) {
  const animax = loadAnimaXModule();

  if (!animax) {
    return undefined;
  }

  return new CompositionElementProxy(new animax.CompositionElement(e.detail.elementID));
}
