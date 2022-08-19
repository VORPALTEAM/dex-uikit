import { scales, variants } from "./types";

export const scaleVariants = {
  [scales.MD]: {
    height: "40px",
    padding: "0 42px",
  },
  [scales.SM]: {
    height: "32px",
    padding: "0 24px",
  },
  [scales.XS]: {
    height: "20px",
    fontSize: "12px",
    padding: "0 16px",
  },
};

export const styleVariants = {
  [variants.PRIMARY]: {
    backgroundColor: "primary",
    color: "#000",
  },
  [variants.SUBPRIMARY]: {
    backgroundColor: "#352F44",
    color: "#F1F6F9",
  },
  [variants.SECONDARY]: {
    backgroundColor: "primary",
    boxShadow: "none",
    color: "#000",
    ":disabled": {
      backgroundColor: "#F1F6F9",
    },
  },
  [variants.FARMSBUTTON]: {
    backgroundColor: "backgroundAlt1",
    color: "contrast",
    boxShadow: "farmsButtonShadow",
  },
  [variants.TERTIARY]: {
    backgroundColor: "tertiary",
    boxShadow: "none",
    color: "primary",
  },
  [variants.SUBTLE]: {
    backgroundColor: "textSubtle",
    color: "backgroundAlt",
  },
  [variants.DANGER]: {
    backgroundColor: "failure",
    color: "white",
  },
  [variants.SUCCESS]: {
    backgroundColor: "success",
    color: "white",
  },
  [variants.TEXT]: {
    backgroundColor: "transparent",
    color: "text",
    boxShadow: "none",
  },
  [variants.CONTRAST]: {
    backgroundColor: "contrast",
    color: "tetriary",
    boxShadow: "none",
  },
  [variants.LIGHT]: {
    backgroundColor: "input",
    color: "textSubtle",
    boxShadow: "none",
  },
};
