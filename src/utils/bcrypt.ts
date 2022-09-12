import bcrypt from 'bcrypt';

const bcryptEncryptData = (data: string) => {
	return bcrypt.hash(data, 10);
};

const bcryptCompareEncryptedData = (data: string, encryptedData: string) => {
	return bcrypt.compareSync(data, encryptedData);
};

export { bcryptEncryptData, bcryptCompareEncryptedData };