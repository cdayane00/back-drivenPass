import { Router } from 'express';
import validadeSchemaMiddleware from '../middlewares/validateSchemaMiddleware.js';
import validateBearerTokenMiddleware from '../middlewares/validateBearerTokenMiddleware.js';
import createNoteSchema from '../schemas/noteSchemas/createNoteSchema.js';
import getAllNotesSchema from '../schemas/noteSchemas/getAllNotesSchema.js';
import getNoteByIdSchema from '../schemas/noteSchemas/getNoteByIdSchema.js';
import deleteNoteSchema from '../schemas/noteSchemas/deleteNoteSchema.js';
import * as noteController from '../controllers/noteController.js';

const notesRouter = Router();

notesRouter.use(validateBearerTokenMiddleware);
notesRouter.post(
	'/:userId/create',
	validadeSchemaMiddleware(createNoteSchema),
	noteController.createNote
);

notesRouter.get(
	'/:userId',
	validadeSchemaMiddleware(getAllNotesSchema),
	noteController.getAllNotes
);
notesRouter.get(
	'/:userId/:noteId',
	validadeSchemaMiddleware(getNoteByIdSchema),
	noteController.getNotesById
);

notesRouter.delete(
	'/:userId/:noteId',
	validadeSchemaMiddleware(deleteNoteSchema),
	noteController.deleteNote
);

export default notesRouter;