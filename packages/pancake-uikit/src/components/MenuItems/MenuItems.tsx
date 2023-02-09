import React from "react";
import { Flex } from "../Box";
import isTouchDevice from "../../util/isTouchDevice";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import MenuItem from "../MenuItem/MenuItem";
import IconComponent from "../Svg/IconComponent";
import { MenuItemsProps } from "./types";
import styled from "styled-components";

const SettingsPc = styled.div`
  margin-left: 30px;

  ${({ theme }) => theme.mediaQueries.mobile} {
    display: none;
  }
`;

const MenuItems: React.FC<MenuItemsProps> = ({ items = [], activeItem, activeSubItem, globalMenu, ...props }) => {
  
  let ind = 0

  return (
    <Flex style={{ alignItems: "center" }} {...props}>
      {
      items.map(({ label, items: menuItems = [], href, icon = "" }) => {
        const statusColor = menuItems?.find((menuItem) => menuItem.status !== undefined)?.status?.color;
        const isActive = activeItem === href;
        const linkProps = isTouchDevice() && menuItems && menuItems.length > 0 ? {} : { href };
        const variant = () => {
          switch (icon) {
             case "Green" : 
             return "green";
             case "Star" : 
             return "star";
             default:
             return "default"
          }
        }
        ind++
        return (
          <DropdownMenu key={`${label}#${href}#${icon}`} items={menuItems} py={1} activeItem={activeSubItem}>
            <div />
            <MenuItem {...linkProps} isFirst={ind === 1 ? true : false} isActive={isActive} variant={variant()} statusColor={statusColor}>
              {label || <IconComponent iconName={icon} color={isActive ? "secondary" : "textSubtle"} />}
            </MenuItem>
          </DropdownMenu>
        );
      })}
      <SettingsPc>{globalMenu}</SettingsPc>
    </Flex>
  );
};

export default MenuItems;
