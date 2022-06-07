import React, { useContext } from "react";
import { MenuContext } from "../../widgets/Menu/context";
import StyledMenuItem, { StyledMenuItemContainer, StyledMenuItemWithBorder } from "./styles";
import { MenuItemProps } from "./types";

const MenuItem: React.FC<MenuItemProps> = ({
  children,
  href,
  isActive = false,
  variant = "default",
  statusColor,
  ...props
}) => {
  const { linkComponent } = useContext(MenuContext);
  const itemLinkProps: unknown = href
    ? {
        as: linkComponent,
        href,
      }
    : {
        as: "div",
      };
  return (
    <StyledMenuItemContainer $isActive={isActive} $variant={variant}>
      <StyledMenuItemWithBorder
        {...itemLinkProps}
        $isActive={isActive}
        $variant={variant}
        $statusColor={statusColor}
        {...props}
      >
        {children}
      </StyledMenuItemWithBorder>
    </StyledMenuItemContainer>
  );
};

export default MenuItem;
