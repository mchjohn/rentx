import React from "react";

import * as S from './styles';

interface CarData {
  brand: string;
  name: string;
  rent: {
    period: string;
    price: number;
  };
  thumbnail: string;
}

interface ImageSliderProps {
  imagesUrl: string[];
}

export function ImageSlider({ imagesUrl }: ImageSliderProps) {
  return (
    <S.Container>
      <S.ImageIndexes>
        <S.ImageIndex active />
        <S.ImageIndex active={false} />
        <S.ImageIndex active={false} />
        <S.ImageIndex active={false} />
      </S.ImageIndexes>

      <S.CarImageWrapper>
        <S.CarImage source={{ uri: imagesUrl[0] }} resizeMode='contain' />
      </S.CarImageWrapper>

    </S.Container>
  );
}