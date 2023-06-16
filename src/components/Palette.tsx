import { useState } from "react";
import RgbConvertService from "../services/rgbConvertService";

export default function Palette() {
  const [palette, setPalette] = useState(["black", "red", "green", "yellow"]);

  const [color, setColor] = useState("blue");

  const getRgb = () => Math.floor(Math.random() * 256);

  const handleGenerate = () => {
    const color = {
      r: getRgb(),
      g: getRgb(),
      b: getRgb(),
    };

    setColor(RgbConvertService(color.r, color.g, color.b));
  };

  function HandleIncrease() {
    handleGenerate();
    console.log(color);
    setPalette((palette) => [...palette, color]);
  }
  function HandleDecrease() {
    setPalette((palette) => palette.slice(0, -1));
  }
  return (
    <>
      <div className="ncp-row">
        <div className="ncp-palette-wrap">
          {palette.map((palette) => {
            return (
              <div
                key={palette}
                className="ncp-palette"
                style={{
                  backgroundColor: palette,
                }}
              ></div>
            );
          })}
        </div>
        <div className="ncp-update-palette">
          <div className="ncp-increase" onClick={HandleIncrease}>
            +
          </div>
          <div className="ncp-decrease" onClick={HandleDecrease}>
            -
          </div>
        </div>
      </div>
    </>
  );
}
