import Cryptr from 'cryptr';
const cryptr = new Cryptr(process.env.CRYPTR_SECRET);

const cryptrEncryptData = (data: string) => {
	return cryptr.encrypt(data);
};

const cryptrDecryptData = (data: string) => {
	return cryptr.decrypt(data);
};

export { cryptrEncryptData, cryptrDecryptData };