import type { SVGProps } from 'react';

function BusinessSVG(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			width={30}
			height={30}
			viewBox='0 0 30 30'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<title>Business Icon</title>
			<path
				d='M18.375 2.5C20.475 2.5 21.525 2.5 22.3275 2.925C23.0392 3.30434 23.6127 3.8989 23.9663 4.62375C24.375 5.455 24.375 6.54375 24.375 8.7225V21.2775C24.375 23.4562 24.375 24.545 23.9663 25.3775C23.6127 26.1023 23.0392 26.6969 22.3275 27.0762C21.525 27.5 20.475 27.5 18.375 27.5H11.625C9.525 27.5 8.475 27.5 7.6725 27.075C6.96083 26.6957 6.38726 26.1011 6.03375 25.3763C5.625 24.545 5.625 23.4562 5.625 21.2775V8.7225C5.625 6.54375 5.625 5.455 6.03375 4.6225C6.38747 3.89812 6.96102 3.30401 7.6725 2.925C8.475 2.5 9.525 2.5 11.625 2.5H18.375Z'
				stroke='currentColor'
				strokeWidth={1.875}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M11.875 26.25V19.375C11.875 18.712 12.1384 18.0761 12.6072 17.6072C13.0761 17.1384 13.712 16.875 14.375 16.875H15.625C16.288 16.875 16.9239 17.1384 17.3928 17.6072C17.8616 18.0761 18.125 18.712 18.125 19.375V26.25M12.5 7.5H10M12.5 12.5H10M20 7.5H17.5M20 12.5H17.5'
				stroke='currentColor'
				strokeWidth={1.875}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
}

export { BusinessSVG };
