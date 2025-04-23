import type { SVGProps } from 'react';
function CartSVG(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 23 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>cart</title>
      <path
        d="M8.36173 18C8.86947 18 9.28108 17.6376 9.28108 17.1905C9.28108 16.7434 8.86947 16.381 8.36173 16.381C7.85399 16.381 7.44238 16.7434 7.44238 17.1905C7.44238 17.6376 7.85399 18 8.36173 18Z"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.474 18C18.9818 18 19.3934 17.6376 19.3934 17.1905C19.3934 16.7434 18.9818 16.381 18.474 16.381C17.9663 16.381 17.5547 16.7434 17.5547 17.1905C17.5547 17.6376 17.9663 18 18.474 18Z"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.00684 1H4.68423L7.14808 11.8395C7.23215 12.2122 7.46242 12.547 7.79857 12.7853C8.13471 13.0236 8.55533 13.1501 8.98678 13.1429H17.9229C18.3543 13.1501 18.7749 13.0236 19.1111 12.7853C19.4472 12.547 19.6775 12.2122 19.7615 11.8395L21.2325 5.04762H5.60358"
        stroke="currentColor"
        strokeWidth="1.6875"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default CartSVG;
