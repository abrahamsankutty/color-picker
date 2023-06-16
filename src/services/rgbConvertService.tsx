export default function RgbConvertService(r: any, g: any, b: any) {
  const rgbToHex = () =>
    "#" +
    [r, g, b]
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("");
  return rgbToHex;
}
