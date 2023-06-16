import { useEffect, useState } from "react";
import Draggable from "react-draggable";
export default function Canvas(data: any) {
  const [deltaPosition, setDeltaPosition] = useState([0, 0]);
  const [bgColor, setBGColor] = useState([255, 255, 255, 255]);
  const dragHandlers = {};
  const canvas: any = document.getElementById("mycanvas");
  const ctx = canvas?.getContext("2d");

  useEffect(() => {
    const canvas: any = document.getElementById("mycanvas");
    const ctx = canvas?.getContext("2d");
    const image = new Image();
    image.setAttribute("crossOrigin", "");
    image.src = data.path || "https://picsum.photos/200";

    image.onload = () => {
      ctx.drawImage(image, 0, 0, 500, 500);
      setBGColor(ctx.getImageData(13, 13, 3, 3).data);
    };
  }, [data]);

  const handleDrag = (e: any, ui: any) => {
    setDeltaPosition([ui.x, ui.y]);
    e;
    deltaPosition;
    setBGColor(ctx.getImageData(ui.x + 13, ui.y + 13, 3, 3).data);
  };

  return (
    <>
      <div
        style={{
          height: "500px",
          width: "100%",
          position: "relative",
        }}
      >
        <Draggable bounds="parent" onDrag={handleDrag} {...dragHandlers}>
          <div
            className="ncp-color-picker"
            style={{
              top: "0px",
              left: "0px",
              backgroundColor: `rgb(${bgColor[0]},${bgColor[1]},${bgColor[2]})`,
            }}
          ></div>
        </Draggable>
        <canvas
          id="mycanvas"
          className="ncp-mycanvas"
          width={500}
          height={500}
        ></canvas>
      </div>
    </>
  );
}
