/// <reference types="@lynx-js/rspeedy/client" />

declare module "@lynx-js/types" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface GlobalProps {
    /**
     * Define your global properties in this interface.
     * These types will be accessible through `lynx.__globalProps`.
     */
  }
}

declare global {
  const __CHAT_SERVER_URL__: string;
}

// This export makes the file a module
export {};
