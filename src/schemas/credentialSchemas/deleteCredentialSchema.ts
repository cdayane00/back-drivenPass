import Joi from 'joi';

const deleteCredentialParamsSchema = Joi.object({
	userId: Joi.number().positive().required(),
	credentialId: Joi.number().positive().required(),
});

const deleteCredentialSchema = Joi.object({
	params: deleteCredentialParamsSchema,
}).options({ allowUnknown: true });

export default deleteCredentialSchema;