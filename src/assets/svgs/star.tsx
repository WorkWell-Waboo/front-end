import type { SVGProps } from 'react';
function StarSVG(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Star</title>
      <path
        d="M6.72519 1.66675L8.45693 5.31841L12.3295 5.90758L9.52736 8.74841L10.1887 12.7617L6.72519 10.8659L3.26171 12.7617L3.92302 8.74841L1.12085 5.90758L4.99345 5.31841L6.72519 1.66675Z"
        fill="#F2C94C"
        stroke="#F2C94C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export default StarSVG;
