import { UserData } from '../interfaces/authInterface';
import prisma from '../config/database.js';

export const insert = async (user: UserData) => {
	return prisma.user.create({
		data: user,
	});
};

export const getByEmail = async (email: string) => {
	return prisma.user.findUnique({
		where: {
			email,
		},
	});
};

export const getUserById = async (userId: number) => {
	return prisma.user.findUnique({
		where: {
			id: userId,
		},
	});
};