import React, { useContext } from "react";
import { MenuContext } from "../../widgets/Menu/context";
import { Flex } from "../Box";
import AnimatedIconComponent from "../Svg/AnimatedIconComponent";
import { StyledBottomNavItem, StyledBottomNavText, PrimaryBottomNavText } from "./styles";
import { BottomNavItemProps } from "./types";

const BottomNavItem: React.FC<BottomNavItemProps> = ({
  label,
  iconName,
  href,
  showItemsOnMobile = false,
  isActive = false,
  isFirst = false,
  ...props
}) => {
  const { linkComponent } = useContext(MenuContext);
  const bottomNavItemContent = (
    <Flex flexDirection="column" justifyContent="center" alignItems="center" height="100%">
      {/* iconName && (
        <AnimatedIconComponent
          iconName={iconName}
          height="22px"
          width="21px"
          color={isActive ? "secondary" : "textSubtle"}
          isActive={isActive}
          activeBackgroundColor="backgroundAlt"
        />
      ) */}
      {(label !== "Sale") ? <StyledBottomNavText
        color="textSubtle"
        fontWeight={label === "..." ? "700" : "400"}
        fontSize={label === "..." ? "22px" : "12px"}
      >
        {label}
      </StyledBottomNavText> :
      <PrimaryBottomNavText
        color="primary"
        fontWeight="500"
        fontSize="12px"
        textTransform="uppercase"
      >
        {label}
      </PrimaryBottomNavText>}
    </Flex>
  );

  return showItemsOnMobile ? (
    <StyledBottomNavItem type="button" {...props} style={{
      borderLeft: isFirst ? "1px solid #F1F6F9" : "none"
    }}>
      {bottomNavItemContent}
    </StyledBottomNavItem>
  ) : (
    <StyledBottomNavItem as={linkComponent} href={href} {...props} style={{
      borderLeft: isFirst ? "1px solid #F1F6F9" : "none"
    }}>
      {bottomNavItemContent}
    </StyledBottomNavItem>
  );
};

export default BottomNavItem;
