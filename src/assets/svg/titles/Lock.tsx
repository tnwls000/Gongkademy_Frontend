import * as React from "react";
import type { SVGProps } from "react";
const SvgLock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#BFDDFA"
      fillRule="evenodd"
      d="M5 7a5 5 0 0 1 10 0v4h-2V7a3 3 0 1 0-6 0v4H5z"
      clipRule="evenodd"
    />
    <rect width={16} height={12} x={2} y={10} fill="#F2E085" rx={2} />
    <path
      fill="#FFC331"
      fillRule="evenodd"
      d="M19.323 10.412c1.588-1.074 2.396-3.056 1.87-4.994-.669-2.46-3.232-3.919-5.727-3.26s-3.974 3.187-3.305 5.646c.526 1.938 2.231 3.256 4.151 3.404l.338 1.242a1.023 1.023 0 0 0-.734 1.255c.148.547.718.87 1.272.724l.269.99a1.023 1.023 0 0 0-.735 1.254c.149.547.718.871 1.273.725l.269.99a1.023 1.023 0 0 0-.735 1.254c.148.546.718.87 1.272.724l.135.495a1.56 1.56 0 0 0 1.909 1.086 1.534 1.534 0 0 0 1.102-1.882zm-2.163-2.02c-.997.263-2.023-.32-2.29-1.304a1.84 1.84 0 0 1 1.322-2.258c.998-.264 2.024.32 2.29 1.304a1.84 1.84 0 0 1-1.322 2.258"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLock;
