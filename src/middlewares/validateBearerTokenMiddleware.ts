import { Response, Request, NextFunction } from 'express';
import bearerAuthorizationSchema from '../schemas/bearerAuthorizationSchema.js';
import { validateToken } from '../utils/JWT.js';

import AppError from '../config/error.js';

const validateBearerTokenMiddleware = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { error } = bearerAuthorizationSchema.validate(req.headers, {
		abortEarly: false,
	});
	if (error) {
		throw new AppError(
			'Invalid Authorization Header',
			401,
			'Invalid Authorization Header',
			error.details.map((detail) => detail.message).join(', ')
		);
	}
	try {
		const token = req.headers.authorization.split(' ')[1];
		const userData = validateToken(token);
		res.locals.userData = userData;
		next();
	} catch (error) {
		res.status(401).json({ error: error.message });
	}
};

export default validateBearerTokenMiddleware;