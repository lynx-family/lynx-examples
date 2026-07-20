/// <reference types="@lynx-js/rspeedy/client" />

declare module "@lynx-js/types" {
  interface GlobalProps {
    message: string;
    status: number;
    loaded: boolean;
    [key: string]: unknown;
  }
}

declare module "@lynx-js/react" {
  interface InitData {
    id: number;
    name: string;
    showDetail: boolean;
    [key: string]: unknown;
  }
}

// This export makes the file a module
export {};
