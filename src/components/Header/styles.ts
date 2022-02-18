import styled from "styled-components/native";

export const Container = styled.View`
  height: 120px;

  background-color: ${({theme}) => theme.colors.shape_dark};
`;

export const Text = styled.Text`
  text-transform: uppercase;
  color: ${({theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fonts.secondary_500};
`;

export const TextDate = styled.Text`
  text-transform: uppercase;
  color: ${({theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fonts.secondary_500};
`;
