import * as cardRepository from '../repositories/cardRepository.js';
import * as userRepository from '../repositories/userRepository.js';
import { CardData } from '../interfaces/cardsInterface.js';
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

export const cardTitleExist = async (title: string, userId: number) => {
	const card = await cardRepository.getByTitle(title, userId);
	if (card) {
		throw new AppError(
			'card title already exist',
			409,
			'card title already exist',
			'Ensure that the card title is unique'
		);
	}
};

export const createCard = async (cardData: CardData) => {
	const { password, securityCode } = cardData;
	const encryptedPassword = cryptrEncryptData(password);
	const encryptedSecurityCode = cryptrEncryptData(securityCode);
	await cardRepository.create({
		...cardData,
		password: encryptedPassword,
		securityCode: encryptedSecurityCode,
	});
};

export const getAllCards = async (userId: number) => {
	const cards = await cardRepository.getAll(userId);
	if (!cards) {
		throw new AppError(
			'No Cards found',
			404,
			'No Cards found',
			'Ensure that the user has Cards'
		);
	}
	const cardsWithDecryptedPassword = cards.map((card) => {
		const { password, securityCode } = card;
		const decryptedPassword = cryptrDecryptData(password);
		const decryptedSecurityCode = cryptrDecryptData(securityCode);
		return {
			...card,
			password: decryptedPassword,
			securityCode: decryptedSecurityCode,
		};
	});
	return cardsWithDecryptedPassword;
};

export const getCardById = async (userId: number, cardId: number) => {
	const card = await cardRepository.getById(cardId);
	if (!card) {
		throw new AppError(
			'Card not found',
			404,
			'Card not found',
			'Ensure that the Card exists'
		);
	}
	if (card.userId !== userId) {
		throw new AppError(
			'Unauthorized acess Card',
			401,
			'Unauthorized acess Card',
			'Ensure that the Card belongs to the user'
		);
	}
	const { password, securityCode } = card;
	const decryptedPassword = cryptrDecryptData(password);
	const decryptedSecurityCode = cryptrDecryptData(securityCode);
	return {
		...card,
		password: decryptedPassword,
		securityCode: decryptedSecurityCode,
	};
};

export const cardEligibilityForDelete = async (
	userId: number,
	cardId: number
) => {
	const card = await cardRepository.getById(cardId);
	if (!card) {
		throw new AppError(
			'card not found',
			404,
			'card not found',
			'Ensure that the card exists'
		);
	}
	if (card.userId !== userId) {
		throw new AppError(
			'Unauthorized acess card',
			401,
			'Unauthorized acess card',
			'Ensure that the card belongs to the user'
		);
	}
};

export const deleteCard = async (cardId: number) => {
	await cardRepository.deleteById(cardId);
};