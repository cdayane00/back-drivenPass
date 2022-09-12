import Joi from 'joi';

const getCardByIdParamsSchema = Joi.object({
	userId: Joi.number().positive().required(),
	cardId: Joi.number().positive().required(),
});

const getCardByIdSchema = Joi.object({
	params: getCardByIdParamsSchema,
}).options({ allowUnknown: true });

export default getCardByIdSchema;