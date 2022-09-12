import { Router } from 'express';
import authRouter from './authRouter.js';
import credentialsRouter from './credentialsRouter.js';
import notesRouter from './notesRouter.js';

const router = Router();

router.use('/auth', authRouter);
router.use('/credentials', credentialsRouter);
router.use('/notes', notesRouter);

export default router;