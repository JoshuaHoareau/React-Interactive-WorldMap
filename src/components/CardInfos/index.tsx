import { Card } from 'semantic-ui-react';
import { useAppSelector } from '../../hooks/redux';

function CardInfos() {
  // TODO : display card infos
  // const {
  //   name, cca3, flag, capital, region, population, currencies,
  // } = useAppSelector((state) => state?.worldMap.countryInfos[0]);
  // console.log(selectedCountryCode);
  return (
    <div>
      <Card>
        <Card.Content>
          <Card.Header>
            {/* {flag} */}
            {' '}
            -
            {' '}
            {/* {name.common} */}
          </Card.Header>
        </Card.Content>
      </Card>
    </div>
  );
}

export default CardInfos;
