import type { SVGProps } from 'react';

function SonoSVG(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Sono Icon</title>
      <path
        d="M9.64974 2.10498C9.2183 3.44515 8.99915 4.84457 9.00024 6.25248C9.00024 13.7082 15.0445 19.7525 22.5002 19.7525C24.3405 19.7556 26.1617 19.3803 27.8507 18.65C26.101 24.0777 21.0092 28.0025 15.0002 28.0025C7.54449 28.0025 1.50024 21.9582 1.50024 14.5025C1.50024 8.94723 4.85499 4.17648 9.64974 2.10498Z"
        stroke="currentColor"
        stroke-width="3"
        stroke-linejoin="round"
      />
      <path
        d="M20.7452 4.00244H27.7502L20.2502 10.0024H27.7502"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
export default SonoSVG;
