'use client';

import type { Role } from '@/@types/authentication/role';
import type { SignIn } from '@/@types/authentication/sign-in';
import { EmailSVG } from '@/assets/svgs/email';
import { LockSVG } from '@/assets/svgs/lock';
import { LogoDarkSVG } from '@/assets/svgs/logo-dark';
import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { SchemaSignIn } from '@/libraries/schema/authentication/sign-in';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignJWT } from 'jose';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const profiles: {
	role: Role;
	email: string;
	password: string;
}[] = [
	{
		role: 'administrator',
		email: 'administrator@workwell.pt',
		password: 'administrator',
	},
	{
		role: 'collaborator',
		email: 'collaborator@workwell.pt',
		password: 'collaborator',
	},
	{
		role: 'manager',
		email: 'manager@workwell.pt',
		password: 'manager',
	},
	{
		role: 'specialist',
		email: 'specialist@workwell.pt',
		password: 'specialist',
	},
];

function AuthSignInPage() {
	const router = useRouter();
	const [role, setRole] = useState<Role | undefined>(undefined);

	const form = useForm<SignIn>({
		mode: 'all',
		criteriaMode: 'all',
		reValidateMode: 'onChange',
		resolver: zodResolver(SchemaSignIn),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const isValid = form.formState.isValid;

	async function handler(props: SignIn) {
		const name = 'token';
		const value = await new SignJWT({
			role: role as Role,
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

	useEffect(() => {
		const profile = profiles.find((e) => e.role === role);

		form.reset({
			email: profile?.email,
			password: profile?.password,
		});
	}, [role, form]);

	return (
		<main className='flex flex-col items-center justify-start min-h-dvh pt-28 space-y-6'>
			<Select
				value={role as string}
				onValueChange={(value: Role) => setRole(value)}
			>
				<SelectTrigger className='absolute top-4 right-4'>
					<SelectValue placeholder='Selecionar perfil' />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value='administrator'>Administrador</SelectItem>
					<SelectItem value='collaborator'>Colaborador</SelectItem>
					<SelectItem value='manager'>Gestor de Empresa</SelectItem>
					<SelectItem value='specialist'>Especialista</SelectItem>
				</SelectContent>
			</Select>
			<LogoDarkSVG />
			<h1 className='text-primary font-extrabold text-4xl'>
				Pronto para começar?
			</h1>
			<div className='leading-5 text-center font-medium text-base'>
				<span className='block'>Estamos felizes em recebê-lo/a de volta.</span>
				<span className='block'>Faça o seu login e continue!</span>
			</div>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit((props) => handler(props))}
					className='w-100 space-y-4 mt-6'
				>
					<FormField
						control={form.control}
						name='email'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										{...field}
										readOnly
										before={{
											content: <EmailSVG className='text-black opacity-50' />,
											variant: 'link',
										}}
										classNameContainer='rounded-full h-15 px-2 border-0'
										className='placeholder:text-black/50 placeholder:font-semibold'
										placeholder='Email'
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='password'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										{...field}
										readOnly
										before={{
											content: <LockSVG className='text-black opacity-50' />,
											variant: 'link',
										}}
										classNameContainer='rounded-full h-15 px-2 border-0'
										className='placeholder:text-black/50 placeholder:font-semibold'
										placeholder='Senha'
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Link
						href='/forgot'
						className='text-muted-foreground px-6 block text-base font-normal hover:underline'
					>
						Esqueceu sua senha?
					</Link>
					<Button
						disabled={!isValid}
						className='w-full rounded-full py-8 font-semibold text-base'
						size='lg'
					>
						Fazer Login
					</Button>
				</form>
			</Form>
			<span className='text-muted-foreground'>
				Não tem uma conta?{' '}
				<Link href='/sign-up' className='text-primary font-semibold'>
					Inscreva-se
				</Link>
			</span>
			<span className='absolute bottom-4 left-auto right-auto text-muted-foreground'>
				Política de privacidade | Termos de uso
			</span>
		</main>
	);
}

export default AuthSignInPage;
