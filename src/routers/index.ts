import { Router } from 'express';
import authRouter from './authRouter.js';
import credentialsRouter from './credentialsRouter.js';
import notesRouter from './notesRouter.js';
import cardsRouter from './cardRouter.js';
import wifisRouter from './wifiRouter.js';

const router = Router();

router.use('/auth', authRouter);
router.use('/credentials', credentialsRouter);
router.use('/notes', notesRouter);
router.use('/cards', cardsRouter);
router.use('/wifis', wifisRouter);

export default router;