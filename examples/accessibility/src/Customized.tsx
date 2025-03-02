export const Customized = ({ src }: { src: string }) => {
  return (
    <view
      style={{ padding: "10px" }}
      accessibility-element={true}
      accessibility-label={"Hello world"}
    >
      <text accessibility-element={false}>Hello</text>
      <text accessibility-element={false}>world</text>
    </view>
  );
};
