import express from 'express';
import { Application, Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import { logger } from './Config/Output';
import { config } from './Config/Config';
import User from './Routes/User';
import Transaction from './Routes/Transactions';
import Auth from './Routes/Auth';
import { errorHandler } from './Middlewares/ErrorHandler';

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response): void => {
  res.send('Hello World!');
});
app.use("/api/user", User);
app.use("/api/transaction", Transaction);
app.use("/api/auth", Auth);

app.use(errorHandler)

app.listen(config.PORT, (): void => {
  logger('Server Running!');
});

export default app;
