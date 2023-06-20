import ColorPicker from "./Color-picker";
export default function Canvas({ palette, setPalette, path }: any) {
  const canvas: any = document.getElementById("mycanvas");
  const ctx = canvas?.getContext("2d");
  const image = new Image();
  image.setAttribute("crossOrigin", "");
  image.src =
    path ||
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0hMOVm7P0iTv95Nr_QAui9hJeADf8pS1AGMDqktNZ&s";

  image.onload = () => {
    ctx.drawImage(image, 0, 0, 500, 500);
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
        {palette.map((value: any, index: any) => {
          return (
            <ColorPicker
              key={value + index}
              palette={palette}
              setPalette={setPalette}
              index={index}
            ></ColorPicker>
          );
        })}

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
