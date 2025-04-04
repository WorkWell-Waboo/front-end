import type { SVGProps } from 'react';

function LockSVG(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			width='20'
			height='20'
			viewBox='0 0 20 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<title>Lock Icon</title>
			<g>
				<path
					d='M15.8333 9.16669H4.16667C3.24619 9.16669 2.5 9.91288 2.5 10.8334V16.6667C2.5 17.5872 3.24619 18.3334 4.16667 18.3334H15.8333C16.7538 18.3334 17.5 17.5872 17.5 16.6667V10.8334C17.5 9.91288 16.7538 9.16669 15.8333 9.16669Z'
					stroke='currentColor'
					strokeWidth={2}
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M5.83325 9.16669V5.83335C5.83325 4.72828 6.27224 3.66848 7.05364 2.88708C7.83504 2.10567 8.89485 1.66669 9.99992 1.66669C11.105 1.66669 12.1648 2.10567 12.9462 2.88708C13.7276 3.66848 14.1666 4.72828 14.1666 5.83335V9.16669'
					stroke='currentColor'
					strokeWidth={2}
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</g>
		</svg>
	);
}

export { LockSVG };
