import React from 'react';

import { Accessory, BackButton, Button, ImageSlider } from '../../components';

import * as S from './styles';

import speedSvg from '../../assets/speed.svg';
import forceSvg from '../../assets/force.svg';
import peopleSvg from '../../assets/people.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import accelerationSvg from '../../assets/acceleration.svg';

export function CarDetails() {
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

        <S.About>
          Este é um automóvel desportivo. Surgiu do lendário
          touro de lide indultado na praça Real Maestranza de Sevilha.
          É um belíssimo carro para quem gosta de acelerar.
        </S.About>
      </S.Content>

      <S.Footer>
        <Button
          title='Confirmar'
        />
      </S.Footer>
    </S.Container>
  );
};