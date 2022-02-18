import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import * as S from './styles';

interface ConfirmButtonProps extends RectButtonProps {
  title: string;
  color?: string;
}

export function ConfirmButton({ title, color, ...rest }: ConfirmButtonProps) {
  return (
    <S.Container color={color} {...rest}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};
