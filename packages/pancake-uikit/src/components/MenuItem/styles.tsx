import styled from "styled-components";
import { darkColors } from "../../theme/colors";
import { StyledMenuItemProps } from "./types";

export const StyledMenuItemContainer = styled.div<StyledMenuItemProps>`
  position: relative;
  border-left: 1px solid #F1F6F9;
  border-right: 1px solid #F1F6F9;

  ${({ $isActive, $variant, theme }) =>
    $isActive &&
    $variant === "subMenu" &&
    `
      &:after{
        content: "";
        position: absolute;
        bottom: 0;
        height: 4px;
        width: 100%;
        background-color: ${darkColors.tertiary};
        border-radius: 2px 2px 0 0;
      }
    `};
`;

const StyledMenuItem = styled.a<StyledMenuItemProps>`
  position: relative;
  display: flex;
  align-items: center;

  color: ${({ theme, $isActive }) => ($isActive ? "#ACF800" : theme.colors.contrast)};
  font-size: 16px;
  font-weight: ${({ $isActive }) => ($isActive ? "600" : "400")};

  ${({ $statusColor, theme }) =>
    $statusColor &&
    `
    &:after {
      content: "";
      border-radius: 100%;
      background: ${theme.colors[$statusColor]};
      height: 8px;
      width: 8px;
      margin-left: 12px;
    }
  `}

  ${({ $variant }) =>
    $variant === "default"
      ? `
    padding: 16px 16px 12px;
    height: 48px;
  `
      : `
    padding: 4px 4px 0px 4px;
    height: 42px;
  `}

  &:hover {
    background: ${({ theme }) => theme.colors.tertiary};
    ${({ $variant }) => $variant === "default" && "border-radius: 16px;"};
  }
`;

export const StyledMenuItemWithBorder = styled.a<StyledMenuItemProps>`
  position: relative;
  display: flex;
  align-items: center;
  /* border-left: 1px solid ${({ theme }) => theme.colors.contrast};
  border-right: 1px solid ${({ theme }) => theme.colors.contrast}; */

  color: ${({ theme, $isActive }) => ($isActive ? "#ACF800" : theme.colors.contrast)};
  font-size: 16px;
  font-weight: ${({ $isActive }) => ($isActive ? "600" : "400")};

  ${({ $statusColor, theme }) =>
    $statusColor &&
    `
    &:after {
      content: "";
      border-radius: 100%;
      background: ${theme.colors[$statusColor]};
      height: 8px;
      width: 8px;
      margin-left: 12px;
    }
  `}

  ${({ $variant }) =>
    $variant === "default"
      ? `
    padding: 16px 16px 12px;
    height: 20px;
  `
      : `
    padding: 4px 4px 0px 4px;
    height: 20px;
  `}


  ${({ href }) => {
    if (href === "/soon")
      return `
    cursor: not-allowed;
    `;
  }}

  ${({ $variant }) => {
    switch (true) {
      case $variant === "green" : 
      return `
         padding: 16px 16px 12px;
         height: 20px;
         color: #ACF800;
         border: 1px solid #ACF800;
         border-radius: 3px;
         text-shadow: 0px 0px 10px #ACF800;
         cursor: pointer;
         margin: 0px 29px;
         text-transform: uppercase;

         &:hover {
           color: #000;
           background: #ACF800;
         }
      `;
      case $variant === "star" : 
      return `
        padding: 16px 16px 12px;
        height: 20px;
        color: #00F0FF;
        border: 1px solid #00F0FF;
        border-radius: 3px;
        text-shadow: 0px 0px 10px #00F0FF;
        cursor: pointer;
        margin: 0px 29px;
        text-transform: uppercase;

        &:hover {
          color: #000;
          background: #00F0FF;
        }
      `;
      default:
      return ``
    }
    /* if ($variant === "green")
      return `
    padding: 0 16px;
    height: 20px;
    color: #ACF800;
    border: 1px solid #ACF800;
    border-radius: 3px;
    text-shadow: 0px 0px 10px #ACF800;
    cursor: pointer;
    margin: 0px 29px;
    `; */
  }}

  ${({ theme }) => theme.mediaQueries.mobile} {
    display: none;
  }
`;

export default StyledMenuItem;
