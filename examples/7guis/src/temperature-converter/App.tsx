import { useCallback, useState } from "@lynx-js/react";

export function App() {
  const [celsius, setCelsius] = useState("0");
  const [fahrenheit, setFahrenheit] = useState("32");

  const onCelsiusInput = useCallback((e: any) => {
    const val: string = e.detail.value;
    setCelsius(val);
    const num = Number(val);
    if (Number.isFinite(num)) {
      setFahrenheit(String(+(num * (9 / 5) + 32).toFixed(2)));
    }
  }, []);

  const onFahrenheitInput = useCallback((e: any) => {
    const val: string = e.detail.value;
    setFahrenheit(val);
    const num = Number(val);
    if (Number.isFinite(num)) {
      setCelsius(String(+((num - 32) * (5 / 9)).toFixed(2)));
    }
  }, []);

  return (
    <view
      style={{
        display: "flex",
        padding: "20px",
        flexDirection: "row",
        alignItems: "center",
        gap: "8px",
        flexWrap: "wrap",
      }}
    >
      <input
        type="text"
        value={celsius}
        style={{
          width: "100px",
          height: "36px",
          borderWidth: "1px",
          borderColor: "#ccc",
          borderRadius: "4px",
          padding: "0 8px",
          fontSize: "16px",
        }}
        bindinput={onCelsiusInput}
      />
      <text style={{ fontSize: "16px" }}>Celsius =</text>
      <input
        type="text"
        value={fahrenheit}
        style={{
          width: "100px",
          height: "36px",
          borderWidth: "1px",
          borderColor: "#ccc",
          borderRadius: "4px",
          padding: "0 8px",
          fontSize: "16px",
        }}
        bindinput={onFahrenheitInput}
      />
      <text style={{ fontSize: "16px" }}>Fahrenheit</text>
    </view>
  );
}
