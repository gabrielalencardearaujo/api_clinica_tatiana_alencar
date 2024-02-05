import formatJsonResponses from "@/utils/formatJsonResponses";
import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";

const VerifyTokenAccessMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const data = req.headers["authorization"];

  const token = (data) ? data.split(' ')[1] : '';
  const decoded = jwt.verify(token, process.env.SECRET || '') as jwt.JwtPayload;

  if(decoded && decoded.accessStatus > 0) 
    next();
  else if(decoded && decoded.accessStatus === 0) {
    formatJsonResponses(403);
    return;
  } else {
    formatJsonResponses(401);
    return;
  }
}

export default VerifyTokenAccessMiddleware;