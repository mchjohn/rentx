import styled from 'styled-components/native';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import { About } from '../../components/CardCar/styles';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Header = styled.View`
  margin-left: 24px;
  position: absolute;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: ${getStatusBarHeight() + 18}px;
`;

export const CarImages = styled.View`
  margin-top: ${getStatusBarHeight() + 32}px;
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 24,
    alignItems: 'center',
  },
  showsVerticalScrollIndicator: false
})`
  margin-top: ${getStatusBarHeight() + 32}px;
`;

export const Details = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 38px;
`;

export const Description = styled.View``;

export const Brand = styled.Text`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text_detail};
  font-size: ${({ theme }) => theme.fontSize.tem}px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
`;

export const Name = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${({ theme }) => theme.fontSize.twenty_five}px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
`;

export const Rent = styled.View`
`;

export const Period = styled.Text`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text_detail};
  font-size: ${({ theme }) => theme.fontSize.tem}px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
`;

export const Price = styled.Text`
  color: ${({ theme }) => theme.colors.main};
  font-size: ${({ theme }) => theme.fontSize.twenty_five}px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
`;

export const Accessories = styled.View`
  width: 100%;
  flex-wrap: wrap;
  margin-top: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const RentalPeriod = styled.View`
  width: 100%;
  margin-top: 40px;
  flex-direction: row;
  align-items: center;
  padding-bottom: 16px;
  border-bottom-width: 1px;
  justify-content: space-between;
  border-bottom-color: ${({ theme }) => theme.colors.line};
`;

export const CalendarIcon = styled.View`
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.main};
`;

export const DateInfo = styled.View``;

export const DateTitle = styled.Text`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text_detail};
  font-size: ${({ theme }) => theme.fontSize.tem}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;

export const DateValue = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${({ theme }) => theme.fontSize.fifteen}px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
`;

export const RentalPrice = styled.View`
  width: 100%;
  margin-top: 16px;
`;

export const RentalPriceLabel = styled.Text`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text_detail};
  font-size: ${({ theme }) => theme.fontSize.tem}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;

export const RentalPriceDetails = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const RentalPriceQuota = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${({ theme }) => theme.fontSize.fifteen}px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
`;

export const RentalPriceTotal = styled.Text`
  color: ${({ theme }) => theme.colors.success};
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${({ theme }) => theme.fontSize.twenty_five}px;
`;

export const Footer = styled.View`
  width: 100%;
  padding: 24px 24px ${getBottomSpace() + 24}px;
  background-color: ${({ theme }) => theme.colors.background_secondary};
`;
