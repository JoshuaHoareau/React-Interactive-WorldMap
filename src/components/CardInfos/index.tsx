import { Card } from 'semantic-ui-react';
import { useAppSelector } from '../../hooks/redux';

function CardInfos() {
  // TODO : display card infos
  const country = useAppSelector((state) => state.worldMap.countryInfos?.[0]);
  // console.log(selectedCountryCode);
  return (
    <div>
      <Card>
        <Card.Content>
          <Card.Header>
            {country?.flag}
            {' '}
            -
            {' '}
            {country?.name.common}
          </Card.Header>
          <Card.Meta>{ }</Card.Meta>
        </Card.Content>
      </Card>
    </div>
  );
}

export default CardInfos;
