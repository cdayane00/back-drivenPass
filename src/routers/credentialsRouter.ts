import { Router } from 'express';
import validadeSchemaMiddleware from '../middlewares/validateSchemaMiddleware.js';
import validateBearerTokenMiddleware from '../middlewares/validateBearerTokenMiddleware.js';
import createCredentialSchema from '../schemas/credentialSchemas/createCredentialSchema.js';
import getAllCredentialsSchema from '../schemas/credentialSchemas/getAllCredentialsSchema.js';
import getCredentialByIdSchema from '../schemas/credentialSchemas/getCredentialByIdSchema.js';
import deleteCredentialSchema from '../schemas/credentialSchemas/deleteCredentialSchema.js';
import * as credentialController from '../controllers/credentialController.js';

const credentialsRouter = Router();

credentialsRouter.use(validateBearerTokenMiddleware);
credentialsRouter.post(
	'/:userId/create',
	validadeSchemaMiddleware(createCredentialSchema),
	credentialController.createCredential
);
credentialsRouter.get(
	'/:userId',
	validadeSchemaMiddleware(getAllCredentialsSchema),
	credentialController.getAllCredentials
);
credentialsRouter.get(
	'/:userId/:credentialId',
	validadeSchemaMiddleware(getCredentialByIdSchema),
	credentialController.getCredentialById
);
credentialsRouter.delete(
	'/:userId/:credentialId',
	validadeSchemaMiddleware(deleteCredentialSchema),
	credentialController.deleteCredential
);

export default credentialsRouter;