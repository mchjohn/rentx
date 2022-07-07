import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';

import api from '../../services/api';
import { CarDTO } from '../../dtos/CarDTO';

import Logo from '../../assets/logo.svg';

import { Load, CardCar } from '../../components';

import * as S from './styles';

export function Home() {
  const { navigate } = useNavigation();
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);

  function handleCarDetails(car: CarDTO) {
    navigate('CarDetails', { car });
  }

  useEffect(() => {
    async function getCars() {
      try {
        const cars: CarDTO[] = (await api.get('/cars')).data;
        setCars(cars);
      } catch (error) {
        console.log(error);
      }
      finally {
        setLoading(false);
      }
    }

    getCars();
  }, []);

  return (
    <S.Container>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />

      <S.Header>
        <S.HeaderContent>
          <Logo
            width={RFValue(108)}
            height={RFValue(12)}
          />

          <S.Title>Total de carros 12</S.Title>
        </S.HeaderContent>
      </S.Header>

      {loading ? (
        <Load />
      ) : (
        <S.CarList
          data={cars}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <CardCar data={item} onPress={() => handleCarDetails(item)} />}
        />
      )}
    </S.Container>
  );
}
