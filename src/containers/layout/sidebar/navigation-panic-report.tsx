import Link from 'next/link';

import { BellSVG } from '@/assets/svgs/bell';

import { cn } from '@/libraries/utils';

function NavigationPanicReport() {
	return (
		<Link href='/'>
			<li
				className={cn(
					'relative p-4 text-white bg-destructive! flex flex-row items-center justify-start gap-x-3 rounded-l-md',
					'hover:bg-white/20 cursor-pointer [&_svg]:size-7 [&_svg]:stroke-[1.5]',
				)}
			>
				<BellSVG />
				Botão do pânico
				<svg
					width='77'
					height='78'
					viewBox='0 0 77 78'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					className='fill-destructive absolute -top-[15.5px] -right-[1px] !size-4'
				>
					<title>fdsfsdf</title>
					<path d='M76.7558 0V0C72.3294 33.858 48.6914 62.0869 16.1374 72.3917L0 77.5H76.7558V0Z' />
				</svg>
				<svg
					width='77'
					height='78'
					viewBox='0 0 77 78'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					className='fill-destructive absolute -bottom-[15.5px] -right-[1px] !size-4'
				>
					<title>fsdfdsf</title>
					<path d='M76.7558 77.5V77.5C72.3294 43.642 48.6914 15.4131 16.1374 5.10825L0 0H76.7558V77.5Z' />
				</svg>
			</li>
		</Link>
	);
}

export { NavigationPanicReport };
