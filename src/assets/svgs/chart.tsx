import type { SVGProps } from 'react';

function ChartSVG(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			width={30}
			height={31}
			viewBox='0 0 30 31'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<title>Chart Icon</title>
			<path
				d='M5.3073 25.0172C5.5927 25.3026 5.94329 25.4482 6.395 25.4482H25.125V25.1982H6.39494H6.39375V24.6982L5.3073 25.0172ZM5.3073 25.0172C5.02194 24.7318 4.87573 24.3807 4.875 23.9279V5.19824M5.3073 25.0172L4.875 5.19824M4.875 5.19824H5.125H4.875ZM9.73125 21.0732V12.9382H11.2313V21.0732H9.73125ZM15.3563 21.0732V6.68824H16.8563V21.0732H15.3563ZM20.9813 21.0732V17.9382H22.4813V21.0732H20.9813Z'
				fill='currentColor'
				stroke='currentColor'
			/>
		</svg>
	);
}

export { ChartSVG };
