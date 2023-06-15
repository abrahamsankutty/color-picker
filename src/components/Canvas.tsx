import { useEffect } from "react";
import Draggable from "react-draggable";
export default function Canvas(data: any) {
  const dragHandlers = {};
  useEffect(() => {
    const canvas: any = document.getElementById("mycanvas");
    const ctx = canvas.getContext("2d");
    const image = new Image();
    image.src = data.path || "https://picsum.photos/200";

    image.onload = () => {
      ctx.drawImage(image, 0, 0, 500, 500);
    };
  }, [data]);
  return (
    <>
      <div
        style={{
          height: "500px",
          width: "100%",
          position: "relative",
        }}
      >
        <Draggable bounds="parent" {...dragHandlers}>
          <div
            className="ncp-color-picker"
            style={{
              top: "0px",
              left: "0px",
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
