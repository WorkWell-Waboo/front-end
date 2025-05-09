import type { SVGProps } from 'react';

function Barcode(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>Barcode Icon</title>
      <path d="M0.833496 11.8334V0.166748H2.50016V11.8334H0.833496ZM3.3335 11.8334V0.166748H5.00016V11.8334H3.3335ZM5.8335 11.8334V0.166748H6.66683V11.8334H5.8335ZM8.3335 11.8334V0.166748H10.0002V11.8334H8.3335ZM10.8335 11.8334V0.166748H13.3335V11.8334H10.8335ZM14.1668 11.8334V0.166748H15.0002V11.8334H14.1668ZM16.6668 11.8334V0.166748H19.1668V11.8334H16.6668Z" fill="currentColor"/>
    </svg>
  );
}

export { Barcode };
