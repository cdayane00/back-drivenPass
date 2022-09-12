import Joi from 'joi';

const getAllNotesParamsSchema = Joi.object({
	userId: Joi.number().positive().required(),
});

const getAllNotesSchema = Joi.object({
	params: getAllNotesParamsSchema,
}).options({ allowUnknown: true });

export default getAllNotesSchema;