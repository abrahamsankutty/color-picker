import { useEffect } from "react";

export default function Canvas(data: any) {
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
      <canvas
        id="mycanvas"
        className="ncp-mycanvas"
        width={500}
        height={500}
      ></canvas>
    </>
  );
}
