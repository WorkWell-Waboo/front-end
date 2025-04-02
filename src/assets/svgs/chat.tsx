import type { SVGProps } from 'react';

function ChatSVG(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			width={30}
			height={30}
			viewBox='0 0 30 30'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<title>Chat Icon</title>
			<g clipPath='url(#clip0_475_3462)'>
				<path
					d='M27.35 4.99982V5V20C27.35 20.6474 27.1214 21.1982 26.6601 21.6603C26.1989 22.1222 25.6484 22.3508 25.0002 22.35H25H7.5H7.43787L7.39393 22.3939L2.65 27.1379V5C2.65 4.35264 2.87894 3.80241 3.34098 3.34116C3.80316 2.87976 4.35356 2.65078 5.00018 2.65L25 2.65C25.6474 2.65 26.1981 2.87895 26.6602 3.34107C27.1223 3.80318 27.3508 4.35341 27.35 4.99982ZM27.5 5V20C27.5 20.6875 27.2554 21.2763 26.7663 21.7663C26.2771 22.2563 25.6883 22.5008 25 22.5L27.5 5ZM25 20.15H25.15V20V5V4.85H25H5H4.85V5V21.4062V21.7628L5.10489 21.5135L6.49867 20.15H25ZM17.35 15.15V17.35H7.65V15.15H17.35ZM22.35 13.6H7.65V11.4H22.35V13.6ZM22.35 9.85H7.65V7.65H22.35V9.85Z'
					fill='currentColor'
					stroke='currentColor'
					strokeWidth={0.3}
				/>
			</g>
			<defs>
				<clipPath id='clip0_475_3462'>
					<rect width={30} height={30} fill='currentColor' />
				</clipPath>
			</defs>
		</svg>
	);
}

export { ChatSVG };
