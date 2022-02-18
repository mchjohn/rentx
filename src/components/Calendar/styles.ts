import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 126px;
  padding: 24px;
  margin-bottom: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({theme}) => theme.colors.background_primary};
`;

export const Title = styled.Text`
  text-transform: uppercase;
  color: ${({theme}) => theme.colors.text_detail};
  font-size: ${({theme}) => theme.fontSize.tem}px;
  font-family: ${({theme}) => theme.fonts.secondary_500};
`;

export const Description = styled.Text`
  color: ${({theme}) => theme.colors.title};
  font-size: ${({theme}) => theme.fontSize.fifteen}px;
  font-family: ${({theme}) => theme.fonts.secondary_500};
`;
