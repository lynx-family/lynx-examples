import image_0 from "@assets/item_0.jpg";
import image_1 from "@assets/item_1.jpg";
import image_2 from "@assets/item_2.jpg";

export const ItemView = (props: { index: number }) => {
  return (
    <view
      style={{ width: "100%", height: "240px", border: "1px solid red" }}
    >
      <text style={{ fontSize: "16px", paddingLeft: "6px", paddingTop: "6px", height: "40px" }}>
        {`list-item-${props.index}`}
      </text>
      <image
        style={{ width: "100%", height: "200px" }}
        src={props.index % 3 == 0 ? image_0 : (props.index % 3 == 1 ? image_1 : image_2)}
      />
    </view>
  );
};
