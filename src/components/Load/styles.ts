import styled from "styled-components/native";

export const Container = styled.View`
  min-width: 32%;
  height: 92px;
  padding: 16px;
  margin-bottom: 8px;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.background_primary};
`;

export const Name = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-size: ${({theme}) => theme.fontSize.thirteen}px;
  font-family: ${({theme}) => theme.fonts.primary_500};
`;
