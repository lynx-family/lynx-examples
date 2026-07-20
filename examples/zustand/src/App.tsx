import { useEffect } from "@lynx-js/react";
import { create } from "zustand";

type State = {
  count: number;
};

type Action = {
  increment: () => void;
};

const useStore = create<State & Action>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

export function App() {
  const { count, increment } = useStore();

  useEffect(() => {
    console.log("count changed:", count);
  }, [count]);

  return (
    <view>
      <text>{count}</text>
      <text bindtap={increment}>Tap</text>
    </view>
  );
}
