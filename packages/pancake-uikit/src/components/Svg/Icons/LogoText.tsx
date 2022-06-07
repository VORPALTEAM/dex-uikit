import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  return (
    <Svg width="240" height="40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="m25.152 6.31-9.39 20.59-9.39-20.59a.45.45 0 0 0-.42-.31H.532a.47.47 0 0 0-.47.7l12.32 27a.46.46 0 0 0 .42.28h5.85a.47.47 0 0 0 .42-.28l12.31-27a.46.46 0 0 0-.38-.7h-5.42a.46.46 0 0 0-.43.31Z"
        fill="url(#a)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m156.192 33.31 12.31-27a.472.472 0 0 1 .4-.27h5.84a.46.46 0 0 1 .43.27l12.31 27a.459.459 0 0 1-.42.66h-5.37a.471.471 0 0 1-.43-.28l-3.39-7.43a.459.459 0 0 0-.42-.27h-11.16a.461.461 0 0 0-.42.27l-3.39 7.43a.469.469 0 0 1-.42.28h-5.44a.469.469 0 0 1-.43-.66ZM171.432 14l-2.42 5.31.05.03a.458.458 0 0 0 .37.63h4.84a.47.47 0 0 0 .43-.66l-2.43-5.31a.46.46 0 0 0-.84 0Z"
        fill="url(#b)"
      />
      <path d="M200.613 27.52V6.04h-6.45v27.93h26.86v-6.45h-20.41Z" fill="url(#c)" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M124.532 6h21.701a9.763 9.763 0 0 1 9.78 9.81v.9c0 5.39-4.37 9.76-9.76 9.76h-15.721v7c0 .26-.21.47-.47.47h-5.53a.47.47 0 0 1-.47-.47v-27c0-.26.211-.47.47-.47Zm24.049 13.017a3.316 3.316 0 0 0 .961-2.357v-.82a3.32 3.32 0 0 0-3.309-3.31h-15.251a.47.47 0 0 0-.47.47v6.54a.47.47 0 0 0 .47.46h15.251a3.32 3.32 0 0 0 2.348-.983Z"
        fill="url(#d)"
      />
      <path
        d="M107.963 26.45h-.85l9.41 6.67a.471.471 0 0 1-.27.85h-8.65a.438.438 0 0 1-.27-.09l-10.27-7.29a.47.47 0 0 1-.19-.38v-5.74a.46.46 0 0 1 .46-.47h10.63a3.31 3.31 0 0 0 3.31-3.31v-.9a3.31 3.31 0 0 0-3.31-3.31h-15.72v21a.47.47 0 0 1-.46.47h-5.52a.46.46 0 0 1-.46-.47V6.5a.46.46 0 0 1 .46-.5h21.7c5.39 0 9.76 4.37 9.76 9.76v.9a9.763 9.763 0 0 1-9.76 9.79Z"
        fill="url(#e)"
      />
      <circle cx="57.042" cy="20" r="20" fill="url(#f)" />
      <path
        d="M59.163 20a74.242 74.242 0 0 1-2.1 17.45A74.241 74.241 0 0 1 54.923 20a74.24 74.24 0 0 1 2.14-17.45 74.24 74.24 0 0 1 2.1 17.45Z"
        fill="#000"
      />
      <circle cx="60.002" cy="13.42" r="2.92" fill="#fff" />
      <defs>
        <linearGradient id="a" x1="38.144" y1="28.763" x2="39.538" y2="-12.699" gradientUnits="userSpaceOnUse">
          <stop stopColor="#AF15FF" />
          <stop offset="1" stopColor="#3D217F" />
        </linearGradient>
        <linearGradient id="b" x1="195.09" y1="35.394" x2="196.485" y2="-6.079" gradientUnits="userSpaceOnUse">
          <stop stopColor="#AF15FF" />
          <stop offset="1" stopColor="#3D217F" />
        </linearGradient>
        <linearGradient id="c" x1="226.848" y1="37.01" x2="228.74" y2="-4.444" gradientUnits="userSpaceOnUse">
          <stop stopColor="#AF15FF" />
          <stop offset="1" stopColor="#3D217F" />
        </linearGradient>
        <linearGradient id="d" x1="162.822" y1="33.995" x2="164.161" y2="-7.468" gradientUnits="userSpaceOnUse">
          <stop stopColor="#AF15FF" />
          <stop offset="1" stopColor="#3D217F" />
        </linearGradient>
        <linearGradient id="e" x1="124.571" y1="32.391" x2="125.923" y2="-9.082" gradientUnits="userSpaceOnUse">
          <stop stopColor="#AF15FF" />
          <stop offset="1" stopColor="#3D217F" />
        </linearGradient>
        <radialGradient
          id="f"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(56.263 -5.18) scale(41.41)"
        >
          <stop offset=".23" stopColor="#FFF883" />
          <stop offset=".31" stopColor="#FCF882" />
          <stop offset=".38" stopColor="#F2F87E" />
          <stop offset=".45" stopColor="#E1F778" />
          <stop offset=".5" stopColor="#C9F770" />
          <stop offset=".56" stopColor="#AAF765" />
          <stop offset=".62" stopColor="#84F658" />
          <stop offset=".67" stopColor="#57F548" />
          <stop offset=".72" stopColor="#25F436" />
          <stop offset=".74" stopColor="#14F430" />
        </radialGradient>
      </defs>
    </Svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
