// import worldMap from '../../assets/svg/world.svg';
import "./styles.scss";
// import WorldMap from './WorldMap';
// import worldMap from './WorldMap';
import SvgWorld from '../../assets/svgToComponent/World';

function Map() {
  const handleSelectCountry = (e : Event) => {
    if (e.target.id) {
      console.log(e.target.id);
    }
  };

  return (
    <div className="world-map">
      <div className="zoom">
        <span className="zoom-title">Zoom :</span>
        <button type="button" className="zoom-button" id="reset-button">
          Reset
        </button>
        <button type="button" className="zoom-button" id="zoom-out">
          -
        </button>
        <button type="button" className="zoom-button" id="zoom-in">
          +
        </button>
      </div>
      <SvgWorld clickOnMap={handleSelectCountry} />
    </div>
  );
}

export default Map;
