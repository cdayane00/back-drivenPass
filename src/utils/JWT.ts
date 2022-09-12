import jwt from 'jsonwebtoken';

export const generateToken = (userId: number, name: string) => {
	return jwt.sign({ userId, name }, process.env.JWT_SECRET, {
		expiresIn: '24h',
	});
};

export const validateToken = (token: string) => {
	return jwt.verify(token, process.env.JWT_SECRET);
};