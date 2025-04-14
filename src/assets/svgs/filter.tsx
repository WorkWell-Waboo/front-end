import type { SVGProps } from 'react';

function Filter(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>Filter Icon</title>
      <path fillRule="evenodd" clipRule="evenodd" d="M7 10.5V12.5H13V10.5H7ZM4 5.5V7.5H16V5.5H4ZM0 0.5V2.5H20V0.5H0Z" fill="currentColor"/>
    </svg>    
  );
}

export { Filter };
