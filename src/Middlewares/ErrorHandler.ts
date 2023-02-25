import { ErrorRequestHandler } from 'express';

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (err.message === 'Missing email or password.') {
    res.status(400).json({ error: 'Missing email or password.' });
  } else if (err.message === 'User not found.') {
    res.status(404).json({ error: 'User not found.' });
  } else if (err.message === 'Invalid password.') {
    res.status(400).json({ error: 'Invalid password.' });
  } else if (err.message === 'Missing parameters.') {
    res.status(400).json({ error: 'Missing parameters.' });
  } else if (err.message === 'Missing id.') {
    res.status(400).json({ error: 'Missing id.' });
  } else {
    console.error(err);
    res.status(500).json({ error: 'Internal server error.' });
  }
}
