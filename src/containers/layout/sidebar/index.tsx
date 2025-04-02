'use client';

import { usePathname } from 'next/navigation';
import { Navigation, type NavigationProps } from './navigation';

import { LogoWhiteSVG } from '@/assets/svgs/logo-white';

import type { Role } from '@/@types/authentication/role';
import { navigationAdministrator } from '@/data/navigation/administrator';
import { navigationCollaborator } from '@/data/navigation/collaborator';
import { navigationManager } from '@/data/navigation/manager';
import { navigationSpecialist } from '@/data/navigation/specialist';
import { decodeJwt } from 'jose';
import type { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';
import Link from 'next/link';
import { use } from 'react';
import { NavigationPanicReport } from './navigation-panic-report';
import { NavigationSOS } from './navigation-sos';

function Sidebar({
	cookies,
}: {
	cookies: Promise<ReadonlyRequestCookies>;
}) {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	const auth = (use(cookies) as unknown as any[]).find(
		(e) => e[0] === 'token',
	)[1].value as string;

	const payload = decodeJwt(auth);

	const role = payload.role;

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
