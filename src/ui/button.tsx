import { Button as KButton } from "@kobalte/core";
import { RecipeVariantProps, css, cva } from "~/styled-system/css";
import { HTMLStyledProps, splitCssProps } from "~/styled-system/jsx";
import { OmittedHTMLProps } from "~/styled-system/types";

const buttonStyle = cva({
  base: {
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
    color: {
      blue: { colorPalette: "blue" },
      red: { colorPalette: "red" },
    },
  },
  defaultVariants: {
    size: "md",
    color: "blue",
  },
});

export type ButtonVariants = RecipeVariantProps<typeof buttonStyle>;

export const Button = (
  props: ButtonVariants &
    Omit<HTMLStyledProps<typeof KButton.Root>, OmittedHTMLProps>,
) => {
  const [variants, otherProps] = buttonStyle.splitVariantProps(props);
  const [cssProps, restProps] = splitCssProps(otherProps);
  const { css: cssProp, ...styleProps } = cssProps;

  return (
    <KButton.Root
      {...restProps}
      class={css(buttonStyle.raw(variants), styleProps, cssProp)}
    />
  );
};
