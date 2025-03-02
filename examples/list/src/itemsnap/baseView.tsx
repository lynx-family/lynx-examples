import image_0 from "@assets/item_0.jpg";
import image_1 from "@assets/item_1.jpg";

export const ItemView = (props: { index: number }) => {
  return (
    <view className="movie-card">
      <image className="poster-image" src={props.index % 2 == 0 ? image_0 : image_1} />
      <view className="score-container">
        <view className="score-badge">
          <view className="score-spacer" />
          <text className="score-value">{`list-item-${props.index}`}</text>
        </view>
      </view>
    </view>
  );
};
