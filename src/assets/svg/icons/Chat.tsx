import * as React from "react";
import type { SVGProps } from "react";
const SvgChat = (
  props: SVGProps<SVGSVGElement>
) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.99992 2C4.33325 2 1.33325 4.38667 1.33325 7.33333C1.35008 8.04178 1.52314 8.73777 1.84005 9.3716C2.15697 10.0054 2.60993 10.5615 3.16659 11C3.16659 11.4 2.88659 12.4467 1.33325 14C2.91325 13.9267 4.42659 13.3333 5.64659 12.3333C6.40659 12.5533 7.20659 12.6667 7.99992 12.6667C11.6666 12.6667 14.6666 10.28 14.6666 7.33333C14.6666 4.38667 11.6666 2 7.99992 2ZM7.99992 11.3333C5.05325 11.3333 2.66659 9.54 2.66659 7.33333C2.66659 5.12667 5.05325 3.33333 7.99992 3.33333C10.9466 3.33333 13.3333 5.12667 13.3333 7.33333C13.3333 9.54 10.9466 11.3333 7.99992 11.3333Z"
      fill="#6B6E76"
    />
  </svg>
);
export default SvgChat;
