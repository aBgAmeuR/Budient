import express from 'express';
const router = express.Router();
import { CreateTransaction, GetTransactions, UpdateTransaction, DeleteTransaction } from '../Controllers/Transactions';
import { Authenticate } from '../Controllers/Auth';

router.post('/transactions',[Authenticate] , CreateTransaction);
router.get('/transactions',[Authenticate] , GetTransactions);
router.put('/transactions',[Authenticate] , UpdateTransaction);
router.delete('/transactions',[Authenticate] , DeleteTransaction);

export default router;
