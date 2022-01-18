import type { CSSProperties } from "react";

type TypographyVariant =
  | "body"
  | "bodySmall"
  | "button"
  | "title1"
  | "title2"
  | "title3"
  | "navLink";

type TypographyVariantVar = `$${TypographyVariant}`;

const rem = (px: number) => `${px / 16}rem`;

const typographyVariants: {
  [variant in TypographyVariantVar]: CSSProperties;
} = {
  $body: {
    fontFamily: '"Montserrat", sans-serif',
    lineHeight: 1.5,
    fontSize: rem(18),
    fontWeight: 400,
  },
  $bodySmall: {
    fontFamily: '"Montserrat", sans-serif',
    lineHeight: 1.2,
    fontSize: rem(14),
    fontWeight: 400,
  },
  $title1: {
    fontFamily: '"Montserrat", sans-serif',
    lineHeight: 1,
    fontSize: rem(64),
    fontWeight: 700,
    color: "$tertiary",
  },
  $title2: {
    fontFamily: '"Montserrat", sans-serif',
    lineHeight: 1,
    fontSize: rem(48),
    fontWeight: 600,
    color: "$tertiary",
  },
  $title3: {
    fontFamily: '"Montserrat", sans-serif',
    lineHeight: 1,
    fontSize: rem(26),
    fontWeight: 550,
    color: "$primary",
  },
  $button: {
    fontFamily: '"Montserrat", sans-serif',
    lineHeight: 1,
    fontSize: rem(18),
    fontWeight: 500,
    letterSpacing: "2px",
    textTransform: "uppercase",
  },
  $navLink: {
    fontFamily: '"Montserrat", sans-serif',
    lineHeight: 1,
    fontSize: rem(16),
    fontWeight: 400,
    letterSpacing: "1.5px",
    textTransform: "uppercase",
  },
};

export const typography = () => (value: TypographyVariantVar) => {
  return typographyVariants[value];
};

export const paddingVertical = () => (value: any) => ({
  paddingTop: value,
  paddingBottom: value,
});

export const paddingHorizontal = () => (value: any) => ({
  paddingLeft: value,
  paddingRight: value,
});

export const margingHorizontal = () => (value: any) => ({
  marginLeft: value,
  marginRight: value,
});

export const size = () => (value: any) => ({
  width: value,
  height: value,
});

export const absoluteFill = () => (value: any) => ({
  position: "absolute",
  top: "0px",
  right: "0px",
  bottom: "0px",
  left: "0px",
});

export const fixedFill = () => (value: any) => ({
  position: "fixed",
  top: "0px",
  right: "0px",
  bottom: "0px",
  left: "0px",
});

export const flexCenter = () => (value: any) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
