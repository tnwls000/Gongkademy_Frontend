import * as React from "react";
import type { SVGProps } from "react";
const SvgBook = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="#4EA5FC" d="M2 2h5v20H2z" />
    <path fill="#F7385A" d="M7 2h5v20H7z" />
    <path fill="#14D863" d="M12 3.294 16.83 2l5 18.659L17 21.953z" />
  </svg>
);
export default SvgBook;
