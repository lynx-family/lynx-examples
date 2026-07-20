import image_0 from "@assets/item_0.jpg";
import image_1 from "@assets/item_1.jpg";
import image_2 from "@assets/item_2.jpg";

export const HorizontalView = (props: { index: number }) => {
  return (
    <view
      style={{
        width: "60vw",
        height: "100%",
        border: "2px solid red",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        padding: "8px",
      }}
    >
      <text style={{ fontSize: "16px", paddingLeft: "6px", paddingTop: "6px" }}>
        {`list-item-${props.index}`}
      </text>
      <image
        style={{ width: "100%", height: "100%" }}
        src={props.index % 3 == 0 ? image_0 : (props.index % 3 == 1 ? image_1 : image_2)}
      />
    </view>
  );
};
