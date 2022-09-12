import { Request, Response } from 'express';
import { NoteData, NoteBodyData } from '../interfaces/notesInterface.js';
import * as noteService from '../services/noteService.js';

export const createNote = async (req: Request, res: Response) => {
	const userId = Number(req.params.userId);
	const noteBodyData: NoteBodyData = req.body;
	const noteData: NoteData = { ...noteBodyData, userId };
	const { title } = noteData;
	await noteService.userIdExist(userId);
	await noteService.noteTitleExist(title, userId);
	await noteService.createNote(noteData);
	res.status(201).json({ message: 'Note created' });
};

export const getAllNotes = async (req: Request, res: Response) => {
	const userId = Number(req.params.userId);
	await noteService.userIdExist(userId);
	const notes = await noteService.getAllNotes(userId);
	res.status(200).json({ notes });
};

export const getNotesById = async (req: Request, res: Response) => {
	const userId = Number(req.params.userId);
	const noteId = Number(req.params.noteId);
	await noteService.userIdExist(userId);
	const note = await noteService.getNoteById(userId, noteId);
	res.status(200).json({ note });
};

export const deleteNote = async (req: Request, res: Response) => {
	const userId = Number(req.params.userId);
	const noteId = Number(req.params.noteId);
	await noteService.noteEligibilityForDelete(userId, noteId);
	await noteService.deleteNote(noteId);
	res.status(200).json({ message: 'Note deleted' });
};