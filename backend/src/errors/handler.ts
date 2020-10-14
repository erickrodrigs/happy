import { ErrorRequestHandler } from 'express';

const errorHander: ErrorRequestHandler = (error, request, response, next) => {
  console.error(error);

  return response.status(500).json({ message: 'Internal server error' });
};

export default errorHander;
