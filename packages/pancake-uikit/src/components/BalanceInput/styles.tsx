import styled from "styled-components";
import Box from "../Box/Box";
import Input from "../Input/Input";
import Text from "../Text/Text";
import IconButton from "../Button/IconButton";
import { BalanceInputProps } from "./types";

export const SwitchUnitsButton = styled(IconButton)`
  width: 16px;
`;

export const UnitContainer = styled(Text)`
  margin-left: 4px;
  text-align: right;
  color: ${({ theme }) => theme.colors.contrast};
  white-space: nowrap;
`;

export const StyledBalanceInput = styled(Box)<{ isWarning: BalanceInputProps["isWarning"] }>`
  height: 88px;
  background-color: ${({ theme }) => theme.colors.backgroundAlt1};
  /* border: 1px solid ${({ theme }) => theme.colors.inputSecondary}; */
  border-radius: 10px;
  box-shadow: ${({ theme, isWarning }) => theme.shadows[isWarning ? "warning" : "inset"]};
  padding: 8px 16px;
`;

export const StyledInput = styled(Input)<{ textAlign?: string }>`
  background: transparent;
  border-radius: 0;
  box-shadow: none;
  padding-left: 0;
  padding-right: 0;
  font-size: 18px;
  text-align: ${({ textAlign = "right" }) => textAlign};
  border: none;
  color: ${({ theme }) => theme.colors.contrast};

  ::placeholder {
    color: ${({ theme }) => theme.colors.contrast};
  }

  &:focus:not(:disabled) {
    box-shadow: none;
  }
`;
