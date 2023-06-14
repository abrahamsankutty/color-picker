import { useState } from "react";

export default function Palette() {
  const [palette, setPalette] = useState(["black", "red", "green", "yellow"]);
  setPalette;
  return (
    <>
      <div className="ncp-row">
        <div className="ncp-palette-wrap">
          {palette.map((palette) => {
            return (
              <div
                key="palette"
                className="ncp-palette"
                style={{
                  backgroundColor: palette,
                }}
              ></div>
            );
          })}
        </div>
        <div className="ncp-update-palette">
          <div className="ncp-increase">+</div>
          <div className="ncp-decrease">-</div>
        </div>
      </div>
    </>
  );
}
