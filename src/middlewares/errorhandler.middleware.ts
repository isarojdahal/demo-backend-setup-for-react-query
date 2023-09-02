import { NextFunction, Request, Response } from "express";

export const ErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = 500;

  console.log(err);
  // console.log('Hehehe')

  let data = {
    success: false,
    message: "Internal server error",
  };
  if (err.isOperational) {
    statusCode = err.statusCode;
    data = {
      ...data,
      message: err.message,
    };
  }

  return res.status(statusCode).json(data);
};

export default ErrorHandler;
