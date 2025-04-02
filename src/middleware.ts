import type { Role } from '@/@types/authentication/role';

import { type NextRequest, NextResponse } from 'next/server';

import { decodeJwt } from 'jose';

const pathnameAuth = ['/sign-in', '/sign-up', '/forgot'];

const roles: Role[] = [
	'administrator',
	'collaborator',
	'manager',
	'specialist',
];

export default async function middleware(req: NextRequest) {
	const pathname = req.nextUrl.pathname;
	const auth = req.cookies.get('token')?.value;

	if (!auth && pathname === '/') {
		return NextResponse.redirect(new URL('/sign-in', req.url));
	}

	if (!auth && pathnameAuth.includes(pathname)) {
		return NextResponse.next();
	}

	if (
		!auth &&
		roles.some((role) => pathname.toLowerCase().includes(role.toLowerCase()))
	) {
		return NextResponse.rewrite(new URL('/not-found', req.url));
	}

	if (auth) {
		const payload = decodeJwt(auth);

		const role = payload.role;

		if (pathname === '/') {
			return NextResponse.redirect(
				new URL('/dashboard'.toLowerCase(), req.url),
			);
		}

		return NextResponse.rewrite(
			new URL(`/${role}${pathname}`.toLowerCase(), req.url),
		);
	}

	return NextResponse.next();
}

export const config = {
	matcher: [
		'/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
	],
};
