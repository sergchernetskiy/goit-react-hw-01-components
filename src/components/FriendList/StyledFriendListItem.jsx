import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${p => p.theme.space[4]}px;
  margin-left: auto;
  margin-right: auto;
  padding-top: ${p => p.theme.space[5]}px;
  padding-bottom: ${p => p.theme.space[5]}px;
  width: 400px;
  background: ${p => p.theme.colors.gradient};
  border-radius: ${p => p.theme.radii.normal};
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  width: calc(100% - 40px);
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: ${p => p.theme.shadows.regular};
  cursor: pointer;

  :hover,
  :focus {
    box-shadow: ${p => p.theme.shadows.active};
    background-color: ${p => p.theme.colors.secondary};
    color: ${p => p.theme.colors.accent};
  }
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: ${p => p.theme.radii.round};
  background-color: ${p =>
    p.isOnline ? p.theme.colors.green : p.theme.colors.red};
  margin-right: ${p => p.theme.space[4]}px;
`;

export const NameFriend = styled.p`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.text};
`;

export const Avatar = styled.img`
  margin-right: ${p => p.theme.space[4]}px;
`;
