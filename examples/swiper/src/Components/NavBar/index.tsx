import "./styles.scss";
import backIcon from "../../assets/back.png";
import starIcon from "../../assets/star.png";

interface NavBarProps {
  onBack?: () => void;
  onFavorite?: () => void;
  title?: string;
}

export default function NavBar({ onBack, onFavorite, title }: NavBarProps) {
  return (
    <view className="nav-bar">
      <image className="left-icon" src={backIcon} bindtap={onBack} />
      <text className="nav-title">{title}</text>
      <image className="right-icon" src={starIcon} bindtap={onFavorite} />
    </view>
  );
}
