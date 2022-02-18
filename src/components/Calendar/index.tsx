import React from "react";
import {
  Calendar as CustomCalendar,
  LocaleConfig,
} from 'react-native-calendars';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

LocaleConfig.locales['pt-br'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ],
  monthNamesShort: [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez'
  ],
  dayNames: [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ],
  dayNamesShort: [
    'DOM',
    'SEG',
    'TER',
    'QUA',
    'QUI',
    'SEX',
    'SÁB',
  ],
  today: 'Hoje',
}

LocaleConfig.defaultLocale = 'pt-br';

export function Calendar() {
  const { colors, fonts } = useTheme();

  return (
    <CustomCalendar
      renderArrow={( direction ) =>
        <Feather
          size={24}
          color={colors.text}
          name={direction === 'left' ? 'chevron-left' : 'chevron-right'} />}   
      headerStyle={{
        marginBottom: 5,
        paddingBottom: 5,
        borderBottomWidth: 0.5,
        borderBottomColor: colors.text_detail,
        backgroundColor: colors.background_secondary,
      }}
      theme={{
        textDayFontSize: 12,
        textDayStyle: {
          marginVertical: -10,
        },
        textMonthFontSize: 20,
        textDayHeaderFontSize: 10,
        textDayFontFamily: fonts.primary_400,
        textDayHeaderFontFamily: fonts.primary_500,
        monthTextColor: colors.title,
        textMonthFontFamily: fonts.secondary_600,
        arrowStyle: {
          marginHorizontal: -15,
        }
      }}
      firstDay={1}
      minDate={String(new Date())}
    />
  );
}