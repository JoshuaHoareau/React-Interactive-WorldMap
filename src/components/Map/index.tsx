import { Button, Icon } from 'semantic-ui-react';
import cn from 'classnames';
import SvgWorld from '../SvgWorld';
import './styles.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

// interface MapProps {}
function Map() {
  const dispatch = useAppDispatch();

  return (
    <div className="world-map">
      <div className="zoom">
        <Button
          icon
          size="small"
          compact
          onClick={() => console.log('test')}
        >
          <Icon flipped="horizontally" name="repeat" />
        </Button>
        <Button icon="zoom-out" primary compact circular />
        <Button icon="zoom-in" primary compact circular />
      </div>
      <SvgWorld />
    </div>
  );
}

export default Map;
