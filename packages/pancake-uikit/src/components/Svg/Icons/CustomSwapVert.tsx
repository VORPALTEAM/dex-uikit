import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 18 34" {...props}>
      <path
        d="M4.5 10a.5.5 0 0 1 .492.41L5 10.5V25h3.463c.267 0 .488.195.53.45l.007.087c0 .083-.02.165-.057.24L4.98 33.703a.537.537 0 0 1-.96 0L.057 25.777A.537.537 0 0 1 .537 25H4V10.5a.5.5 0 0 1 .5-.5ZM13.5 24a.5.5 0 0 0 .492-.41L14 23.5V9h3.463a.537.537 0 0 0 .53-.45L18 8.463a.537.537 0 0 0-.057-.24L13.98.297a.537.537 0 0 0-.96 0L9.057 8.223a.537.537 0 0 0 .48.777H13v14.5a.5.5 0 0 0 .5.5Z"
        fill="#4DA1A3"
      />
    </Svg>
  );
};

export default Icon;
