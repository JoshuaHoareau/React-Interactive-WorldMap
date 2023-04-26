import { useState } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import SvgWorld from '../SvgWorld';
import './styles.scss';

// interface MapProps {}
function Map() {
  const [zoom, setZoom] = useState(1);
  const scales = [1, 1.5, 2, 3, 5];

  const handleZoomOut = () => {
    if (zoom > Math.min(...scales)) {
      const indexOfCurrentScale = scales.findIndex((scale) => scale === zoom);
      const indexOfNewScale = indexOfCurrentScale - 1;
      const newScale = scales[indexOfNewScale];
      setZoom(newScale);
    }
  };

  const handleZoomIn = () => {
    if (zoom < Math.max(...scales)) {
      const indexOfCurrentScale = scales.findIndex((scale) => scale === zoom);
      const indexOfNewScale = indexOfCurrentScale + 1;
      const newScale = scales[indexOfNewScale];
      setZoom(newScale);
    }
  };

  return (
    <div className="world-map">
      <div className="zoom">
        <Button
          icon
          size="small"
          compact
          onClick={() => setZoom(1)}
        >
          <Icon flipped="horizontally" name="repeat" />
        </Button>
        <Button icon="zoom-out" primary compact circular onClick={handleZoomOut} />
        <Button icon="zoom-in" primary compact circular onClick={handleZoomIn} />
      </div>
      <SvgWorld zoomScale={zoom} />
    </div>
  );
}

export default Map;
