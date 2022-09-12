import Joi from 'joi';

const createWifiParamsSchema = Joi.object({
	userId: Joi.number().positive().required(),
});

const createWifiBodySchema = Joi.object({
	title: Joi.string().required(),
	name: Joi.string().required(),
	password: Joi.string().required(),
}).required();

const createWifiSchema = Joi.object({
	params: createWifiParamsSchema,
	body: createWifiBodySchema,
}).options({ allowUnknown: true });

export default createWifiSchema;