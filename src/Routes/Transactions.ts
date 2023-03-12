import express from 'express';
const router = express.Router();
import { CreateTransaction, GetTransactions, UpdateTransaction, DeleteTransaction } from '../Controllers/Transactions';
import { Authenticate } from '../Controllers/Auth';

router.post('/',[Authenticate] , CreateTransaction);
router.get('/',[Authenticate] , GetTransactions);
router.put('/',[Authenticate] , UpdateTransaction);
router.delete('/',[Authenticate] , DeleteTransaction);

export default router;
