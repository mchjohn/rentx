import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import { CarDTO } from '../../dtos/CarDTO';

import { Accessory, BackButton, Button, ImageSlider } from '../../components';

import { getAccessoryIcon } from '../../utils/getAccessoryIcon';

import * as S from './styles';

interface Params {
  car: CarDTO;
}

export function CarDetails() {
  const { navigate, goBack } = useNavigation();
  const route = useRoute();
  const { car } = route.params as Params;

  function handleConfirmRental() {
    navigate('Scheduling');
  }

  return (
    <S.Container>
      <S.Header>
        <BackButton onPress={goBack} />
      </S.Header>

      <S.CarImages>
        <ImageSlider
          imagesUrl={car.photos}
        />
      </S.CarImages>

      <S.Content>
        <S.Details>
          <S.Description>
            <S.Brand>{car.brand}</S.Brand>
            <S.Name>{car.name}</S.Name>
          </S.Description>

          <S.Rent>
            <S.Period>{car.rent.period}</S.Period>
            <S.Price>R$ {car.rent.price}`</S.Price>
          </S.Rent>
        </S.Details>

        <S.Accessories>
          {
            car.accessories.map(accessory => (
              <Accessory
                key={accessory.type}
                name={accessory.name}
                icon={getAccessoryIcon(accessory.type)}
              />
            ))
          }
        </S.Accessories>

        <S.About>{car.about}</S.About>
      </S.Content>

      <S.Footer>
        <Button
          title='Escolher período do aluguel'
          onPress={handleConfirmRental}
        />
      </S.Footer>
    </S.Container>
  );
};
