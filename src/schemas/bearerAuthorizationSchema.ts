import Joi from 'joi';

const bearerAuthorizationSchema = Joi.object({
	authorization: Joi.string()
		.pattern(/^Bearer\s[\w-]*\.[\w-]*\.[\w-]*$/)
		.required(),
}).options({ allowUnknown: true });

export default bearerAuthorizationSchema;