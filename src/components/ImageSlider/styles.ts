import styled from "styled-components/native";
import { Dimensions } from 'react-native';

interface imageIndexProps {
  active: boolean;
}

export const Container = styled.View`
  width: 100%;
`;

export const ImageIndexes = styled.View`
  padding-right: 24px;
  flex-direction: row;
  align-self: flex-end;
`;

export const ImageIndex = styled.View<imageIndexProps>`
  width: 6px;
  height: 6px;
  margin-left: 8px;
  border-radius: 3px;
  background-color: ${({ theme, active }) =>
    active ? theme.colors.title : theme.colors.shape};
`;

export const CarImageWrapper = styled.View`
  height: 132px;
  align-items: center;
  justify-content: center;
  width: ${Dimensions.get('window').width}px;
`;

export const CarImage = styled.Image`
  width: 280px;
  height: 132px;
`;