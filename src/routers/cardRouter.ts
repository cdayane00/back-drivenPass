import { Router } from 'express';
import validadeSchemaMiddleware from '../middlewares/validateSchemaMiddleware.js';
import validateBearerTokenMiddleware from '../middlewares/validateBearerTokenMiddleware.js';
import createCardSchema from '../schemas/cardSchemas/createCardSchema.js';
import getAllCardsSchema from '../schemas/cardSchemas/getAllCardsSchema.js';
import getCardByIdSchema from '../schemas/cardSchemas/getCardByIdSchema.js';
import deleteCardSchema from '../schemas/cardSchemas/deleteCardSchema.js';

import * as cardController from '../controllers/cardController.js';

const cardsRouter = Router();

cardsRouter.use(validateBearerTokenMiddleware);
cardsRouter.post(
	'/:userId/create',
	validadeSchemaMiddleware(createCardSchema),
	cardController.createCard
);

cardsRouter.get(
	'/:userId',
	validadeSchemaMiddleware(getAllCardsSchema),
	cardController.getAllCards
);
cardsRouter.get(
	'/:userId/:cardId',
	validadeSchemaMiddleware(getCardByIdSchema),
	cardController.getCardById
);

cardsRouter.delete(
	'/:userId/:cardId',
	validadeSchemaMiddleware(deleteCardSchema),
	cardController.deleteCard
);

export default cardsRouter;