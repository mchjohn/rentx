import styled from 'styled-components/native';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

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

export const About = styled.Text`
  margin-top: 23px;
  text-align: justify;
  line-height: ${RFValue(25)}px;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.fifteen}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
`;

export const Accessories = styled.View`
  width: 100%;
  flex-wrap: wrap;
  margin-top: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Footer = styled.View`
  width: 100%;
  padding: 24px 24px ${getBottomSpace() + 24}px;
  background-color: ${({ theme }) => theme.colors.background_secondary};
`;
