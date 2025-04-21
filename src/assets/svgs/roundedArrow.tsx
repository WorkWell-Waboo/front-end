import type { SVGProps } from 'react';

function RoundedArrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg  
    viewBox="0 0 16 16" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    {...props}  
    >
      <title>Rounded Arrow Icon</title>
      <path d="M7.66667 14.3333C11.3486 14.3333 14.3333 11.3486 14.3333 7.66667C14.3333 3.98477 11.3486 1 7.66667 1C3.98477 1 1 3.98477 1 7.66667C1 11.3486 3.98477 14.3333 7.66667 14.3333Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6.3335 10.3333L9.00016 7.66667L6.3335 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
  );
}

export { RoundedArrow };