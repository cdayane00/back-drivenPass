import Joi from 'joi';

const createCredentialParamsSchema = Joi.object({
	userId: Joi.number().positive().required(),
});

const createCredentialBodySchema = Joi.object({
	url: Joi.string().uri().required(),
	username: Joi.string().required(),
	password: Joi.string().required(),
	title: Joi.string().required(),
}).required();

const createCredentialSchema = Joi.object({
	params: createCredentialParamsSchema,
	body: createCredentialBodySchema,
}).options({ allowUnknown: true });

export default createCredentialSchema;