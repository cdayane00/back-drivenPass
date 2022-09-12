import { Wifi } from '@prisma/client';

export type WifiBodyData = Omit<Wifi, 'id' | 'createdAt' | 'userId'>;

export type WifiData = Omit<Wifi, 'id' | 'createdAt'>;