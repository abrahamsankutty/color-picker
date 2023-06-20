export default function Palette({ palette, setPalette }: any) {
  function HandleIncrease() {
    setPalette(() => [...palette, ""]);
  }
  function HandleDecrease() {
    setPalette(() => palette.slice(0, -1));
  }
  return (
    <>
      <div className="ncp-row">
        <div className="ncp-palette-wrap">
          {palette.map((palette: any, index: any) => {
            return (
              <div
                key={index + palette}
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
