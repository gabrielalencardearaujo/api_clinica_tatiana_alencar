import formatJsonResponses from "@/utils/formatJsonResponses";
import { NextFunction, Request, Response } from "express";

const ProductMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const body = req.body;

  if(!body.title || !body.description || !body.price) {
    res.status(400);
    res.json(formatJsonResponses(400));
    return;
  }

  if(isNaN(body.price)) {
    res.status(400);
    res.json(formatJsonResponses(400));
    return;
  }

  req.body = {
    title: String(body.title),
    description: String(body.description),
    price: Number(body.price),
  }

  next();
}

export default ProductMiddleware;