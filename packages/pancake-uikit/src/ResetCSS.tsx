import { createGlobalStyle } from "styled-components";
// import RoundsBlack from "./fonts/Rounds-Black.ttf";
// import RobotoBlack from "./fonts/Roboto-Black.ttf";
// import RobotoBlackItalic from "./fonts/Roboto-BlackItalic.ttf";
// import RobotoBold from "./fonts/Roboto-Bold.ttf";
// import RobotoItalic from "./fonts/Roboto-Italic.ttf";
// import RobotoLight from "./fonts/Roboto-Light.ttf";
// import RobotoLightItalic from "./fonts/Roboto-LightItalic.ttf";
// import RobotoMedium from "./fonts/Roboto-Medium.ttf";
// import RobotoMediumItalic from "./fonts/Roboto-MediumItalic.ttf";
// import RobotoRegular from "./fonts/Roboto-Regular.ttf";
// import RobotoThin from "./fonts/Roboto-Thin.ttf";
// import RobotoThinItalic from "./fonts/Roboto-ThinItalic.ttf";

const ResetCSS = createGlobalStyle`
    /* @font-face {
    font-family: "RobotoBlack";
    src: url("static/media/src/fonts/Rounds-Black.ttf") format("truetype");
    }

    @font-face {
    font-family: "RobotoBold";
    src: url("static/media/src/fonts/Roboto-Bold.ttf") format("truetype");
    font-weight: bold;
    }

    @font-face {
    font-family: "RobotoItalic";
    src: url("static/media/src/fonts/Roboto-BlackItalic.ttf") format("truetype");
    font-style: italic;
    }

    @font-face {
    font-family: "RobotoBlackItalic";
    src: url("static/media/src/fonts/Roboto-BlackItalic.ttf") format("truetype");
    font-style: italic;
    }

    @font-face {
    font-family: "Roboto";
    src: url("static/media/src/fonts/Roboto-Light.ttf") format("truetype");
    }
    @font-face {
    font-family: "RobotoItalic";
    src: url("static/media/src/fonts/Roboto-Italic.ttf") format("truetype");
    font-style: italic;
    }
    @font-face {
    font-family: "RobotoLightItalic";
    src: url("static/media/src/fonts/Roboto-LightItalic.ttf") format("truetype");
    font-style: italic;
    }
    @font-face {
    font-family: "RobotoMedium";
    src: url("static/media/src/fonts/Roboto-Medium.ttf") format("truetype");
    }

    @font-face {
    font-family: "RobotoMediumItalic";
    src: url("static/media/src/fonts/Roboto-MediumItalic.ttf") format("truetype");
    font-style: italic;
    }

    @font-face {
    font-family: "RobotoRegular";
    src: url("static/media/src/fonts/Roboto-Regular.ttf") format("truetype");
    }

    @font-face {
    font-family: "RobotoThin";
    src: url("static/media/src/fonts/Roboto-Thin.ttf") format("truetype");
    }

    @font-face {
    font-family: "RobotoThinItalic";
    src: url("static/media/src/fonts/Roboto-ThinItalic.ttf") format("truetype");
    font-style: italic;
    }

@font-face {
    font-family: "RoundsBlack";
    src: local("RoundsBlack"),
    url("static/media/src/fonts/Rounds-Black.ttf") format("truetype");
    font-weight: bold;
} */
  /* prettier-ignore */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  /* prettier-ignore */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
    font-size: 16px;
  }
  ol,
  ul {
    list-style: disc;
    list-style-position: inside;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  [role="button"] {
    cursor: pointer;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  * {
    /* font-family: "Roboto"; */
  /* font-family: 'RoundsBlack'; */
    /* -webkit-font-smoothing: antialiased; */
    /* -moz-osx-font-smoothing: grayscale; */
  }

  /* Number */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type=number] {
    -moz-appearance: textfield;
  }

  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.textSubtle}; 
    border-radius: 8px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px ${({ theme }) => theme.colors.input}; 
    border-radius: 10px;
  }

  /* Slider */ 
  input[type=range] {
    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
    width: 100%; /* Specific width is required for Firefox. */
    background: transparent; /* Otherwise white in Chrome */
  }
  input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
  }
  input[type=range]:focus {
    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
  }
  input[type=range]::-ms-track {
    width: 100%;
    cursor: pointer;
    /* Hides the slider so custom styles can be added */
    background: transparent; 
    border-color: transparent;
    color: transparent;
  }  
`;

export default ResetCSS;
