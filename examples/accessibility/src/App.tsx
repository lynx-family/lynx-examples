// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
import { Customized } from "./Customized.jsx";
import { Default } from "./Default.jsx";
import { LabelAndTraits } from "./LabelAndTraits.jsx";
import { ReOrder } from "./ReOrder.jsx";

export const App = ({ src }: { src: string }) => {
  return (
    <view style="margin:100px 10px 10px 10px;">
      <view style="margin:10px;padding:10px;border:1px solid red;border-radius:10px;">
        <Default src={src} />
      </view>
      <view style="margin:10px;padding:10px;border:1px solid red;border-radius:10px;">
        <Customized src={src} />
      </view>
      <view style="margin:10px;padding:10px;border:1px solid red;border-radius:10px;">
        <LabelAndTraits src={src} />
      </view>
      <view style="margin:10px;padding:10px;border:1px solid red;border-radius:10px;">
        <ReOrder src={src} />
      </view>
    </view>
  );
};
