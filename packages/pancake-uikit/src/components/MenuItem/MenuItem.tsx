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
  isFirst = false,
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
    <StyledMenuItemContainer style={{
      borderLeft: isFirst ? "1px solid #F1F6F9" : "none"
    }} $isActive={isActive} $variant={variant}>
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
