import { User } from '@prisma/client';

export type UserData = Omit<User, 'id' | 'createdAt'>;
export type UserDataBody = UserData & { confirmPassword: string };
export type SignInData = Omit<UserData, 'name'>;