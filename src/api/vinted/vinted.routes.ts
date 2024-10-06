import { Router } from 'express';
import { search } from './vinted.controller';


const router = Router();

router.get('/', search);

export default router;