import type { InfoCardItem } from "./components/InfoCards.jsx";
import type { MediaCardItem } from "./components/MediaCard.jsx";

export const longHeadline =
  "Plan a compact dashboard card that keeps the most useful insight visible even when the title becomes unusually long.";

export const mediaCards: MediaCardItem[] = [
  {
    id: "clip-01",
    title: "Weekend sketchbook: mural details and tiny process notes",
    subtitle: "23.5k views in the last 7 days",
    cover: {
      width: "82px",
      height: "110px",
      imageUrl: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?w=240&h=320&fit=crop",
    },
    timeInfo: "1 hour ago",
    author: {
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop",
      name: "Studio Notes",
    },
    isPhotoMode: true,
  },
  {
    id: "clip-02",
    title: "Metro note",
    subtitle: "A shorter card keeps the bottom metadata aligned.",
    cover: {
      width: "82px",
      height: "110px",
      imageUrl: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=240&h=320&fit=crop",
    },
    timeInfo: "Posted on Sep 3",
  },
];

export const infoCards: InfoCardItem[] = [
  {
    key: "basic",
    type: "basic",
    title: "Your weekly summary is ready",
    description: "A lightweight card can be dismissed without affecting the rest of the list.",
    icon: "✓",
    isDismissible: true,
  },
  {
    key: "action",
    type: "action",
    title: "Try a new posting schedule",
    description: "Action cards keep their tap target available even when the title occupies two lines.",
    icon: "↗",
    buttonText: "Apply",
    isStrongAction: true,
    isDismissible: true,
  },
  {
    key: "image",
    type: "image",
    title: "Cover refresh recommendation",
    description: "Image cards reserve leading media space and preserve the same close behavior.",
    imageUrl: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=160&h=160&fit=crop",
    buttonText: "Preview",
    isDismissible: false,
  },
];
