import type { SVGProps } from 'react';

function Arrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>Arrow Icon</title>
      <path d="M9 1.77664L1.88832 8.88832L9 16" stroke="currentColor" strokeWidth="2.39997" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export { Arrow };

