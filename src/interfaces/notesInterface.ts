import { Note } from '@prisma/client';

export type NoteBodyData = Omit<Note, 'id' | 'createdAt' | 'userId'>;

export type NoteData = Omit<Note, 'id' | 'createdAt'>;