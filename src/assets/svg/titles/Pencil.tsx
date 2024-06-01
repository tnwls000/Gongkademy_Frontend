import * as React from "react";
import type { SVGProps } from "react";
const SvgPencil = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#FFD51B"
      d="M4.857 21.048 2 22l.952-2.857L17.238 4.857l1.905 1.905z"
    />
    <path fill="#111113" d="M3.429 21.524 2 22l.476-1.429z" />
    <path
      fill="#FFF9D8"
      d="M4.857 20.095v.953l-1.428.476-.953-.953.476-1.428h.953v.952z"
    />
    <path fill="#EDEFF0" d="m19.143 6.762-1.905-1.905.953-.952 1.904 1.905z" />
    <path fill="#FFD6F1" d="m20.095 5.81-1.904-1.905L20.095 2 22 3.905z" />
  </svg>
);
export default SvgPencil;
