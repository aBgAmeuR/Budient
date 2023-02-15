import express, { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import { logger } from './Config/Output';
import { config } from './Config/Config';
import User from './Models/User';
import mongoose from './DataBase/Database';

const app = express();

app.get('/', (req: Request, res: Response): void => {
  res.send('Hello World!');
});

app.listen(config.PORT, (): void => {
  logger('Server Running!');
});
