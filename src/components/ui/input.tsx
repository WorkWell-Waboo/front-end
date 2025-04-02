'use client';

import type { VariantProps } from 'class-variance-authority';

import { useState } from 'react';

import { XIcon } from 'lucide-react';

import { Button, type buttonVariants } from './button';

import { cn } from '@/libraries/utils';

function Input({
	classNameContainer,
	className,
	type,
	before,
	after,
	...props
}: React.ComponentProps<'input'> &
	Partial<{
		classNameContainer?: string;
		before: {
			variant?: VariantProps<typeof buttonVariants>['variant'];
			content: React.JSX.Element;
			onClick?: () => void;
		};
		after: {
			variant?: VariantProps<typeof buttonVariants>['variant'];
			content: React.JSX.Element;
			onClick?: () => void;
		};
	}>) {
	const [value, setValue] = useState<string>(
		props.defaultValue?.toString() || props.value?.toString() || '',
	);

	return (
		<div
			className={cn(
				'group relative overflow-hidden flex flex-row items-center justify-between gap-x-0 border-border h-11 w-full min-w-0 rounded-sm border bg-white [&_input]:px-3 [&_input]:h-full transition-[color,box-shadow] has-[input:disabled]:pointer-events-none has-[input:disabled]:cursor-not-allowed has-[input:disabled]:opacity-50',
				'has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-ring/50 has-[input:focus-visible]:ring-[3px]',
				'has-[input[aria-invalid="true"]]:ring-destructive/20 dark:has-[input[aria-invalid="true"]]:ring-destructive/40 has-[input[aria-invalid="true"]]:border-destructive',
				!!before && '[&_input]:pl-2',
				!!after && '[&_input]:pr-2',
				classNameContainer,
			)}
		>
			{!!before && (
				<Button
					variant={before.variant || 'default'}
					onClick={before.onClick}
					className='w-12 h-full rounded-none [&_svg]:!size-5'
				>
					{before.content}
				</Button>
			)}
			<input
				{...props}
				type={type}
				data-slot='input'
				className={cn(
					'w-full file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-white text-base outline-none file:inline-flex file:h-7 file:border-0 file:bg-input file:text-sm file:font-medium',
					!!value.length && '!pr-8',
					className,
				)}
				onChange={(event) => [
					props.onChange?.(event),
					setValue(event.target.value),
				]}
			/>
			{!!value.length && (
				<XIcon
					// @ts-ignore
					onClick={() => [props.onChange?.(''), setValue('')]}
					className={cn(
						'absolute size-4 right-2 bg-muted rounded-full text-black/50 cursor-pointer p-px opacity-60 hover:opacity-100',
						!!after && 'right-13',
					)}
				/>
			)}
			{!!after && (
				<Button
					variant={after.variant || 'default'}
					onClick={after.onClick}
					className='w-12 h-full rounded-none [&_svg]:!size-5'
				>
					{after.content}
				</Button>
			)}
		</div>
	);
}

export { Input };
