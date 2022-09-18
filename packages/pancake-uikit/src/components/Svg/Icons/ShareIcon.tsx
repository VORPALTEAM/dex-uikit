import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 29 29" {...props}>
       <path d="M20.3199 5.33984L7.66992 11.6698" stroke="white" strokeWidth="2" strokeMiterlimit="10"/>
       <path d="M20.3199 20.6601L7.66992 14.3301" stroke="white" strokeWidth="2" strokeMiterlimit="10"/>
       <path d="M4.98047 16C6.63732 16 7.98047 14.6569 7.98047 13C7.98047 11.3431 6.63732 10 4.98047 10C3.32361 10 1.98047 11.3431 1.98047 13C1.98047 14.6569 3.32361 16 4.98047 16Z" stroke="white" strokeWidth="2" strokeMiterlimit="10"/>
       <path d="M23 7C24.6569 7 26 5.65685 26 4C26 2.34315 24.6569 1 23 1C21.3431 1 20 2.34315 20 4C20 5.65685 21.3431 7 23 7Z" stroke="white" strokeWidth="2" strokeMiterlimit="10"/>
       <path d="M23 25C24.6569 25 26 23.6569 26 22C26 20.3431 24.6569 19 23 19C21.3431 19 20 20.3431 20 22C20 23.6569 21.3431 25 23 25Z" stroke="white" strokeWidth="2" strokeMiterlimit="10"/>
    </Svg>
  );
};

export default Icon;
