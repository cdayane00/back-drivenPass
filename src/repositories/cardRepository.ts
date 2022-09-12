import { CardData } from '../interfaces/cardsInterface.js';
import prisma from '../config/database.js';

export const getByTitle = async (title: string, userId: number) => {
	return await prisma.card.findFirst({
		where: {
			title: {
				equals: title,
				mode: 'insensitive',
			},
			userId,
		},
	});
};

export const create = async (cardData: CardData) => {
	await prisma.card.create({
		data: cardData,
	});
};

export const getAll = async (userId: number) => {
	return await prisma.card.findMany({ where: { userId } });
};

export const getById = async (cardId: number) => {
	return await prisma.card.findUnique({ where: { id: cardId } });
};

export const deleteById = async (cardId: number) => {
	return prisma.card.delete({ where: { id: cardId } });
};