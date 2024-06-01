import * as React from "react";
import type { SVGProps } from "react";
const SvgSilhouette = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={12} cy={7.5} r={5.5} fill="#8BC8E1" />
    <path
      fill="#8BC8E1"
      fillRule="evenodd"
      d="M2 22h20a11.66 11.66 0 0 0-2.587-4.653C17.447 15.204 14.78 14 12 14s-5.447 1.204-7.412 3.347A11.66 11.66 0 0 0 2 22"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSilhouette;
