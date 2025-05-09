import type { SVGProps } from 'react';

function ReportSVG(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			width={30}
			height={30}
			viewBox='0 0 30 30'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<title>Report Icon</title>
			<path
				d='M11.25 21.25H8.75V12.5H11.25V21.25ZM16.25 21.25H13.75V8.75H16.25V21.25ZM21.25 21.25H18.75V16.25H21.25V21.25ZM23.75 23.75H6.25V6.25H23.75V23.875M23.75 3.75H6.25C4.875 3.75 3.75 4.875 3.75 6.25V23.75C3.75 25.125 4.875 26.25 6.25 26.25H23.75C25.125 26.25 26.25 25.125 26.25 23.75V6.25C26.25 4.875 25.125 3.75 23.75 3.75Z'
				fill='currentColor'
			/>
		</svg>
	);
}

export { ReportSVG };
