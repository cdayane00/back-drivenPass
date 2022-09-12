
import { SignInData,UserDataBody } from '../interfaces/authInterface.js';
import { Request, Response } from 'express';
import * as authService from '../services/authService.js';

export const signIn = async (req: Request, res: Response) => {
	const signInData: SignInData = req.body;
	const token = await authService.signIn(signInData);
	res.status(200).json(token);
};

export const signUp = async (req: Request, res: Response) => {
	const { name, email, password }: UserDataBody = req.body;
	const userData = { name, email, password };
	await authService.signUp(userData);
	res.status(201).json({ message: 'user created' });
};