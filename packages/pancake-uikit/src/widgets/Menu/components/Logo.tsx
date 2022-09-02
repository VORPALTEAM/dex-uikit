import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import Flex from "../../../components/Box/Flex";
import { LogoIcon, LogoWithTextIcon, LogoText, LogoTextMobile } from "../../../components/Svg";
import { MenuContext } from "../context";

interface Props {
  isDark: boolean;
  href: string;
}

const blink = keyframes`
  0%,  100% { transform: scaleY(1); }
  50% { transform:  scaleY(0.1); }
`;

const StyledLink = styled("a")`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-left: 70px;

  .mobile-icon {
    width: 32px;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: none;
    }
  }
  .desktop-icon {
    width: 40px;
    display: none;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: block;
    }
    margin-right: 10px;
  }
  .eye {
    animation-delay: 20ms;
  }
  &:hover {
    .eye {
      transform-origin: center 60%;
      animation-name: ${blink};
      animation-duration: 350ms;
      animation-iteration-count: 1;
    }
  }

  ${({ theme }) => theme.mediaQueries.mobile} {
    margin-left: 0px;
  }
`;

const StyledLinkMobile = styled(StyledLink)`

  ${({ theme }) => theme.mediaQueries.pc} {
    display: none;
  }
`

const LogoPC = styled(LogoText)`
  ${({ theme }) => theme.mediaQueries.mobile} {
    display: none;
  }
`

const LogoMobile = styled(LogoTextMobile)`

  ${({ theme }) => theme.mediaQueries.pc} {
    display: none;
  }
`

const Logo: React.FC<Props> = ({ isDark, href }) => {
  const { linkComponent } = useContext(MenuContext);
  const isAbsoluteUrl = href.startsWith("http");
  const innerLogo = (
    <>
      {/* <LogoIcon className="mobile-icon" /> */}
      {/* <LogoWithTextIcon className="desktop-icon" isDark={isDark} /> */}
      <LogoPC className="desktop-icon-text" isDark={isDark} />
    </>
  );
  const innerLogoMobile = (
    <>
      <LogoMobile className="mobile-icon" isDark={isDark} />
    </>
  );

  return (
    <Flex>
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} aria-label="Vorpal home page">
          {innerLogo}
        </StyledLink>
      ) : (
        <StyledLink href={href} as={linkComponent} aria-label="Vorpal home page">
          {innerLogo}
        </StyledLink>
      )}
      {isAbsoluteUrl ? (
        <StyledLinkMobile as="a" href={href} aria-label="Vorpal home page">
          {innerLogoMobile}
        </StyledLinkMobile>
      ) : (
        <StyledLinkMobile href={href} as={linkComponent} aria-label="Vorpal home page">
          {innerLogoMobile}
        </StyledLinkMobile>
      )}
    </Flex>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
