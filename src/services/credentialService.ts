import * as credentialRepository from '../repositories/credentialRepository.js';
import * as userRepository from '../repositories/userRepository.js';
import { CredentialData } from '../interfaces/credentialsInterface.js';
import { cryptrEncryptData, cryptrDecryptData } from '../utils/cryptr.js';

import AppError from '../config/error.js';

export const userIdExist = async (userId: number) => {
	const user = await userRepository.getUserById(userId);
	if (!user) {
		throw new AppError(
			'User not found',
			404,
			'User not found',
			'Ensure that the user exists'
		);
	}
};

export const credentialTitleExist = async (title: string, userId: number) => {
	const credential = await credentialRepository.getByTitle(title, userId);
	if (credential) {
		throw new AppError(
			'Credential title already exist',
			409,
			'Credential title already exist',
			'Ensure that the credential title is unique'
		);
	}
};

export const createCredential = async (CredentialData: CredentialData) => {
	const { password } = CredentialData;
	const encryptedPassword = cryptrEncryptData(password);
	await credentialRepository.create({
		...CredentialData,
		password: encryptedPassword,
	});
};

export const getAllCredentials = async (userId: number) => {
	const credentials = await credentialRepository.getAll(userId);
	if (!credentials) {
		throw new AppError(
			'No credentials found',
			404,
			'No credentials found',
			'Ensure that the user has credentials'
		);
	}
	const credentialsWithDecryptedPassword = credentials.map((credential) => {
		const { password } = credential;
		const decryptedPassword = cryptrDecryptData(password);
		return { ...credential, password: decryptedPassword };
	});
	return credentialsWithDecryptedPassword;
};

export const getCredentialById = async (
	userId: number,
	credentialId: number
) => {
	const credential = await credentialRepository.getById(credentialId);
	if (!credential) {
		throw new AppError(
			'Credential not found',
			404,
			'Credential not found',
			'Ensure that the credential exists'
		);
	}
	if (credential.userId !== userId) {
		throw new AppError(
			'Unauthorized acess credential',
			401,
			'Unauthorized acess credential',
			'Ensure that the credential belongs to the user'
		);
	}
	const { password } = credential;
	const decryptedPassword = cryptrDecryptData(password);
	return { ...credential, password: decryptedPassword };
};

export const credentialEligibilityForDelete = async (
	userId: number,
	credentialId: number
) => {
	const credential = await credentialRepository.getById(credentialId);
	if (!credential) {
		throw new AppError(
			'Credential not found',
			404,
			'Credential not found',
			'Ensure that the credential exists'
		);
	}
	if (credential.userId !== userId) {
		throw new AppError(
			'Unauthorized acess credential',
			401,
			'Unauthorized acess credential',
			'Ensure that the credential belongs to the user'
		);
	}
};

export const deleteCredential = async (credentialId: number) => {
	await credentialRepository.deleteById(credentialId);
};