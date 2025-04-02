'use client';

import type { Role } from '@/@types/authentication/role';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { LogoWhiteSVG } from '@/assets/svgs/logo-white';

import { Navigation, type NavigationProps } from './navigation';
import { NavigationPanicReport } from './navigation-panic-report';
import { NavigationSOS } from './navigation-sos';

import { navigationAdministrator } from '@/data/navigation/administrator';
import { navigationCollaborator } from '@/data/navigation/collaborator';
import { navigationManager } from '@/data/navigation/manager';
import { navigationSpecialist } from '@/data/navigation/specialist';

function Sidebar({ role }: { role: Role }) {
	const pathname = usePathname();

	const navigation: Record<Role, Omit<NavigationProps, 'active'>[]> = {
		administrator: navigationAdministrator,
		collaborator: navigationCollaborator,
		manager: navigationManager,
		specialist: navigationSpecialist,
	};

	const items = navigation[role];

	return (
		<aside className='bg-sidebar pl-4 pb-10 overflow-hidden flex flex-col justify-between'>
			<div>
				<Link href='/dashboard'>
					<LogoWhiteSVG className='w-52 mt-5' />
				</Link>
				<nav className='list-none mt-5'>
					{items.map((item, index) => (
						<Navigation
							key={index.toString()}
							{...item}
							active={pathname.includes(item.href)}
						/>
					))}
				</nav>
			</div>
			{role === 'collaborator' && <NavigationSOS />}
			{role === 'specialist' && <NavigationPanicReport />}
		</aside>
	);
}

export { Sidebar };
