import * as React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="9" height="13" viewBox="0 0 9 13" fill="none" {...props}>
        <path d="M4.5 0C4.74546 0 4.94961 0.176875 4.99194 0.410124L5 0.5V4H8.46314C8.72999 4 8.95137 4.19469 8.99297 4.44978L9 4.53686C9 4.6202 8.9806 4.7024 8.94332 4.77695L4.98024 12.7031C4.84764 12.9683 4.52517 13.0758 4.25997 12.9432C4.15607 12.8913 4.07183 12.807 4.01988 12.7031L0.0567954 4.77695C-0.0758032 4.51175 0.0316892 4.18928 0.296886 4.05668C0.371432 4.0194 0.453633 4 0.536977 4H4V0.5C4 0.223858 4.22386 0 4.5 0Z"
        fill="#EBEBEB"/>
    </Svg>
  );
};

export default Icon;
