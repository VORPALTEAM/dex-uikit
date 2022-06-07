import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 20 13" {...props}>
    <path d="M4.5 0a.5.5 0 0 1 .492.41L5 .5V4h3.463c.267 0 .488.195.53.45L9 4.537c0 .083-.02.165-.057.24L4.98 12.703a.537.537 0 0 1-.96 0L.057 4.777A.537.537 0 0 1 .537 4H4V.5a.5.5 0 0 1 .5-.5ZM15.5 13a.5.5 0 0 0 .492-.41L16 12.5V9h3.463a.537.537 0 0 0 .53-.45L20 8.463a.537.537 0 0 0-.057-.24L15.98.297a.537.537 0 0 0-.96 0l-3.963 7.926a.537.537 0 0 0 .48.777H15v3.5a.5.5 0 0 0 .5.5Z" fill="#1A192E"/>
  </Svg>
  );
};

export default Icon;
