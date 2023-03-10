import express from 'express';
import { Application, Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import { logger } from './Config/Output';
import { config } from './Config/Config';
import User from './Routes/User';
import Transaction from './Routes/Transactions';
import Auth from './Routes/Auth';

const app: Application = express();

app.use(express.json());

app.get('/', (req: Request, res: Response): void => {
  res.send('Hello World!');
});
app.use("api/user", User);
app.use("api/transaction", Transaction);
app.use("api/auth", Auth);

app.listen(config.PORT, (): void => {
  logger('Server Running!');
});

export default app;
