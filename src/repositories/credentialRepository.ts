import { CredentialData } from '../interfaces/credentialsInterface.js';
import prisma from '../config/database.js';

export const getByTitle = async (title: string, userId: number) => {
	return prisma.credential.findFirst({
		where: {
			title: {
				equals: title,
				mode: 'insensitive',
			},
			userId,
		},
	});
};

export const create = async (CredentialData: CredentialData) => {
	return prisma.credential.create({
		data: CredentialData,
	});
};

export const getAll = async (userId: number) => {
	return prisma.credential.findMany({ where: { userId } });
};

export const getById = async (credentialId: number) => {
	return prisma.credential.findUnique({ where: { id: credentialId } });
};

export const deleteById = async (credentialId: number) => {
	return prisma.credential.delete({ where: { id: credentialId } });
};