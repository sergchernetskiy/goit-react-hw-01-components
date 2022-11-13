import styled from '@emotion/styled';

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: ${p => p.theme.space[5]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  cursor: pointer;
`;

export const Avatar = styled.img`
  margin-bottom: ${p => p.theme.space[5]}px;
`;

export const Name = styled.p`
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.heading};
  color: ${p => p.theme.colors.text};
  margin-bottom: ${p => p.theme.space[3]}px;
  margin-top: ${p => p.theme.space[0]}px;
`;

export const Tag = styled.p`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.body};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.muted};
  margin-bottom: ${p => p.theme.space[3]}px;
  margin-top: ${p => p.theme.space[0]}px;
`;

export const Location = styled.p`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.body};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.muted};
  margin-top: ${p => p.theme.space[0]}px;
  margin-bottom: ${p => p.theme.space[0]}px;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-top: ${p => p.theme.borders.normal};
  border-top-color: ${p => p.theme.colors.muted};
  background: ${p => p.theme.colors.secondary};
  padding: ${p => p.theme.space[0]}px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 130px;
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  &:not(:last-child) {
    border-right: ${p => p.theme.borders.normal};
    border-right-color: ${p => p.theme.colors.muted};
  }
`;

export const Label = styled.span`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.body};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.muted};
`;

export const Quantity = styled.span`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.primaryText};
`;
