import React from "react";
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButtonProps } from "react-native-gesture-handler";

import { CarDTO } from "../../dtos/CarDTO";

import { getAccessoryIcon } from "../../utils/getAccessoryIcon";

import Energy from '../../assets/energy.svg';

import * as S from './styles';

interface CardCarProps extends RectButtonProps {
  data: Pick<CarDTO, 'brand' | 'name' | 'rent' | 'thumbnail' | 'fuel_type'>;
}

export function CardCar({ data, ...rest }: CardCarProps) {
  const MotorIcon = getAccessoryIcon(data.fuel_type);

  return (
    <S.Container {...rest}>
      <S.Details>
        <S.Title>{data.brand}</S.Title>
        <S.Description>{data.name}</S.Description>

        <S.About>
          <S.Rent>
            <S.Title>{data.rent.period}</S.Title>
            <S.Price>{`R$ ${data.rent.price}`}</S.Price>
          </S.Rent>
          <S.Type>
            <MotorIcon width={RFValue(20)} height={RFValue(20)} />
          </S.Type>
        </S.About>
      </S.Details>

      <S.CarImage source={{ uri: data.thumbnail }} resizeMode='contain' />
    </S.Container>
  );
}