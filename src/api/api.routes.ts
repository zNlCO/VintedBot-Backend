import express from 'express';
import vintedRouter from './vinted/vinted.routes';

const router = express.Router();

router.use('/vinted', vintedRouter);

export default router;