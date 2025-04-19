import type { SVGProps } from 'react';

function BellSVG(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={40}
      height={40}
      viewBox="0 0 30 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Bell Icon</title>
      <path
        d="M22.5 13C22.5 11.0109 21.7098 9.10322 20.3033 7.6967C18.8968 6.29018 16.9891 5.5 15 5.5C13.0109 5.5 11.1032 6.29018 9.6967 7.6967C8.29018 9.10322 7.5 11.0109 7.5 13C7.5 21.75 3.75 24.25 3.75 24.25H26.25C26.25 24.25 22.5 21.75 22.5 13Z"
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.1625 29.25C16.9427 29.6288 16.6273 29.9433 16.2478 30.1619C15.8683 30.3805 15.438 30.4956 15 30.4956C14.562 30.4956 14.1317 30.3805 13.7522 30.1619C13.3727 29.9433 13.0573 29.6288 12.8375 29.25"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { BellSVG };
