import Joi from 'joi';

const deleteCardParamsSchema = Joi.object({
	userId: Joi.number().positive().required(),
	cardId: Joi.number().positive().required(),
});

const deleteCardSchema = Joi.object({
	params: deleteCardParamsSchema,
}).options({ allowUnknown: true });

export default deleteCardSchema;