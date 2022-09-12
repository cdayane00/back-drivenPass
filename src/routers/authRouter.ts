import { Router } from 'express';
import * as authController from '../controllers/authController';
import validadeSchemaMiddleware from '../middlewares/validateSchemaMiddleware';
import { signInSchema,signUpSchema } from '../schemas/authSchema';

const authRouter = Router();

authRouter.post(
	'/signup',
	validadeSchemaMiddleware(signUpSchema),
	authController.signUp
);

authRouter.post(
	'/signin',
	validadeSchemaMiddleware(signInSchema),
	authController.signIn
);

export default authRouter;

