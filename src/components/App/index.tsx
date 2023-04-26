import { Button } from 'semantic-ui-react';
import './styles.scss';
import 'semantic-ui-css/semantic.min.css';
import Map from '../Map';
import CardInfos from '../CardInfos';
import { useAppSelector } from '../../hooks/redux';

function App() {
  const selectedCountryCode = useAppSelector((state) => state.worldMap.selectedCountryCode);

  return (
    <div className="app">
      <h1 className="app__title">World Map</h1>
      <Map />
      {selectedCountryCode && <CardInfos />}
      <Button content="Click Here" primary />
    </div>
  );
}

export default App;
