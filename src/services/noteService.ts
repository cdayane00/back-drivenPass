import * as noteRepository from '../repositories/noteRepository.js';
import * as userRepository from '../repositories/userRepository.js';
import { NoteData } from '../interfaces/notesInterface.js';

import AppError from '../config/error.js';

export const userIdExist = async (userId: number) => {
	const user = await userRepository.getUserById(userId);
	if (!user) {
		throw new AppError(
			'User not found',
			404,
			'User not found',
			'Ensure that the user exists'
		);
	}
};

export const noteTitleExist = async (title: string, userId: number) => {
	const note = await noteRepository.getByTitle(title, userId);
	if (note) {
		throw new AppError(
			'Note title already exist',
			409,
			'Note title already exist',
			'Ensure that the note title is unique'
		);
	}
};

export const createNote = async (NoteData: NoteData) => {
	await noteRepository.create(NoteData);
};

export const getAllNotes = async (userId: number) => {
	const notes = await noteRepository.getAll(userId);
	if (!notes) {
		throw new AppError(
			'No notes found',
			404,
			'No notes found',
			'Ensure that the user has notes'
		);
	}
	return notes;
};

export const getNoteById = async (userId: number, noteId: number) => {
	const note = await noteRepository.getById(noteId);
	if (!note) {
		throw new AppError(
			'note not found',
			404,
			'note not found',
			'Ensure that the note exists'
		);
	}
	if (note.userId !== userId) {
		throw new AppError(
			'Unauthorized acess note',
			401,
			'Unauthorized acess note',
			'Ensure that the note belongs to the user'
		);
	}
	return note;
};

export const noteEligibilityForDelete = async (
	userId: number,
	noteId: number
) => {
	const note = await noteRepository.getById(noteId);
	if (!note) {
		throw new AppError(
			'Note not found',
			404,
			'Note not found',
			'Ensure that the note exists'
		);
	}
	if (note.userId !== userId) {
		throw new AppError(
			'Unauthorized acess note',
			401,
			'Unauthorized acess note',
			'Ensure that the note belongs to the user'
		);
	}
};

export const deleteNote = async (noteId: number) => {
	await noteRepository.deleteById(noteId);
};