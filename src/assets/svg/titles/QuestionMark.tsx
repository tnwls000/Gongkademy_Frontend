import * as React from "react";
import type { SVGProps } from "react";
const SvgQuestionMark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={12} cy={19.5} r={2.5} fill="#F53500" />
    <path
      fill="#F53500"
      fillRule="evenodd"
      d="M9.698 6.187c-.445.748-.512 1.367-.35 1.839.27.786-.168 1.635-.979 1.897s-1.687-.163-1.958-.949c-.418-1.215-.214-2.909.605-4.286C7.902 3.2 9.553 2 12.008 2c2.29 0 3.906.845 4.918 2.056A5.52 5.52 0 0 1 18.2 7.5c0 1.425-.764 4.021-3.616 5.073-.353.13-.641.318-.82.508-.17.18-.208.317-.208.419v1c0 .828-.693 1.5-1.548 1.5s-1.548-.672-1.548-1.5v-1c0-2.027 1.71-3.247 3.023-3.73 1.24-.458 1.621-1.6 1.621-2.27 0-.388-.15-1.036-.584-1.556C14.14 5.488 13.434 5 12.008 5c-1.26 0-1.931.55-2.31 1.187"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgQuestionMark;
