import { useCallback, useMemo, useState } from "@lynx-js/react";

function dateToString(date: Date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function App() {
  const [isReturn, setIsReturn] = useState(false);
  const [departureDate, setDepartureDate] = useState(dateToString(new Date()));
  const [returnDate, setReturnDate] = useState(dateToString(new Date()));

  const canBook = useMemo(
    () => !isReturn || returnDate > departureDate,
    [isReturn, returnDate, departureDate],
  );

  const toggleFlightType = useCallback(() => {
    setIsReturn((v) => !v);
  }, []);

  const book = useCallback(() => {
    if (isReturn) {
      console.log(
        `Booked return flight: depart ${departureDate}, return ${returnDate}`,
      );
    } else {
      console.log(`Booked one-way flight: depart ${departureDate}`);
    }
  }, [isReturn, departureDate, returnDate]);

  return (
    <view style={{ padding: "20px", gap: "12px" }}>
      {/* Flight type toggle */}
      <view
        style={{
          padding: "8px 16px",
          backgroundColor: "#eee",
          borderRadius: "6px",
        }}
        bindtap={toggleFlightType}
      >
        <text style={{ fontSize: "16px" }}>
          {isReturn ? "Return Flight" : "One-way Flight"}
        </text>
      </view>

      {/* Departure date */}
      <view style={{ gap: "4px" }}>
        <text style={{ fontSize: "12px", color: "#666" }}>
          Departure (YYYY-MM-DD)
        </text>
        <input
          type="text"
          value={departureDate}
          style={{
            height: "36px",
            borderWidth: "1px",
            borderColor: "#ccc",
            borderRadius: "4px",
            padding: "0 8px",
            fontSize: "16px",
          }}
          bindinput={(e: any) => setDepartureDate(e.detail.value)}
        />
      </view>

      {/* Return date */}
      <view style={{ gap: "4px", opacity: isReturn ? 1 : 0.4 }}>
        <text style={{ fontSize: "12px", color: "#666" }}>
          Return (YYYY-MM-DD)
        </text>
        <input
          type="text"
          value={returnDate}
          style={{
            height: "36px",
            borderWidth: "1px",
            borderColor: isReturn ? "#ccc" : "#eee",
            borderRadius: "4px",
            padding: "0 8px",
            fontSize: "16px",
          }}
          bindinput={(e: any) => {
            if (isReturn) setReturnDate(e.detail.value);
          }}
        />
      </view>

      {/* Book button */}
      <view
        style={{
          padding: "10px 20px",
          backgroundColor: canBook ? "#0077ff" : "#ccc",
          borderRadius: "6px",
          alignSelf: "flex-start",
        }}
        bindtap={() => {
          if (canBook) book();
        }}
      >
        <text style={{ color: "#fff", fontSize: "16px" }}>Book</text>
      </view>

      {!canBook && (
        <text style={{ color: "red", fontSize: "14px" }}>
          Return date must be after departure date.
        </text>
      )}
    </view>
  );
}
