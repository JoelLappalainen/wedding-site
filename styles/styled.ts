import { createCss } from "@stitches/react";

import {
  typography,
  paddingHorizontal,
  paddingVertical,
  margingHorizontal,
  size,
  absoluteFill,
  fixedFill,
  flexCenter,
} from "./utils";

export const {
  styled,
  css,
  theme,
  global,
  getCssString,
  keyframes,
} = createCss({
  theme: {
    colors: {
      text: "#5F8575",
      gray: "#888",
      white: "#fff",
      primary: "hsl(133, 35%, 10%)",
      secondary: "hsl(155, 7%, 47%)",
      tertiary: "#a64e2d",
      // tertiary: "hsl(35, 32%, 76%)",
      // tertiaryLight: "hsl(35, 32%, 90%)",
    },
    space: {
      none: "0px",
      xxsmall: "4px",
      xsmall: "8px",
      small: "12px",
      normal: "16px",
      medium: "24px",
      large: "32px",
      xlarge: "56px",
      xxlarge: "72px",
      xxxlarge: "120px",
    },
    radii: {
      small: "4px",
      normal: "8px",
      medium: "16px",
      large: "24px",
      full: "999px",
    },
  },

  utils: {
    // @ts-ignore
    size,
    // @ts-ignore
    typography,
    // @ts-ignore
    absoluteFill,
    // @ts-ignore
    fixedFill,
    flexCenter,
    paddingVertical,
    paddingHorizontal,
    margingHorizontal,
  },

  conditions: {
    sm: "@media (max-width: 640px)",
    md: "@media (max-width: 768px)",
    lg: "@media (max-width: 1024px)",
    xl: "@media (min-width: 1025px)",
  },
});
