import Joi from 'joi';

const deleteNoteParamsSchema = Joi.object({
	userId: Joi.number().positive().required(),
	noteId: Joi.number().positive().required(),
});

const deleteNoteSchema = Joi.object({
	params: deleteNoteParamsSchema,
}).options({ allowUnknown: true });

export default deleteNoteSchema;