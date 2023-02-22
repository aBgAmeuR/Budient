import express from 'express';
const router = express.Router();
import { Authenticate } from '../Controllers/Auth';

router.post('/auth', Authenticate);

export default router;
