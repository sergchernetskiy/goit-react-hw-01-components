import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  padding: ${p => p.theme.space[0]}px;
`;

function getRandomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}

function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, '0');
}

export const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: calc(400px / 5);
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  background-color: ${getRandomColor};
`;

export const Title = styled.h2`
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.heading};
  line-height: ${p => p.theme.lineHeights.heading};
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.normal};
  color: ${p => p.theme.colors.purple};
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  margin-bottom: ${p => p.theme.space[0]}px;
  margin-top: ${p => p.theme.space[0]}px;
  text-transform: uppercase;
  width: 100%;
  text-align: center;
`;

export const Label = styled.span`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.body};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.white};
`;

export const Percentage = styled.span`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.white};
`;
