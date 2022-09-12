import { Card } from '@prisma/client';

export type CardBodyData = Omit<Card, 'id' | 'createdAt' | 'userId'>;

export type CardData = Omit<Card, 'id' | 'createdAt'>;