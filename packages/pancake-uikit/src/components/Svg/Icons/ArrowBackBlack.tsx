import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 13 13" {...props}>
      <path d="M12.5 4a.5.5 0 0 0 0-1v1Zm-12-.5 5 2.887V.613L.5 3.5Zm12-.5H5v1h7.5V3Z" fill="#1A192E" />
    </Svg>
  );
};

export default Icon;
