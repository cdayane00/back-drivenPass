import { Credential } from '@prisma/client';

export type CredentialBodyData = Omit<
	Credential,
	'id' | 'createdAt' | 'userId'
>;
export type CredentialData = Omit<Credential, 'id' | 'createdAt'>;