import type { z } from 'zod';

import type { SchemaSignIn } from '@/libraries/schema/authentication/sign-in';

type SignIn = z.infer<typeof SchemaSignIn>;

export type { SignIn };
