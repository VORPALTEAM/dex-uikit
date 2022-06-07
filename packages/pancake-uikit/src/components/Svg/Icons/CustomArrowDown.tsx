import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 9 13" {...props}>
    <path d="M4.5 0a.5.5 0 0 1 .492.41L5 .5V4h3.463c.267 0 .488.195.53.45L9 4.537c0 .083-.02.165-.057.24L4.98 12.703a.537.537 0 0 1-.96 0L.057 4.777A.537.537 0 0 1 .537 4H4V.5a.5.5 0 0 1 .5-.5Z" fill="#1A192E"/>
  </Svg>
  
  );
};

export default Icon;
