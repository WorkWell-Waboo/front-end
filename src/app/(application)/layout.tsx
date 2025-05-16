import { ChangeProfile } from '@/containers/layout/change-profile';
import { Header } from '@/containers/layout/header';
import { Sidebar } from '@/containers/layout/sidebar';
import { decodeJwt } from 'jose';
import { cookies } from 'next/headers';
import { Fragment } from 'react';

async function ApplicationLayoutRoot({ children }: React.PropsWithChildren) {
  const auth = (await cookies()).get('token')?.value as string;

  const payload = decodeJwt(auth);

  const role = payload.role;

  return (
    <Fragment>
      <ChangeProfile role={role} />
      <section className="grid grid-cols-[256px_calc(100%-256px)] min-h-dvh max-w-[1920px] m-auto">
        <Sidebar role={role} />
        <main className="overflow-auto min-h-dvh">
          <Header />
          {children}
        </main>
      </section>
    </Fragment>
  );
}

export default ApplicationLayoutRoot;
