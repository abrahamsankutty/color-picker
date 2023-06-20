import { useState } from "react";

export default function RangePicker({ palette, setPalette }: any) {
  const [lastNumber, setLastNumber] = useState(palette.length);

  function HandlePalette(radius: any) {
    if (radius.target.value > lastNumber) {
      setPalette(() => [...palette, ""]);
    } else {
      setPalette(() => palette.slice(0, -1));
    }
    setLastNumber(palette.length);
  }
  return (
    <>
      <div className="ncp-row">
        <input
          className="ncp-range-slider"
          type="range"
          min="0"
          max="100"
          value={palette.length.toString()}
          onChange={(value) => {
            HandlePalette(value);
          }}
        />
        <div className="ncp-range-bubble">{palette.length}</div>
      </div>
    </>
  );
}
