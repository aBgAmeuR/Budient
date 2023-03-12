import express from 'express';
const router = express.Router();
import { CreateUser, GetUser, UpdateUser, DeleteUser } from '../Controllers/User';

router.post('/', CreateUser);
router.get('/:id', GetUser);
router.put('/:id', UpdateUser);
router.delete('/:id', DeleteUser);

export default router;
