import React from "react";
import styled from "styled-components";
import { ChevronDownIcon, ChevronUpIcon, CustomArrowDown } from "../Svg";
import Button from "./Button";
import IconButton from "./IconButton";

interface Props {
  onClick?: () => void;
  expanded?: boolean;
}

const StyledButton = styled(Button)`
  flex-direction: column;
  gap: 2px;
`

export const ExpandableButton: React.FC<Props> = ({ onClick, expanded, children }) => {
  return (
    <IconButton aria-label="Hide or show expandable content" onClick={onClick}>
      {children}
      {expanded ? <ChevronUpIcon color="invertedContrast" /> : <ChevronDownIcon color="invertedContrast" />}
    </IconButton>
  );
};
ExpandableButton.defaultProps = {
  expanded: false,
};

export const ExpandableLabel: React.FC<Props> = ({ onClick, expanded, children }) => {
  return (
    <StyledButton
      variant="text"
      aria-label="Hide or show expandable content"
      onClick={onClick}
      endIcon={expanded ? <CustomArrowDown width="13px" style={{transform: 'rotateZ(180deg)'}} color="backgroundAlt1" /> : <CustomArrowDown width="13px" color="backgroundAlt1" />}
    >
      {children}
    </StyledButton>
  );
};
ExpandableLabel.defaultProps = {
  expanded: false,
};
