import Joi from 'joi';

const getAllCredentialsParamsSchema = Joi.object({
	userId: Joi.number().positive().required(),
});

const getAllCredentialsSchema = Joi.object({
	params: getAllCredentialsParamsSchema,
}).options({ allowUnknown: true });

export default getAllCredentialsSchema;