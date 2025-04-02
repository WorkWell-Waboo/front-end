import type { Role } from './authentication/role';

declare module '*.css';

declare module 'jose' {
	export interface JWTPayload extends JWTPayload {
		role: Role;
	}
}
