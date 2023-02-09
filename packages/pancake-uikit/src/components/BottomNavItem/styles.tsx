import styled from "styled-components";
import { Text } from "../Text";

export const StyledBottomNavItem = styled.button`
  display: block;
  border: 0;
  background: transparent;
  cursor: pointer;
  height: 44px;
  padding: 4px 12px;
  border-right: 1px solid #F1F6F9;
`;

export const StyledBottomNavText = styled(Text)`
  display: -webkit-box;
  overflow: hidden;
  user-select: none;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
`;

export const PrimaryBottomNavText = styled(StyledBottomNavText)`
    border 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 4px;
    padding: 4px 16px;
  `
