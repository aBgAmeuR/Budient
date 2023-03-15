import express from 'express';
const router = express.Router();
import { CreateTransaction, GetTransactions, GetTransaction, UpdateTransaction, DeleteTransaction } from '../Controllers/Transactions';
import { Auth } from '../Middlewares/AuthMiddleware';

router.post('/',[Auth] , CreateTransaction);
router.get('/',[Auth] , GetTransactions);
router.get('/:id',[Auth] , GetTransaction);
router.put('/:id',[Auth] , UpdateTransaction);
router.delete('/:id',[Auth] , DeleteTransaction);

export default router;
