import { styled } from "~/styled-system/jsx";
import { cva } from "~/styled-system/css/cva";

const buttonStyle = cva({
  base: {
    colorPalette: "blue",
    display: "inline-flex",
    alignItems: "center",
    rounded: "md",
    borderRadius: "md",
    bg: "colorPalette.600",
    color: "white",
    fontSize: "sm",
    fontWeight: "semibold",
    shadow: "sm",
    cursor: "pointer",
    _hover: { bg: "colorPalette.500", transform: "translateY(-1px)" },
    _active: { bg: "colorPalette.600", transform: "translateY(0px)" },
    _focusVisible: {
      outlineWidth: "2",
      outlineStyle: "solid",
      outlineColor: "colorPalette.600",
      outlineOffset: "0.5",
    },
  },
  variants: {
    size: {
      sm: { rowGap: "1.5", paddingY: "1.5", paddingX: "2.5" },
      md: { rowGap: "1.5", paddingY: "2", paddingX: "3" },
      lg: { rowGap: "2", paddingY: "2.5", paddingX: "3.5" },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const Button = styled("button", buttonStyle);
