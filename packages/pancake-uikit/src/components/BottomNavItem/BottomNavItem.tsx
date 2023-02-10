import React, { useContext } from "react";
import { MenuContext } from "../../widgets/Menu/context";
import { Flex } from "../Box";
import AnimatedIconComponent from "../Svg/AnimatedIconComponent";
import { StyledBottomNavItem, StyledBottomNavText, PrimaryBottomNavText, StarBottomNavText } from "./styles";
import { BottomNavItemProps } from "./types";

const BottomNavItem: React.FC<BottomNavItemProps> = ({
  label,
  iconName,
  href,
  showItemsOnMobile = false,
  isActive = false,
  isFirst = false,
  theme = 'default',
  ...props
}) => {
  const { linkComponent } = useContext(MenuContext);
  const hrefComponent = href ? <a href={href} target="_blank">{label}</a> : null
  const labelComponent = !href ? label : null
  const itemComponent = () => {
    switch (theme) {
       case "green" :
         return (
          <PrimaryBottomNavText
            color="primary"
            fontWeight="500"
            fontSize="12px"
            textTransform="uppercase"
          >
          {label}
        </PrimaryBottomNavText>
         ) 
      case "star" :
        return (
          <StarBottomNavText
            color="#00F0FF"
            fontWeight="500"
            fontSize="12px"
            textTransform="uppercase"
          >
          {label}
        </StarBottomNavText>
         ) 
      default :
        return (
          <StyledBottomNavText
           color="textSubtle"
           fontWeight={label === "..." ? "700" : "400"}
           fontSize={label === "..." ? "22px" : "12px"}
         >
           {hrefComponent}
           {labelComponent}
         </StyledBottomNavText>
        )
    }
  }
  const bottomNavItemContent = (
    <Flex flexDirection="column" justifyContent="center" alignItems="center" height="100%">
      {itemComponent()}
      {/* (label !== "Sale") ? <StyledBottomNavText
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
      </PrimaryBottomNavText> */}
    </Flex>
  );

  return (
    <StyledBottomNavItem as={linkComponent} href={href} target="_blank" {...props} style={{
      borderLeft: isFirst ? "1px solid #F1F6F9" : "none"
    }}>
      {bottomNavItemContent}
    </StyledBottomNavItem>
  );
};

export default BottomNavItem;
