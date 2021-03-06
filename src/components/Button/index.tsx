import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import * as S from './styles';

interface ButtonProps extends RectButtonProps {
  title: string;
  color?: string;
}

export function Button({ title, color, ...rest }: ButtonProps) {
  return (
    <S.Container color={color} {...rest}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};
