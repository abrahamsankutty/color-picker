import { useState } from "react";

export default function RangePicker() {
  const [value, onChange] = useState("1");

  return (
    <>
      <div className="ncp-row">
        <input
          className="ncp-range-slider"
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={({ target: { value: radius } }) => {
            onChange(radius);
          }}
        />
        <div className="ncp-range-bubble">{value}</div>
      </div>
    </>
  );
}
