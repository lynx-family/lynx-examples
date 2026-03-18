import { useCallback, useEffect, useMemo, useState } from "@lynx-js/react";

export function App() {
  const [names, setNames] = useState([
    "Emil, Hans",
    "Mustermann, Max",
    "Tisch, Roman",
  ]);
  const [selected, setSelected] = useState(-1);
  const [prefix, setPrefix] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");

  const filteredNames = useMemo(
    () =>
      names
        .map((name, index) => ({ name, index }))
        .filter(({ name }) => name.toLowerCase().startsWith(prefix.toLowerCase())),
    [names, prefix],
  );

  useEffect(() => {
    if (selected >= 0 && selected < names.length) {
      const parts = names[selected].split(", ");
      setLast(parts[0] || "");
      setFirst(parts[1] || "");
    }
  }, [selected, names]);

  const create = useCallback(() => {
    if (first.trim() && last.trim()) {
      const fullName = `${last}, ${first}`;
      if (!names.includes(fullName)) {
        setNames([...names, fullName]);
        setFirst("");
        setLast("");
      }
    }
  }, [first, last, names]);

  const update = useCallback(() => {
    if (selected >= 0 && first.trim() && last.trim()) {
      setNames(
        names.map((n, i) => (i === selected ? `${last}, ${first}` : n)),
      );
    }
  }, [selected, first, last, names]);

  const del = useCallback(() => {
    if (selected >= 0) {
      setNames(names.filter((_, i) => i !== selected));
      setSelected(-1);
      setFirst("");
      setLast("");
    }
  }, [selected, names]);

  return (
    <view style={{ padding: "20px", gap: "12px" }}>
      {/* Filter */}
      <view style={{ gap: "4px" }}>
        <text style={{ fontSize: "12px", color: "#666" }}>Filter prefix:</text>
        <input
          type="text"
          value={prefix}
          placeholder="Filter prefix"
          style={{
            height: "36px",
            borderWidth: "1px",
            borderColor: "#ccc",
            borderRadius: "4px",
            padding: "0 8px",
            fontSize: "16px",
          }}
          bindinput={(e: any) => setPrefix(e.detail.value)}
        />
      </view>

      {/* Name list */}
      <view
        style={{
          borderWidth: "1px",
          borderColor: "#ccc",
          borderRadius: "4px",
          minHeight: "120px",
        }}
      >
        {filteredNames.map((item) => (
          <view
            key={item.index}
            style={{
              padding: "8px 12px",
              backgroundColor: selected === item.index ? "#0077ff" : "transparent",
            }}
            bindtap={() => setSelected(item.index)}
          >
            <text
              style={{
                fontSize: "16px",
                color: selected === item.index ? "#fff" : "#222",
              }}
            >
              {item.name}
            </text>
          </view>
        ))}
      </view>

      {/* Name / Surname inputs */}
      <view style={{ gap: "8px" }}>
        <view
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <text style={{ fontSize: "14px", width: "80px" }}>Name:</text>
          <input
            type="text"
            value={first}
            style={{
              flex: 1,
              height: "36px",
              borderWidth: "1px",
              borderColor: "#ccc",
              borderRadius: "4px",
              padding: "0 8px",
              fontSize: "16px",
            }}
            bindinput={(e: any) => setFirst(e.detail.value)}
          />
        </view>
        <view
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <text style={{ fontSize: "14px", width: "80px" }}>Surname:</text>
          <input
            type="text"
            value={last}
            style={{
              flex: 1,
              height: "36px",
              borderWidth: "1px",
              borderColor: "#ccc",
              borderRadius: "4px",
              padding: "0 8px",
              fontSize: "16px",
            }}
            bindinput={(e: any) => setLast(e.detail.value)}
          />
        </view>
      </view>

      {/* Action buttons */}
      <view style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
        <view
          style={{
            padding: "8px 16px",
            backgroundColor: "#0077ff",
            borderRadius: "6px",
          }}
          bindtap={create}
        >
          <text style={{ color: "#fff", fontSize: "14px" }}>Create</text>
        </view>
        <view
          style={{
            padding: "8px 16px",
            backgroundColor: selected >= 0 ? "#0077ff" : "#ccc",
            borderRadius: "6px",
          }}
          bindtap={update}
        >
          <text style={{ color: "#fff", fontSize: "14px" }}>Update</text>
        </view>
        <view
          style={{
            padding: "8px 16px",
            backgroundColor: selected >= 0 ? "#ff4444" : "#ccc",
            borderRadius: "6px",
          }}
          bindtap={del}
        >
          <text style={{ color: "#fff", fontSize: "14px" }}>Delete</text>
        </view>
      </view>
    </view>
  );
}
