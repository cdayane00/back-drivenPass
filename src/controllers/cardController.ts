import { Request, Response } from 'express';
import { CardData, CardBodyData } from '../interfaces/cardsInterface.js';
import * as cardService from '../services/cardService.js';

export const createCard = async (req: Request, res: Response) => {
	const userId = Number(req.params.userId);
	const cardBodyData: CardBodyData = req.body;
	const cardData: CardData = { ...cardBodyData, userId };
	const { title } = cardData;
	await cardService.userIdExist(userId);
	await cardService.cardTitleExist(title, userId);
	await cardService.createCard(cardData);
	res.status(201).json({ message: 'card created' });
};

export const getAllCards = async (req: Request, res: Response) => {
	const userId = Number(req.params.userId);
	await cardService.userIdExist(userId);
	const cards = await cardService.getAllCards(userId);
	res.status(200).json({ cards });
};

export const getCardById = async (req: Request, res: Response) => {
	const userId = Number(req.params.userId);
	const cardId = Number(req.params.cardId);
	await cardService.userIdExist(userId);
	const card = await cardService.getCardById(userId, cardId);
	res.status(200).json({ card });
};

export const deleteCard = async (req: Request, res: Response) => {
	const userId = Number(req.params.userId);
	const cardId = Number(req.params.cardId);
	await cardService.cardEligibilityForDelete(userId, cardId);
	await cardService.deleteCard(cardId);
	res.status(200).json({ message: 'Card deleted' });
};