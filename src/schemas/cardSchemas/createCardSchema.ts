import JoiBase from 'joi';
import JoiDate from '@joi/date';

const Joi = JoiBase.extend(JoiDate);

const passwordRegex = /^\d{4}$/;
const numberRegex = /^\d{4} \d{4} \d{4} \d{4}$/;

const createCardParamsSchema = Joi.object({
	userId: Joi.number().positive().required(),
});

const createCardBodySchema = Joi.object({
	title: Joi.string().required(),
	number: Joi.string().pattern(numberRegex).required(),
	cardholderName: Joi.string().required(),
	securityCode: Joi.string().length(3).required(),
	expirationDate: Joi.date().format('MM/YY').required(),
	password: Joi.string().length(4).pattern(passwordRegex).required(),
	isVirtual: Joi.boolean().strict().required(),
	type: Joi.string().valid('credit', 'debit', 'both').required(),
}).required();

const createCardSchema = Joi.object({
	params: createCardParamsSchema,
	body: createCardBodySchema,
}).options({ allowUnknown: true });

export default createCardSchema;