import React from "react";
import styled from "styled-components";
import Text from "../Text/Text";
import Dropdown from "../Dropdown/Dropdown";
import Button from "../Button/Button";
import LanguageIcon from "../Svg/Icons/Language";
import { ChevronUpIcon } from "../Svg";
import MenuButton from "./MenuButton";
import { Colors } from "../../theme";
import { Language } from "./types";
import { Position } from "../Dropdown/types";
import { Scale } from "../Button/types";
import { Flex } from "../Box";

interface Props {
  currentLang: string;
  langs: Language[];
  setLang: (lang: Language) => void;
  color: keyof Colors;
  dropdownPosition?: Position;
  buttonScale?: Scale;
  hideLanguage?: boolean;
}

export const StyledLangSelector = styled(Flex)`
  width: 90px;
  height: 40px;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.tertiary};
  border-radius: 16px;
  box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: inline-flex;
  height: 32px;
  position: relative;

  &:hover {
    opacity: 0.65;
  }
`;

const LangSelector: React.FC<Props> = ({
  currentLang,
  langs,
  color,
  setLang,
  dropdownPosition = "bottom",
  buttonScale = "md",
  hideLanguage = false,
}) => (
  <Dropdown
    position={dropdownPosition}
    target={
      <StyledLangSelector>
        <Button
          style={{ justifyContent: "flex-end", width: "100%", padding: "none" }}
          scale={buttonScale}
          variant="text"
        >
          {!hideLanguage && (
            <Text style={{ marginRight: "15px" }} fontSize="18px" color={color}>
              {currentLang?.toUpperCase()}
            </Text>
          )}
          <ChevronUpIcon style={{ transform: "rotate(180deg)" }} color="contrast" width="13px" />
        </Button>
      </StyledLangSelector>
    }
  >
    {langs.map((lang) => (
      <MenuButton
        key={lang.locale}
        fullWidth
        onClick={() => setLang(lang)}
        // Safari fix
        style={{ minHeight: "32px", height: "auto" }}
      >
        {lang.language}
      </MenuButton>
    ))}
  </Dropdown>
);

export default React.memo(LangSelector, (prev, next) => prev.currentLang === next.currentLang);
