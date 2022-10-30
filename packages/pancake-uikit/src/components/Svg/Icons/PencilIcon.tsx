import React from "react";
import { color } from "styled-system";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 28 28" {...props}>
       <path fillRule="evenodd" clipRule="evenodd" d="M4.42451 24.6111C3.7876 24.6818 3.24943 24.1437 3.3202 23.5068L3.85053 18.7338C3.8756 18.5081 3.97674 18.2977 4.1373 18.1371L16.6172 5.65723L22.274 11.3141L9.79416 23.794C9.6336 23.9545 9.42317 24.0557 9.19748 24.0807L4.42451 24.6111Z"  />
       <path fillRule="evenodd" clipRule="evenodd" d="M19.4451 2.12132C20.6167 0.949748 22.5162 0.949748 23.6877 2.12132L25.809 4.24264C26.9806 5.41421 26.9806 7.31371 25.809 8.48528L23.6877 10.6066L17.3238 4.24264L19.4451 2.12132Z" />
       <path d="M3.96484 27.2158H22.9648" strokeLinecap="round"/>
    </Svg>
  );
};

export default Icon;
