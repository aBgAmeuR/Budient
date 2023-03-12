import express from 'express';
const router = express.Router();
import { Authenticate } from '../Controllers/Auth';

router.get('/', Authenticate);

export default router;
