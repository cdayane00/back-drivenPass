import Joi from 'joi';

const deleteWifiParamsSchema = Joi.object({
	userId: Joi.number().positive().required(),
	wifiId: Joi.number().positive().required(),
});

const deleteWifiSchema = Joi.object({
	params: deleteWifiParamsSchema,
}).options({ allowUnknown: true });

export default deleteWifiSchema;