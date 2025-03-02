export const ReOrder = ({ src }: { src: string }) => {
  return (
    <view style={{ padding: "10px" }} accessibility-element={true} accessibility-elements="second,first">
      <view>
        <text id="first">Hello</text>
        <text id="second">Lynx</text>
      </view>
    </view>
  );
};
