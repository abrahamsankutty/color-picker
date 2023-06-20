import { useEffect, useState } from "react";
import Draggable from "react-draggable";
import RgbConvertService from "../services/rgbConvertService";

export default function ColorPicker({ palette, setPalette, index }: any) {
  const [deltaPosition, setDeltaPosition] = useState([
    Math.floor(Math.random() * 478),
    Math.floor(Math.random() * 478),
  ]);
  let rgbaValue;
  useEffect(() => {
    const canvas: any = document.getElementById("mycanvas");
    const ctx = canvas?.getContext("2d");
    rgbaValue = ctx.getImageData(
      deltaPosition[0] + 13,
      deltaPosition[1] + 13,
      1,
      1
    ).data;
    palette[index] = RgbConvertService(
      rgbaValue[0],
      rgbaValue[1],
      rgbaValue[2]
    )();
    setPalette([...palette]);
  }, []);

  const handleDrag = (e: any, ui: any) => {
    setDeltaPosition([ui.x, ui.y]);
    e;
    const canvas: any = document.getElementById("mycanvas");
    const ctx = canvas?.getContext("2d");
    rgbaValue = ctx.getImageData(ui.x + 13, ui.y + 13, 1, 1).data;
    palette[index] = RgbConvertService(
      rgbaValue[0],
      rgbaValue[1],
      rgbaValue[2]
    )();
    setPalette([...palette]);
  };
  return (
    <>
      <Draggable
        bounds="parent"
        defaultPosition={{
          x: deltaPosition[0],
          y: deltaPosition[1],
        }}
        onDrag={handleDrag}
      >
        <div
          className="ncp-color-picker"
          style={{
            backgroundColor: palette[index],
          }}
        ></div>
      </Draggable>
    </>
  );
}
