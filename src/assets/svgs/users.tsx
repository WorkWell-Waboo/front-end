import type { SVGProps } from 'react';

function UsersSVG(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			width={30}
			height={30}
			viewBox='0 0 30 30'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<title>User Icon</title>
			<path
				d='M20 25V23C20 21.9391 19.5786 20.9217 18.8284 20.1716C18.0783 19.4214 17.0609 19 16 19H8C6.93913 19 5.92172 19.4214 5.17157 20.1716C4.42143 20.9217 4 21.9391 4 23V25'
				stroke='currentColor'
				strokeWidth={2}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M12 15C14.2091 15 16 13.2091 16 11C16 8.79086 14.2091 7 12 7C9.79086 7 8 8.79086 8 11C8 13.2091 9.79086 15 12 15Z'
				stroke='currentColor'
				strokeWidth={2}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M26 25V23C25.9993 22.1137 25.7044 21.2528 25.1614 20.5523C24.6184 19.8519 23.8581 19.3516 23 19.13'
				stroke='currentColor'
				strokeWidth={2}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M19 7.13C19.8604 7.35031 20.623 7.85071 21.1676 8.55232C21.7122 9.25392 22.0078 10.1168 22.0078 11.005C22.0078 11.8932 21.7122 12.7561 21.1676 13.4577C20.623 14.1593 19.8604 14.6597 19 14.88'
				stroke='currentColor'
				strokeWidth={2}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
}

export { UsersSVG };
