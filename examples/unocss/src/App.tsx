import { useCallback, useEffect, useState } from "@lynx-js/react";

import arrow from "./assets/arrow.png";
import lynxLogo from "./assets/lynx-logo.png";
import reactLynxLogo from "./assets/react-logo.png";

export function App() {
  const [alterLogo, setAlterLogo] = useState(false);

  useEffect(() => {
    console.info("Hello, ReactLynx");
  }, []);

  const onTap = useCallback(() => {
    "background only";
    setAlterLogo(!alterLogo);
  }, [alterLogo]);

  return (
    <view>
      <view class="fixed w-[200vw] h-[200vw] top-[-60vw] left-[-14.27vw] rounded-full rotate-[15.25deg] shadow-[0_12.93px_28.74px_0_#ffd28db2_inset] bg-gradient-radial from-transparent via-[rgba(239,155,255,0.3)] to-[#ff6448]" />

      <view class="relative min-h-screen flex flex-col items-center justify-center">
        <view class="flex-[5] flex flex-col items-center justify-center z-[100]">
          <view class="flex flex-col items-center justify-center mb-2" bindtap={onTap}>
            {alterLogo ? (
              <image
                src={reactLynxLogo}
                class="w-[100px] h-[100px] animate-[spin_20s_linear_infinite]"
              />
            ) : (
              <image
                src={lynxLogo}
                class="w-[100px] h-[100px] animate-shake"
              />
            )}
          </view>
          <text class="text-white text-[36px] font-bold">React</text>
          <text class="text-white text-[22px] font-semibold italic mb-2">on Lynx</text>
        </view>

        <view class="flex flex-col items-center justify-center">
          <image src={arrow} class="w-[24px] h-[24px]" />
          <text class="text-[20px] text-white-8 m-[15px]">Tap the logo and have fun!</text>
          <text class="text-[12px] text-white-6 m-[5px]">
            Edit
            <text class="italic">{" src/App.tsx "}</text>
            to see updates!
          </text>
        </view>
        <view class="flex-1"></view>
      </view>
    </view>
  );
}
