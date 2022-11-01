import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="22" height="16" viewBox="0 0 22 16"  {...props}>
      <path d="M1.5 8.5L7.5 14.5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20.5 1.5L7.5 14.5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
};

export default Icon;
