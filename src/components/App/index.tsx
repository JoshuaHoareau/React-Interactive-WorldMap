import { Button } from 'semantic-ui-react';
import './styles.scss';
import 'semantic-ui-css/semantic.min.css';
import Map from '../Map';

function App() {
  return (
    <div className="app">
      <h1 className="app__title">World Map</h1>
      <Map />

      <Button content="Click Here" primary />
    </div>
  );
}

export default App;
