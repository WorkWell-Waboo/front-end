import type { SVGProps } from 'react';

function LayersSVG(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			width={30}
			height={30}
			viewBox='0 0 30 30'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<title>Layers Icon</title>
			<path
				d='M15 2.5L2.5 8.75L15 15L27.5 8.75L15 2.5Z'
				stroke='currentColor'
				strokeWidth={2}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M2.5 21.25L15 27.5L27.5 21.25'
				stroke='currentColor'
				strokeWidth={2}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M2.5 15L15 21.25L27.5 15'
				stroke='currentColor'
				strokeWidth={2}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
}

export { LayersSVG };
