import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 20 20" {...props}>
    <g clipPath="url(#a)">
      <circle cx="10" cy="10" r="10" fill="#352F44"/>
      <g filter="url(#b)">
        <path d="M10.182 11.627h-.703c.003-.332.037-.613.1-.844.062-.23.163-.443.304-.638.14-.196.33-.41.568-.645.207-.207.39-.398.551-.574.16-.18.285-.377.375-.592.094-.215.14-.479.14-.791 0-.309-.054-.58-.163-.814a1.247 1.247 0 0 0-.493-.551c-.218-.133-.492-.2-.82-.2-.3 0-.57.06-.809.176-.234.117-.42.287-.556.51a1.587 1.587 0 0 0-.211.797h-.697c.007-.445.113-.824.316-1.137.207-.316.48-.556.82-.72a2.554 2.554 0 0 1 1.137-.252c.469 0 .863.091 1.184.275.324.184.57.44.738.768.172.328.258.709.258 1.142 0 .348-.059.662-.176.943a3.08 3.08 0 0 1-.486.786 7.954 7.954 0 0 1-.721.744c-.25.215-.422.46-.516.738-.093.274-.14.567-.14.879Zm-.797 1.957c0-.133.043-.244.129-.334a.453.453 0 0 1 .351-.14c.149 0 .266.046.352.14.09.09.135.201.135.334a.464.464 0 0 1-.486.469.464.464 0 0 1-.352-.135.478.478 0 0 1-.13-.334Z" fill="#F1F6F9"/>
      </g>
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z"/>
      </clipPath>
      <filter id="b" x="1.766" y="-.648" width="16.453" height="20.701" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="3"/>
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"/>
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_0_16232"/>
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_16232" result="shape"/>
      </filter>
    </defs>
  </Svg>
  
  );
};

export default Icon;
