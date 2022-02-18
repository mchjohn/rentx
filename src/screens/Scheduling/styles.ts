import styled, { css } from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

interface DateValueProps {
  selected: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background_secondary};
`;

export const Header = styled.View`
  width: 100%;
  height: 280px;
  justify-content: center;
  padding-horizontal: 24px;
  padding-top: ${getStatusBarHeight() + 16}px;
  background-color: ${({theme}) => theme.colors.header};
`;

export const RentalPeriod = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin: 24px 0px 10px;
  justify-content: space-between;
`;

export const DateInfo = styled.View`
  width: 30%;
`;

export const Title = styled.Text`
  margin-top: 16px;
  color: ${({theme}) => theme.colors.shape};
  font-size: ${({theme}) => theme.fontSize.thirty}px;
  font-family: ${({theme}) => theme.fonts.secondary_600};
`;

export const DateTitle = styled.Text`
  text-transform: uppercase;
  color: ${({theme}) => theme.colors.text};
  font-size: ${({theme}) => theme.fontSize.tem}px;
  font-family: ${({theme}) => theme.fonts.secondary_500};
`;

export const DateValue = styled.Text<DateValueProps>`
  color: ${({theme}) => theme.colors.shape};
  font-size: ${({theme}) => theme.fontSize.fifteen}px;
  font-family: ${({theme}) => theme.fonts.primary_500};

  ${({ selected, theme }) => !selected && css`
    padding-bottom: 5px;
    border-bottom-width: 1px;
    border-bottom-color: ${theme.colors.text};
  `}
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 24,
  },
  showsVerticalScrollIndicator: false,
})``;

export const Footer = styled.View`
  padding: 24px;
`;
