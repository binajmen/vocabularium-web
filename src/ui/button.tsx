import { styled } from "~/styled-system/jsx";
import { cva } from "~/styled-system/css/cva";

// <button type="button" class="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
//   <svg class="-ml-0.5 h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//     <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
//   </svg>
//   Button text
// </button>
// <button type="button" class="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
//   <svg class="-ml-0.5 h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//     <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
//   </svg>
//   Button text
// </button>
// <button type="button" class="inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
//   <svg class="-ml-0.5 h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//     <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
//   </svg>
//   Button text
// </button>

const buttonStyle = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    gap: "1.5",
    borderRadius: "md",
    padding: "2.5",
    fontSize: "sm",
    fontWeight: "semibold",
    bg: "indigo.600",
    color: "white",
    shadow: "sm",
    "&:hover": {
      bg: "indigo.500",
    },
    "&:focus-visible": {
      outline: "2",
      outlineOffset: "2",
      outlineColor: "indigo.600",
    },
  },
  variants: {
    size: {
      sm: { padding: "1.5", fontSize: "sm" },
      lg: { padding: "2.5", fontSize: "lg" },
    },
  },
  compoundVariants: [
    {
      size: "sm",
      padding: "1.5",
      fontSize: "sm",
    },
    {
      size: "lg",
      padding: "2.5",
      fontSize: "lg",
    },
  ],
  defaults: {
    size: "sm",
  },
});

export const Button = styled("button", buttonStyle);
