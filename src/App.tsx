import "./App.scss";
import RangePicker from "./components/Range-picker";
import Palette from "./components/Palette";
import browseIcon from "./assets/image.png";
import Canvas from "./components/Canvas";
import { useState } from "react";

function App() {
  const [palette, setPalette] = useState([]);
  const [image, setImage] = useState("");
  function HandleFileUpload(event: any) {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  }

  return (
    <>
      <h1 className="ncp-head">Color picker</h1>
      <div className="ncp-sub-head">
        Extract beautiful pallets from your photos
      </div>
      <div className="ncp-body-wrap ncp-row">
        <div className="ncp-left-col">
          <p className="ncp-label">Picked pallets</p>
          <RangePicker palette={palette} setPalette={setPalette}></RangePicker>
          <p className="ncp-label ncp-mt-20">Palette</p>
          <Palette palette={palette} setPalette={setPalette}></Palette>
          <label htmlFor="browse-img" className="ncp-browse-btn ncp-mt-auto">
            <span>Browse image</span>
            <input
              className="ncp-file-upload"
              id="browse-img"
              type="file"
              onChange={HandleFileUpload}
            />
            <img src={browseIcon} alt="img" />
          </label>
          <button className="ncp-export-btn ncp-mt-20">Export palette</button>
        </div>
        <div className="ncp-right-col">
          <Canvas
            path={image}
            palette={palette}
            setPalette={setPalette}
          ></Canvas>
        </div>
      </div>
    </>
  );
}

export default App;
