import React from 'react';
import { useTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar, useWindowDimensions } from 'react-native';

import { ConfirmButton } from '../../components';

import * as S from './styles';

import DoneSvg from '../../assets/done.svg';
import LogoSvg from '../../assets/logo_background_gray.svg';

export function SchedulingComplete() {
  const { colors } = useTheme();
  const { navigate } = useNavigation();
  const { width } = useWindowDimensions();

  function handleConfirm() {
    navigate('Home');
  }

  return (
    <S.Container>
      <StatusBar barStyle='light-content' translucent backgroundColor='transparent' />
      <S.WrapperLogo>
        <LogoSvg width={width} />
      </S.WrapperLogo>

      <S.Content>
        <DoneSvg width={80} height={80} />
        <S.Title>Carro Alugado</S.Title>

        <S.Message>
          Agora você só precisa ir {'\n'}
          até a concessionária da RENTX{'\n'}
          pegar o seu automóvel.
        </S.Message>
      </S.Content>

      <S.Footer>
        <ConfirmButton title='OK' onPress={handleConfirm} />
      </S.Footer>
    </S.Container>
  );
};
