import Joi from 'joi';

const getCredentialByIdParamsSchema = Joi.object({
	userId: Joi.number().positive().required(),
	credentialId: Joi.number().positive().required(),
});

const getCredentialByIdSchema = Joi.object({
	params: getCredentialByIdParamsSchema,
}).options({ allowUnknown: true });

export default getCredentialByIdSchema;