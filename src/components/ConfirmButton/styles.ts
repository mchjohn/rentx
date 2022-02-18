import styled from 'styled-components/native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

interface ConfirmButtonProps extends RectButtonProps {
  color?: string;
}

export const Container = styled(RectButton)<ConfirmButtonProps>`
  width: 80px;
  height: 56px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, color }) => color ? color : theme.colors.shape_dark};
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.shape};
  font-size: ${({theme}) => theme.fontSize.fifteen}px;
  font-family: ${({theme}) => theme.fonts.primary_500};
`;