import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const CustomPencil: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 28 28" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M4.424 24.61a1 1 0 0 1-1.104-1.104l.53-4.773a1 1 0 0 1 .287-.596l12.48-12.48 5.657 5.657-12.48 12.48a1 1 0 0 1-.597.286l-4.773.53Z" fill="#ACF800" stroke="#ACF800"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M19.445 2.121a3 3 0 0 1 4.243 0l2.121 2.122a3 3 0 0 1 0 4.242l-2.12 2.122-6.365-6.364 2.121-2.122Z" fill="#ACF800"/>
    <path d="M3.965 27.215h19" stroke="#ACF800" strokeLinecap="round"/>
  </Svg>
  
  );
};

export default CustomPencil;
