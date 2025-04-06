import type { Role } from './authentication/role';

declare module '*.css';
declare module '*.png';
declare module '*.svg';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.webp';

declare module 'jose' {
	export interface JWTPayload extends JWTPayload {
		role: Role;
	}
}
