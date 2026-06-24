import "./App.css";

import { ButtonSection } from "./sections/ButtonSection.jsx";
import { CheckboxSection } from "./sections/CheckboxSection.jsx";
import { DialogSection } from "./sections/DialogSection.jsx";
import { DraggableSection } from "./sections/DraggableSection.jsx";
import { FeedListSection } from "./sections/FeedListSection.jsx";
import { FormSection } from "./sections/FormSection.jsx";
import { InputSection } from "./sections/InputSection.jsx";
import { LazyComponentSection } from "./sections/LazyComponentSection.jsx";
import { ListSection } from "./sections/ListSection.jsx";
import { PopoverSection } from "./sections/PopoverSection.jsx";
import { RadioGroupSection } from "./sections/RadioGroupSection.jsx";
import { ScrollViewSection } from "./sections/ScrollViewSection.jsx";
import { SheetSection } from "./sections/SheetSection.jsx";
import { SliderSection } from "./sections/SliderSection.jsx";
import { SortableSection } from "./sections/SortableSection.jsx";
import { SwipeActionSection } from "./sections/SwipeActionSection.jsx";
import { SwiperSection } from "./sections/SwiperSection.jsx";
import { SwitchSection } from "./sections/SwitchSection.jsx";

export function App() {
  return (
    <view className="gallery-container">
      <scroll-view scroll-orientation="vertical" className="gallery-scroll">
        <view className="gallery-header">
          <text className="gallery-title">lynx-ui Gallery</text>
          <text className="gallery-subtitle">Kitchen Sink Demo</text>
        </view>

        <ButtonSection />
        <SwitchSection />
        <CheckboxSection />
        <RadioGroupSection />
        <SliderSection />
        <InputSection />
        <DialogSection />
        <SheetSection />
        <PopoverSection />
        <SwiperSection />
        <ScrollViewSection />
        <SwipeActionSection />
        <DraggableSection />
        <SortableSection />
        <ListSection />
        <FeedListSection />
        <FormSection />
        <LazyComponentSection />

        <view className="gallery-footer">
          <text className="gallery-footer-text">End of Gallery</text>
        </view>
      </scroll-view>
    </view>
  );
}
