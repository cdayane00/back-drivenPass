import Joi from 'joi';

const getWifiByIdParamsSchema = Joi.object({
	userId: Joi.number().positive().required(),
	wifiId: Joi.number().positive().required(),
});

const getWifiByIdSchema = Joi.object({
	params: getWifiByIdParamsSchema,
}).options({ allowUnknown: true });

export default getWifiByIdSchema;