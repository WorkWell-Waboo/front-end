import { ChangeProfile } from '@/containers/layout/change-profile';
import { Header } from '@/containers/layout/header';
import { Sidebar } from '@/containers/layout/sidebar';
import { cookies } from 'next/headers';
import { Fragment } from 'react';

function ApplicationLayoutRoot({ children }: React.PropsWithChildren) {
	async function getCookies() {
		'use server';

		return cookies();
	}

	return (
		<Fragment>
			<ChangeProfile cookies={getCookies()} />
			<section className='grid grid-cols-[256px_calc(100%-256px)] min-h-dvh'>
				<Sidebar cookies={getCookies()} />
				<main>
					<Header />
					{children}
				</main>
			</section>
		</Fragment>
	);
}

export default ApplicationLayoutRoot;
