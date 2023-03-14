import express from 'express';
const router = express.Router();
import { Auth } from '../Controllers/Auth';

router.get('/', Auth);

export default router;
