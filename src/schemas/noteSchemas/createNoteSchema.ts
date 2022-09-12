import Joi from 'joi';

const createNoteParamsSchema = Joi.object({
	userId: Joi.number().positive().required(),
});

const createNoteBodySchema = Joi.object({
	title: Joi.string().required(),
	content: Joi.string().min(50).max(1000).required(),
}).required();

const createNoteSchema = Joi.object({
	params: createNoteParamsSchema,
	body: createNoteBodySchema,
}).options({ allowUnknown: true });

export default createNoteSchema;