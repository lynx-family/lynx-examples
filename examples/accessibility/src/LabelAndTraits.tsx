export const LabelAndTraits = ({ src }: { src: string }) => {
  return (
    <view
      style={{ padding: "10px" }}
      accessibility-element={true}
      accessibility-trait="button"
      accessibility-label={"Hello world"}
    >
      <text accessibility-element={false}>Hello</text>
      <text accessibility-element={false}>world</text>
      <image
        auto-size
        style={{ width: "100px" }}
        src={src}
        accessibility-element={true}
        accessibility-trait="image"
        accessibility-label="I am an image displaying the Lynx icon"
      />
    </view>
  );
};
