import image_0 from "@assets/item_0.jpg";
import image_1 from "@assets/item_1.jpg";
import image_2 from "@assets/item_2.jpg";

export const VerticalView = (props: { index: number }) => {
  return (
    <view
      style={{
        width: "100%",
        height: "70vh",
        display: "flex",
        flexDirection: "column",
        border: "2px solid green",
        borderRadius: "8px",
      }}
    >
      <text style={{ fontSize: "16px", paddingLeft: "6px", paddingTop: "6px" }}>
        {`list-item-${props.index}`}
      </text>
      <image
        style={{ width: "100%", height: "100%", flexGrow: 1 }}
        src={props.index % 3 == 0 ? image_0 : (props.index % 3 == 1 ? image_1 : image_2)}
      />
    </view>
  );
};
