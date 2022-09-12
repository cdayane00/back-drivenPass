import Joi from 'joi';

const getAllCardsParamsSchema = Joi.object({
	userId: Joi.number().positive().required(),
});

const getAllCardsSchema = Joi.object({
	params: getAllCardsParamsSchema,
}).options({ allowUnknown: true });

export default getAllCardsSchema;