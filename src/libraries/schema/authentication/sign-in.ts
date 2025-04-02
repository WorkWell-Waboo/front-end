import { z } from 'zod';

const SchemaSignIn = z.object({
	email: z
		.string({
			required_error: 'Campo obrigatório',
			invalid_type_error: 'Campo inválido',
		})
		.email('E-mail inválido'),
	password: z
		.string({
			required_error: 'Campo obrigatório',
			invalid_type_error: 'Campo inválido',
		})
		.min(1, 'Pelo menos 1 caracter'),
});

export { SchemaSignIn };
