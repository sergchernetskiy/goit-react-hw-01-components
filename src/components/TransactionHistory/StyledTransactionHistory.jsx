import styled from '@emotion/styled';

export const Table = styled.table`
  margin-right: auto;
  margin-left: auto;
  border-spacing: ${p => p.theme.space[0]}px;
  box-shadow: ${p => p.theme.shadows.active};
  margin-top: ${p => p.theme.space[7]}px;
`;

export const HeadCell = styled.th`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.heading};
  line-height: ${p => p.theme.lineHeights.heading};
  color: ${p => p.theme.colors.pink};
  text-transform: uppercase;
  text-align: center;
  background-color: ${p => p.theme.colors.violet};
  padding: 10px;
  height: 20px;
`;

export const BodyRow = styled.tr`
  :nth-of-type(even) {
    background-color: ${p => p.theme.colors.violet};
  }
  :nth-of-type(odd) {
    background-color: ${p => p.theme.colors.background};
  }
`;

export const BodyCell = styled.td`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.body};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.white};
  :first-of-type {
    text-transform: capitalize;
  }
  min-width: 130px;
  text-align: center;
  padding: 10px;
  height: 20px;
`;
