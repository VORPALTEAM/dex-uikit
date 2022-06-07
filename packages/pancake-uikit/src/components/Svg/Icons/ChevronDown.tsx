import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 13 13" {...props}>
      <path d="M3.5.5a.5.5 0 0 0-1 0h1Zm-.5 12 2.887-5H.113L3 12.5ZM2.5.5V8h1V.5h-1Z" fill="#EBEBEB" />
    </Svg>
  );
};

export default Icon;
