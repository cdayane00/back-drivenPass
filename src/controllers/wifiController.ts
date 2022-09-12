import { Request, Response } from 'express';
import { WifiData, WifiBodyData } from '../interfaces/wifisInterface.js';
import * as wifiService from '../services/wifiService.js';

export const createWifi = async (req: Request, res: Response) => {
	const userId = Number(req.params.userId);
	const wifiBodyData: WifiBodyData = req.body;
	const wifiData: WifiData = { ...wifiBodyData, userId };
	await wifiService.userIdExist(userId);
	await wifiService.createWifi(wifiData);
	res.status(201).json({ message: 'wifi created' });
};

export const getAllWifis = async (req: Request, res: Response) => {
	const userId = Number(req.params.userId);
	await wifiService.userIdExist(userId);
	const wifis = await wifiService.getAllWifis(userId);
	res.status(200).json({ wifis });
};

export const getWifisById = async (req: Request, res: Response) => {
	const userId = Number(req.params.userId);
	const wifiId = Number(req.params.wifiId);
	await wifiService.userIdExist(userId);
	const wifi = await wifiService.getWifiById(userId, wifiId);
	res.status(200).json({ wifi });
};

export const deleteWifi = async (req: Request, res: Response) => {
	const userId = Number(req.params.userId);
	const wifiId = Number(req.params.wifiId);
	await wifiService.wifiEligibilityForDelete(userId, wifiId);
	await wifiService.deleteWifi(wifiId);
	res.status(200).json({ message: 'Wifi deleted' });
};