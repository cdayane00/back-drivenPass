import * as wifiRepository from '../repositories/wifiRepository.js';
import * as userRepository from '../repositories/userRepository.js';
import { WifiData } from '../interfaces/wifisInterface.js';

import { cryptrEncryptData, cryptrDecryptData } from '../utils/cryptr.js';

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

export const createWifi = async (wifiData: WifiData) => {
	const { password } = wifiData;
	const encryptedPassword = cryptrEncryptData(password);
	await wifiRepository.create({
		...wifiData,
		password: encryptedPassword,
	});
};

export const getAllWifis = async (userId: number) => {
	const wifis = await wifiRepository.getAll(userId);
	if (!wifis) {
		throw new AppError(
			'No Wifis found',
			404,
			'No Wifis found',
			'Ensure that the user has Wifis'
		);
	}
	const wifisWithDecryptedPassword = wifis.map((wifi) => {
		const { password } = wifi;
		const decryptedPassword = cryptrDecryptData(password);
		return { ...wifi, password: decryptedPassword };
	});
	return wifisWithDecryptedPassword;
};

export const getWifiById = async (userId: number, wifiId: number) => {
	const wifi = await wifiRepository.getById(wifiId);
	if (!wifi) {
		throw new AppError(
			'Wifi not found',
			404,
			'Wifi not found',
			'Ensure that the Wifi exists'
		);
	}
	if (wifi.userId !== userId) {
		throw new AppError(
			'Unauthorized acess Wifi',
			401,
			'Unauthorized acess Wifi',
			'Ensure that the Wifi belongs to the user'
		);
	}
	const { password } = wifi;
	const decryptedPassword = cryptrDecryptData(password);
	return { ...wifi, password: decryptedPassword };
};

export const wifiEligibilityForDelete = async (
	userId: number,
	wifiId: number
) => {
	const wifi = await wifiRepository.getById(wifiId);
	if (!wifi) {
		throw new AppError(
			'wifi not found',
			404,
			'wifi not found',
			'Ensure that the wifi exists'
		);
	}
	if (wifi.userId !== userId) {
		throw new AppError(
			'Unauthorized acess wifi',
			401,
			'Unauthorized acess wifi',
			'Ensure that the wifi belongs to the user'
		);
	}
};

export const deleteWifi = async (wifiId: number) => {
	await wifiRepository.deleteById(wifiId);
};