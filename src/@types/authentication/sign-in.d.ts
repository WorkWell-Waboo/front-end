import type { SchemaSignIn } from '@/libraries/schema/authentication/sign-in';
import type { z } from 'zod';

type SignIn = z.infer<typeof SchemaSignIn>;

export type { SignIn };
