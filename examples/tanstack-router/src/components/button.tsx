export function Button(props: {
  children: React.ReactNode;
  bindtap: () => void;
}) {
  return (
    <view
      style={{ border: "1px solid black", padding: "8px" }}
      bindtap={props.bindtap}
    >
      {props.children}
    </view>
  );
}
