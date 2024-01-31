import { NextFunction, Request, Response } from "express";

export const GlobalMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log(res);
  console.log(req);
  next();
}