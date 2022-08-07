import styled from "styled-components";
import Text from "../Text/Text";
import { tags, scales, HeadingProps } from "./types";

const style = {
  [scales.SM]: {
    fontSize: "18px",
    fontSizeLg: "18px",
  },
  [scales.MD]: {
    fontSize: "21px",
    fontSizeLg: "21px",
  },
  [scales.LG]: {
    fontSize: "24px",
    fontSizeLg: "24px",
  },
  [scales.XL]: {
    fontSize: "32px",
    fontSizeLg: "40px",
  },
  [scales.XXL]: {
    fontSize: "48px",
    fontSizeLg: "64px",
  },
  [scales.XXXL]: {
    fontSize: "96px",
    fontSizeLg: "96px",
    fontFamily: "RoundsBlack"
  },
};

const Heading = styled(Text).attrs({ bold: true })<HeadingProps>`
  font-size: ${({ scale }) => style[scale || scales.MD].fontSize};
  font-family: ${({ scale }) => (scale === scales.XXXL) ? style[scales.XXXL] : "inherit"};
  font-weight: 500;
  line-height: 1.1;

  ${({ theme }) => theme.mediaQueries.lg} {
    font-size: ${({ scale }) => style[scale || scales.MD].fontSizeLg};
  }
`;

Heading.defaultProps = {
  as: tags.H2,
};

export default Heading;
