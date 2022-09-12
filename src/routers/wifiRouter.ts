import { Router } from 'express';
import validadeSchemaMiddleware from '../middlewares/validateSchemaMiddleware.js';
import validateBearerTokenMiddleware from '../middlewares/validateBearerTokenMiddleware.js';
import createWifiSchema from '../schemas/wifiSchemas/createWifiSchema.js';
import getAllWifisSchema from '../schemas/wifiSchemas/getAllWifisSchema.js';
import getWifiByIdSchema from '../schemas/wifiSchemas/getWifiByIdSchema.js';
import deleteWifiSchema from '../schemas/wifiSchemas/deleteWifiSchema.js';
import * as wifiController from '../controllers/wifiController.js';

const wifisRouter = Router();

wifisRouter.use(validateBearerTokenMiddleware);
wifisRouter.post(
	'/:userId/create',
	validadeSchemaMiddleware(createWifiSchema),
	wifiController.createWifi
);

wifisRouter.get(
	'/:userId',
	validadeSchemaMiddleware(getAllWifisSchema),
	wifiController.getAllWifis
);
wifisRouter.get(
	'/:userId/:wifiId',
	validadeSchemaMiddleware(getWifiByIdSchema),
	wifiController.getWifisById
);

wifisRouter.delete(
	'/:userId/:wifiId',
	validadeSchemaMiddleware(deleteWifiSchema),
	wifiController.deleteWifi
);

export default wifisRouter;