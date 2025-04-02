'use client';

import { Button } from '@/components/ui/button';

import { LogOutIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

function Header() {
	const router = useRouter();

	function handler() {
		const name = 'token';

		document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Strict; Secure`;

		router.push('/');
		router.refresh();
	}

	return (
		<Button className='absolute top-2 right-2 z-10' onClick={handler}>
			<LogOutIcon /> Deslogar
		</Button>
	);
}

export { Header };
