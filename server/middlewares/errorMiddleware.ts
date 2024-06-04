import { NextFunction, Request, Response } from "express";

interface CustomError extends Error {
  kind?: string;
}

const notFound = (req: Request, res: Response, next: NextFunction) => {
  const error = new Error(`${req.originalUrl} not found`);
  res.statusCode = 404;
  next(error);
};

const errorHandler = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;

  if (err.name === "CastError" && err.kind === "ObjectId") {
    statusCode = 404;
    message = "Resource not found";
  }

  res.status(statusCode).json({
    message: message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export {notFound,errorHandler};