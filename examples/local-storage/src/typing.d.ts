// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

declare module "@lynx-js/types" {
  interface NativeModules {
    NativeLocalStorageModule: {
      setStorageItem(key: string, value: string): void;
      getStorageItem(key: string): string | null;
      clearStorage(): void;
    };
  }
}

export {};
