import React from "react";

import Energy from '../../assets/energy.svg';

import * as S from './styles';
import { RFValue } from 'react-native-responsive-fontsize';

interface CarData {
  brand: string;
  name: string;
  rent: {
    period: string;
    price: number;
  };
  thumbnail: string;
}

interface CardCarProps {
  data: CarData;
}

export function CardCar({ data }: CardCarProps) {
  return (
    <S.Container>
      <S.Details>
        <S.Title>{data.brand}</S.Title>
        <S.Description>{data.name}</S.Description>

        <S.About>
          <S.Rent>
            <S.Title>{data.rent.period}</S.Title>
            <S.Price>{`R$ ${data.rent.price}`}</S.Price>
          </S.Rent>
          <S.Type>
            <Energy width={RFValue(20)} height={RFValue(20)} />
          </S.Type>
        </S.About>
      </S.Details>

      <S.CarImage source={{ uri: data.thumbnail }} resizeMode='contain' />
    </S.Container>
  );
}