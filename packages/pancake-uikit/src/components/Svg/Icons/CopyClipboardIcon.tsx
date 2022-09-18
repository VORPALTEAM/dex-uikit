import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 27" {...props}>
      <rect x="5" y="5" width="18" height="21" rx="1" stroke="white" strokeWidth="2"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M2 2H18V3H20V2C20 0.895432 19.1046 0 18 0H2C0.895431 0 0 0.895432 0 2V21C0 22.1046 0.895431 23 2 23H3V21H2V2Z" fill="white"/>
    </Svg>
  );
};

export default Icon;
