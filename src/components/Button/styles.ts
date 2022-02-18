import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import theme from '../../global/styles/theme';

interface ButtonProps extends RectButtonProps {
  color?: string;
}

export const Container = styled(RectButton)<ButtonProps>`
  width: 100%;
  padding: 19px;
  align-items: center;
  justify-content: center;


  background-color: ${({ theme, color }) => color ? color : theme.colors.main};
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.shape};
  font-size: ${({theme}) => theme.fontSize.fifteen}px;
  font-family: ${({theme}) => theme.fonts.primary_500};
`;