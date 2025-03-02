import image_0 from "@assets/item_0.jpg";
import image_1 from "@assets/item_1.jpg";
import image_2 from "@assets/item_2.jpg";

export const ItemView = (props: { index: number }) => {
  return (
    <view className="list-item-view" clip-radius={true}>
      <text className="list-item-text">
        {`list-item-${props.index}`}
      </text>
      <image
        className="list-item-image"
        src={props.index % 3 == 0 ? image_0 : (props.index % 3 == 1 ? image_1 : image_2)}
      />
    </view>
  );
};
