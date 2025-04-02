import Link from 'next/link';

import { cn } from '@/libraries/utils';

export type NavigationProps = {
	active?: boolean;
	icon: React.ElementType;
	label: string;
	href: string;
};

function Navigation({ active, icon: Icon, label, href }: NavigationProps) {
	return (
		<Link href={href}>
			<li
				data-active={active}
				className={cn(
					'relative p-4 text-white flex flex-row items-center justify-start gap-x-3',
					'[&_svg]:size-7 [&_svg]:stroke-[1.5] data-[active=true]:[&_svg]:stroke-[1]',
					'rounded-l-md data-[active=true]:bg-background data-[active=true]:text-sidebar data-[active=true]:font-semibold',
					'hover:bg-white/20 cursor-pointer group',
				)}
			>
				<Icon />
				{label}
				<svg
					width='77'
					height='78'
					viewBox='0 0 77 78'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					className='hidden fill-background absolute -top-[15.5px] -right-[1px] !size-4 group-[[data-active=true]]:block'
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
					className='hidden fill-background absolute -bottom-[15.5px] -right-[1px] !size-4 group-[[data-active=true]]:block'
				>
					<title>fsdfdsf</title>
					<path d='M76.7558 77.5V77.5C72.3294 43.642 48.6914 15.4131 16.1374 5.10825L0 0H76.7558V77.5Z' />
				</svg>
			</li>
		</Link>
	);
}

export { Navigation };
