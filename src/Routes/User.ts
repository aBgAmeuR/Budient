import express from 'express';
const router = express.Router();
import { CreateUser, GetUser, UpdateUser, DeleteUser } from '../Controllers/User';

router.post('/user', CreateUser);
router.get('/user', GetUser);
router.put('/user', UpdateUser);
router.delete('/user', DeleteUser);

export default router;
