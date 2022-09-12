import Joi from 'joi';

const signInBodySchema = Joi.object({
	email: Joi.string().email().required(),
	password: Joi.string().required(),
}).required();

const signInSchema = Joi.object({
	body: signInBodySchema,
}).options({ allowUnknown: true });

const signUpBodySchema = Joi.object({
	name: Joi.string().required(),
	email: Joi.string().email().required(),
	password: Joi.string().min(10).required(),
	confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
}).required();

const signUpSchema = Joi.object({
	body: signUpBodySchema,
}).options({ allowUnknown: true });

export { signInSchema,signUpSchema };