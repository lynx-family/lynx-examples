import { type Book } from "./book.js";

export const ProductCard = (props: { book: Book; index: number }) => {
  const halfStar =
    "https://lf3-static.bytednsdoc.com/obj/eden-cn/zalzzh-ukj-lapzild-shpjpmmv-eufs/ljhwZthlaukjlkulzlp/icons/star-half-filled.256x245.png";
  const wholeStar =
    "https://lf3-static.bytednsdoc.com/obj/eden-cn/zalzzh-ukj-lapzild-shpjpmmv-eufs/ljhwZthlaukjlkulzlp/icons/star-large.256x245.png";
  const emptyStar =
    "https://lf3-static.bytednsdoc.com/obj/eden-cn/zalzzh-ukj-lapzild-shpjpmmv-eufs/ljhwZthlaukjlkulzlp/icons/star-medium.256x243.png";
  const _singleStar = (scoreStatus: number) => (
    <image
      style={{ width: "15px", height: "15px" }}
      src={scoreStatus >= 1 ? wholeStar : scoreStatus >= 0 ? halfStar : emptyStar}
    />
  );

  const _stars = (score: number) => {
    return (
      <view
        style={{
          marginLeft: "20px",
          display: "flex",
          marginTop: "5px",
        }}
      >
        {_singleStar(score)}
        {_singleStar(score - 1)}
        {_singleStar(score - 2)}
        {_singleStar(score - 3)}
        {_singleStar(score - 4)}
        <text>({score})</text>
      </view>
    );
  };

  return (
    <view
      style={{
        display: "linear",
        linearOrientation: "vertical",
        height: "112px",
        width: "100%",
      }}
    >
      <view
        style={{
          width: "96%",
          marginLeft: "2%",
          marginRight: "2%",
          height: "2px",
          borderWidth: "1px",
          borderColor: "#006d75",
        }}
      />
      <view
        style={{
          borderRadius: "10px",
          overflow: "hidden",
          borderColor: "#001d66",
          display: "flex",
          flexDirection: "row",
          padding: "10px",
        }}
      >
        <text style={{ fontSize: "20px", whiteSpace: "nowrap" }}>{props.index}</text>
        <image
          style={{
            height: "100px",
            paddingLeft: "10px",
            width: "80px",
          }}
          src={props.book.cover}
        />
        <view
          style={{
            flexGrow: 1,
            justifyContent: "flex-start",
            paddingBottom: "5px",
            overflow: "hidden",
          }}
        >
          <text
            style={{
              fontWeight: "bold",
              marginLeft: "20px",
              fontSize: "17px",
            }}
          >
            {props.book.title}
          </text>
          <text style={{ marginLeft: "20px", fontSize: "12px" }}>
            {props.book.author}
          </text>
          {_stars(props.book.score)}
          {/* mock massive rendering */}
          {Array.from({ length: 40 }).map((_, i) => (
            <view style="position:absolute;opacity:0.0">
              {_stars(props.book.score)}
            </view>
          ))}
        </view>
      </view>
    </view>
  );
};
