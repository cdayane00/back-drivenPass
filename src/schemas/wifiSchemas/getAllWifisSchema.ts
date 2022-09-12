import Joi from 'joi';

const getAllWifisParamsSchema = Joi.object({
	userId: Joi.number().positive().required(),
});

const getAllWifisSchema = Joi.object({
	params: getAllWifisParamsSchema,
}).options({ allowUnknown: true });

export default getAllWifisSchema;