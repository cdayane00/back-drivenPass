import { WifiData } from '../interfaces/wifisInterface.js';
import prisma from '../config/database.js';

export const getByTitle = async (title: string, userId: number) => {
	return prisma.wifi.findFirst({
		where: {
			title: {
				equals: title,
				mode: 'insensitive',
			},
			userId,
		},
	});
};

export const create = async (wifiData: WifiData) => {
	return prisma.wifi.create({
		data: wifiData,
	});
};

export const getAll = async (userId: number) => {
	return prisma.wifi.findMany({ where: { userId } });
};

export const getById = async (wifiId: number) => {
	return prisma.wifi.findUnique({ where: { id: wifiId } });
};

export const deleteById = async (wifiId: number) => {
	return prisma.wifi.delete({ where: { id: wifiId } });
};