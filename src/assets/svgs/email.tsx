import type { SVGProps } from 'react';

function EmailSVG(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			width={18}
			height={18}
			viewBox='0 0 18 18'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<title>Email Icon</title>
			<g>
				<path
					d='M1.21875 7.00928C1.21898 6.8592 1.25773 6.71168 1.33128 6.58086C1.40483 6.45003 1.51073 6.34027 1.63883 6.26208L9.11168 1.6947L16.5845 6.26208C16.7126 6.34027 16.8185 6.45003 16.8921 6.58086C16.9656 6.71168 17.0044 6.8592 17.0046 7.00928V15.7266C17.0046 15.9592 16.9122 16.1822 16.7478 16.3467C16.5833 16.5112 16.3602 16.6036 16.1276 16.6036H2.09574C1.86315 16.6036 1.64008 16.5112 1.47562 16.3467C1.31115 16.1822 1.21875 15.9592 1.21875 15.7266V7.00928Z'
					stroke='currentColor'
					strokeWidth={1.75399}
				/>
				<path
					d='M1.21875 7.3952L9.11168 12.2187L17.0046 7.3952'
					stroke='currentColor'
					strokeWidth={1.75399}
					strokeLinecap='round'
				/>
			</g>
		</svg>
	);
}

export { EmailSVG };
