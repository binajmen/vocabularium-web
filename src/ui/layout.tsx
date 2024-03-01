import { styled } from "~/styled-system/jsx";

export const Stack = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
  },
  variants: {
    gap: {
      sm: { gap: 2 },
      md: { gap: 4 },
      lg: { gap: 8 },
    },
    flex: {
      true: {
        flex: "1 1 auto",
      },
      false: {
        flex: "0 0 auto",
      },
    },
    full: {
      true: {
        height: "100%",
      },
      false: {
        height: "auto",
      },
    },
    horizontal: {
      center: {
        alignItems: "center",
      },
      start: {
        alignItems: "flex-start",
      },
      end: {
        alignItems: "flex-end",
      },
    },
    vertical: {
      center: {
        justifyContent: "center",
      },
      start: {
        justifyContent: "flex-start",
      },
      end: {
        justifyContent: "flex-end",
      },
    },
  },
  defaultVariants: {
    gap: "sm",
  },
});

export const Row = styled("div", {
  base: {
    display: "flex",
    // https://dfmcphee.com/flex-items-and-min-width-0/
    minWidth: 0,
  },
  variants: {
    gap: {
      sm: { gap: 2 },
      md: { gap: 4 },
      lg: { gap: 8 },
    },
    flex: {
      true: {
        flex: "1 1 auto",
      },
      false: {
        flex: "0 0 auto",
      },
    },
    full: {
      true: {
        width: "100%",
      },
      false: {
        width: "auto",
      },
    },
    vertical: {
      center: {
        alignItems: "center",
      },
      start: {
        alignItems: "flex-start",
      },
      end: {
        alignItems: "flex-end",
      },
    },
    horizontal: {
      center: {
        justifyContent: "center",
      },
      start: {
        justifyContent: "flex-start",
      },
      end: {
        justifyContent: "flex-end",
      },
      between: {
        justifyContent: "space-between",
      },
    },
  },
  defaultVariants: {
    gap: "sm",
    vertical: "center",
  },
});

export const Grower = styled("div", {
  base: {
    flexGrow: 1,
    minWidth: 0,
  },
});

export const Hr = styled("hr", {
  base: {
    margin: 0,
    height: 0.5,
    border: 0,
    width: "100%",
    backgroundColor: "gray.100",
  },
});
