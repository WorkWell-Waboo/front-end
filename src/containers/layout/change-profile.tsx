'use client';

import type { Role } from '@/@types/authentication/role';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';

import { SignJWT } from 'jose';

function ChangeProfile({
	role: initial,
}: {
	role: Role;
}) {
	const router = useRouter();
	const [role, setRole] = useState<Role>(initial);

	async function handler(role: Role) {
		setRole(role);

		const name = 'token';
		const value = await new SignJWT({
			role: role,
		})
			.setProtectedHeader({ alg: 'HS256' })
			.setIssuedAt()
			.sign(new TextEncoder().encode('your-secret-key'));

		const date = new Date();
		date.setTime(date.getTime() + 1 * 24 * 60 * 60 * 1000);
		const expires = `expires=${date.toUTCString()}`;

		document.cookie = `${name}=${value}; ${expires}; path=/; SameSite=Strict; Secure`;

		router.push('/');
		router.refresh();
	}

	return (
		<Select
			value={role as string}
			onValueChange={(value: Role) => handler(value)}
		>
			<SelectTrigger className='fixed top-0 left-1/2 -translate-x-1/2 z-999 rounded-t-none bg-primary border-0 text-white [&_svg]:fill-white [&_svg]:opacity-100'>
				<SelectValue placeholder='Selecionar perfil' className='text-center' />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value='administrator'>Administrador</SelectItem>
				<SelectItem value='collaborator'>Colaborador</SelectItem>
				<SelectItem value='manager'>Gestor de Empresa</SelectItem>
				<SelectItem value='specialist'>Especialista</SelectItem>
			</SelectContent>
		</Select>
	);
}

export { ChangeProfile };
