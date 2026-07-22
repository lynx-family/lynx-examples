export type MediaCardItem = {
  id: string;
  title: string;
  subtitle: string;
  cover: {
    width: string;
    height: string;
    imageUrl: string;
  };
  timeInfo?: string;
  author?: {
    avatar: string;
    name: string;
  };
  isPhotoMode?: boolean;
};

type MediaCardProps = MediaCardItem & {
  selected?: boolean;
  onSelect?: (id: string) => void;
  onAuthorSelect?: (id: string) => void;
};

function Avatar({ avatar, name }: { avatar: string; name: string }) {
  return (
    <view className="Avatar">
      <image className="AvatarImage" src={avatar} mode="aspectFill" />
    </view>
  );
}

function MediaCover({ item }: { item: MediaCardItem }) {
  return (
    <view className="Cover" style={{ width: item.cover.width, height: item.cover.height }}>
      <image className="CoverImage" src={item.cover.imageUrl} mode="aspectFill" />
      <view className="CoverGradient" />
      {item.isPhotoMode && <text className="PhotoBadge">▧</text>}
    </view>
  );
}

export function MediaCard({ selected, onSelect, onAuthorSelect, ...item }: MediaCardProps) {
  return (
    <view className={selected ? "MediaCard MediaCardSelected" : "MediaCard"} bindtap={() => onSelect?.(item.id)}>
      <view className="MediaCoverSlot">
        <MediaCover item={item} />
      </view>
      <view className="MediaBody">
        <view>
          <text className="MediaTitle" text-maxline="2" style={{ textOverflow: "ellipsis" }}>
            {item.title}
          </text>
          <text className="MediaSubtitle" text-maxline="2" style={{ textOverflow: "ellipsis" }}>
            {item.subtitle}
          </text>
        </view>
        <view>
          {item.timeInfo && <text className="MediaTime">{item.timeInfo}</text>}
          {item.author && (
            <view className="AuthorRow" catchtap={() => onAuthorSelect?.(item.id)}>
              <Avatar avatar={item.author.avatar} name={item.author.name} />
              <text className="AuthorName" text-maxline="1" style={{ textOverflow: "ellipsis" }}>
                {item.author.name}
              </text>
            </view>
          )}
        </view>
      </view>
    </view>
  );
}
