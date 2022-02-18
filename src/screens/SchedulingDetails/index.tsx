import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';

import { Accessory, BackButton, Button, ImageSlider } from '../../components';

import * as S from './styles';

import speedSvg from '../../assets/speed.svg';
import forceSvg from '../../assets/force.svg';
import peopleSvg from '../../assets/people.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import accelerationSvg from '../../assets/acceleration.svg';

export function SchedulingDetails() {
  const { navigate } = useNavigation();
  const { colors } = useTheme();

  function handleConfirmRental() {
    navigate('SchedulingComplete');
  }

  return (
    <S.Container>
      <S.Header>
        <BackButton onPress={() => {}} />
      </S.Header>

      <S.CarImages>
        <ImageSlider
          imagesUrl={['https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png']}
        />
      </S.CarImages>

      <S.Content>
        <S.Details>
          <S.Description>
            <S.Brand>Lamborghine</S.Brand>
            <S.Name>Huracan</S.Name>
          </S.Description>

          <S.Rent>
            <S.Period>ao dia</S.Period>
            <S.Price>R$ 580</S.Price>
          </S.Rent>
        </S.Details>

        <S.Accessories>
          <Accessory name='380Km/h' icon={speedSvg} />
          <Accessory name='3.2s' icon={accelerationSvg} />
          <Accessory name='800 HP' icon={forceSvg} />
          <Accessory name='Gasolina' icon={gasolineSvg} />
          <Accessory name='Auto' icon={exchangeSvg} />
          <Accessory name='2 pessoas' icon={peopleSvg} />
        </S.Accessories>

        <S.RentalPeriod>
          <S.CalendarIcon>
            <Feather name='calendar' size={RFValue(24)} color={colors.shape} />
          </S.CalendarIcon>

          <S.DateInfo>
            <S.DateTitle>de</S.DateTitle>
            <S.DateValue>17/02/2022</S.DateValue>
          </S.DateInfo>

          <Feather name='chevron-right' size={RFValue(24)} color={colors.shape} />

          <S.DateInfo>
            <S.DateTitle>de</S.DateTitle>
            <S.DateValue>17/02/2022</S.DateValue>
          </S.DateInfo>
        </S.RentalPeriod>

        <S.RentalPrice>
          <S.RentalPriceLabel>Total</S.RentalPriceLabel>
          <S.RentalPriceDetails>
            <S.RentalPriceQuota>R$ 580 x3 diárias</S.RentalPriceQuota>
            <S.RentalPriceTotal>R$ 2.900</S.RentalPriceTotal>
          </S.RentalPriceDetails>
        </S.RentalPrice>
      </S.Content>

      <S.Footer>
        <Button
          title='Alugar agora'
          color={colors.success}
          onPress={handleConfirmRental}
        />
      </S.Footer>
    </S.Container>
  );
};
