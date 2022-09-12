import { Router } from 'express';
import authRouter from './authRouter.js';
import credentialsRouter from './credentialsRouter.js';


const router = Router();

router.use('/auth', authRouter);
router.use('/credentials', credentialsRouter);

export default router;