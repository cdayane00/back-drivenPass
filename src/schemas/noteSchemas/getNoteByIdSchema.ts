import Joi from 'joi';

const getNoteByIdParamsSchema = Joi.object({
	userId: Joi.number().positive().required(),
	noteId: Joi.number().positive().required(),
});

const getNoteByIdSchema = Joi.object({
	params: getNoteByIdParamsSchema,
}).options({ allowUnknown: true });

export default getNoteByIdSchema;