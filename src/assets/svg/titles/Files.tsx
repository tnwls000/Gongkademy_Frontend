import * as React from "react";
import type { SVGProps } from "react";
const SvgFiles = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="#E5AE13" d="M2 3h20v12H2z" />
    <path fill="#F5C53D" d="M2 5h20v12H2z" />
    <path fill="#FCDC83" d="M2 7h20v12H2z" />
    <path fill="#FF6969" d="M16.5 8 16 9h5l-.5-1z" />
    <path fill="#6993FF" d="M12.5 6 12 7h5l-.5-1z" />
    <path fill="#90E24F" d="M8.5 4 8 5h5l-.5-1z" />
    <path fill="#FA8F2B" d="M4.5 2 4 3h5l-.5-1z" />
    <path fill="#FFF1CC" d="M2 9h20v13H2z" />
  </svg>
);
export default SvgFiles;
