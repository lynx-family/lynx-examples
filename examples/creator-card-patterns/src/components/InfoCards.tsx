import { useEffect, useState } from "@lynx-js/react";

export type InfoCardItem = {
  key: string;
  type: "basic" | "action" | "image";
  title: string;
  description: string;
  icon?: string;
  imageUrl?: string;
  buttonText?: string;
  isStrongAction?: boolean;
  isDismissible?: boolean;
};

type InfoCardsProps = {
  cards: InfoCardItem[];
  onAction?: (key: string) => void;
  onShow?: (key: string) => void;
};

function LeadingVisual({ card }: { card: InfoCardItem }) {
  if (card.type === "image" && card.imageUrl) {
    return <image className="InfoImage" src={card.imageUrl} mode="aspectFill" />;
  }

  return (
    <view className="InfoIcon">
      <text className="InfoIconText">{card.icon ?? "i"}</text>
    </view>
  );
}

function ActionButton({ card, onAction }: { card: InfoCardItem; onAction?: (key: string) => void }) {
  if (!card.buttonText) {
    return null;
  }

  if (card.isStrongAction) {
    return (
      <view className="StrongButton" catchtap={() => onAction?.(card.key)}>
        <text className="StrongButtonText">{card.buttonText}</text>
      </view>
    );
  }

  return (
    <text className="LinkButton" catchtap={() => onAction?.(card.key)}>
      {card.buttonText}
    </text>
  );
}

function InfoCard({ card, onClose, onAction, onShow }: {
  card: InfoCardItem;
  onClose: (key: string) => void;
  onAction?: (key: string) => void;
  onShow?: (key: string) => void;
}) {
  const [descriptionMaxLine, setDescriptionMaxLine] = useState("2");

  useEffect(() => {
    onShow?.(card.key);
  }, [card.key, onShow]);

  const onTitleLayout = (event: { detail: { lineCount: number } }) => {
    setDescriptionMaxLine(event.detail.lineCount >= 2 ? "1" : "2");
  };

  const handleCardTap = () => {
    if (!card.isStrongAction) {
      onAction?.(card.key);
    }
  };

  return (
    <view className="InfoCard" bindtap={handleCardTap}>
      <view className="InfoMainRow">
        <LeadingVisual card={card} />
        <view className="InfoBody">
          <text
            className="InfoTitle"
            bindlayout={onTitleLayout}
            text-maxline="2"
            style={{ textOverflow: "ellipsis" }}
          >
            {card.title}
          </text>
          <text className="InfoDescription" text-maxline={descriptionMaxLine} style={{ textOverflow: "ellipsis" }}>
            {card.description}
          </text>
          <ActionButton card={card} onAction={onAction} />
        </view>
        {card.isDismissible !== false && (
          <view className="CloseButton" catchtap={() => onClose(card.key)}>
            <text className="CloseButtonText">×</text>
          </view>
        )}
      </view>
    </view>
  );
}

export function InfoCards({ cards, onAction, onShow }: InfoCardsProps) {
  const [visibleCards, setVisibleCards] = useState(cards);

  const closeCard = (key: string) => {
    setVisibleCards((current) => current.filter((card) => card.key !== key));
  };

  const resetCards = () => {
    setVisibleCards(cards);
  };

  return (
    <view>
      <view className="CardHeaderRow">
        <text className="SectionSubtitle">Dismissible list with variants</text>
        <text className="ResetText" catchtap={resetCards}>Reset</text>
      </view>
      {visibleCards.map((card) => (
        <InfoCard key={card.key} card={card} onClose={closeCard} onAction={onAction} onShow={onShow} />
      ))}
      {visibleCards.length === 0 && (
        <view className="EmptyState">
          <text className="EmptyStateText">All cards dismissed. Tap Reset to restore them.</text>
        </view>
      )}
    </view>
  );
}
