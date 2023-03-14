import express from 'express';
const router = express.Router();
import { CreateTransaction, GetTransactions, UpdateTransaction, DeleteTransaction } from '../Controllers/Transactions';
import { Auth } from '../Middlewares/AuthMiddleware';

router.post('/',[Auth] , CreateTransaction);
router.get('/',[Auth] , GetTransactions);
router.put('/',[Auth] , UpdateTransaction);
router.delete('/',[Auth] , DeleteTransaction);

export default router;
