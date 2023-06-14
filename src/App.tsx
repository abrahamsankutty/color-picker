import "./App.scss";
import RangePicker from "./components/Range-picker";
import Palette from "./components/Palette";
import image from "./assets/image.png";
function App() {
  return (
    <>
      <h1 className="ncp-head">Color picker</h1>
      <div className="ncp-sub-head">
        Extract beautiful pallets from your photos
      </div>
      <div className="ncp-body-wrap ncp-row">
        <div className="ncp-left-col">
          <p className="ncp-label">Picked pallets</p>
          <RangePicker></RangePicker>
          <p className="ncp-label ncp-mt-20">Palette</p>
          <Palette></Palette>
          <button className="ncp-browse-btn ncp-mt-auto">
            <span>Browse image</span>
            <img src={image} alt="img" />
          </button>
          <button className="ncp-export-btn ncp-mt-20">Export palette</button>
        </div>
        <div className="ncp-right-col"></div>
      </div>
    </>
  );
}

export default App;
