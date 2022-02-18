import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.header};
`;

export const Content = styled.View`
  align-items: center;
  position: absolute;
  top: 45%;
  justify-content: center;
`;

export const WrapperLogo = styled.View`
  position: absolute;
  top: 5%;
`;

export const Title = styled.Text`
  margin-top: 30px;
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${({ theme }) => theme.fontSize.thirty}px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
`;

export const Message = styled.Text`
  margin-top: 15px;
  text-align: center;
  line-height: ${RFValue(25)}px;
  color: ${({ theme }) => theme.colors.text_detail};
  font-size: ${({ theme }) => theme.fontSize.fifteen}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
`;

export const Footer = styled.View`
  bottom: 5%;
  width: 100%;
  position: absolute;
  align-items: center;
`;
