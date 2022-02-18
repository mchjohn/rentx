import React from 'react';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

import { BackButton, Button, Calendar } from '../../components';

import ArrowSvg from '../../assets/arrow.svg';

import * as S from './styles';
import { StatusBar } from 'react-native';

export function Scheduling() {
  const { navigate } = useNavigation();

  const theme = useTheme();

  function handleConfirmRental() {
    navigate('SchedulingDetails');
  }

  return (
    <S.Container>
      <StatusBar
        translucent
        barStyle='light-content'
        backgroundColor='transparent'
      />
      <S.Header>
        <BackButton color={theme.colors.shape} onPress={() => {}} />

        <S.Title>Escolha uma{'\n'}data de início e{'\n'}fim do aluguel</S.Title>

        <S.RentalPeriod>
          <S.DateInfo>
            <S.DateTitle>de</S.DateTitle>
            <S.DateValue selected={false}>13/02/2022</S.DateValue>
          </S.DateInfo>

          <ArrowSvg />

          <S.DateInfo>
            <S.DateTitle>até</S.DateTitle>
            <S.DateValue selected={false}>13/02/2022</S.DateValue>
          </S.DateInfo>
        </S.RentalPeriod>
      </S.Header>

      <S.Content>
        <Calendar />
      </S.Content>

      <S.Footer>
        <Button title='Confirmar' onPress={handleConfirmRental} />
      </S.Footer>
    </S.Container>
  );
}
