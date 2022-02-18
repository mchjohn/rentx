import React from 'react';
import { useTheme } from 'styled-components'

import * as S from './styles';

interface ButtonProps {
  title: string;
  color?: string;
}

export function Button({ title, color, ...rest }: ButtonProps) {
  const theme = useTheme();

  return (
    <S.Container color={color} {...rest}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};
