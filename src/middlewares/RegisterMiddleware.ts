import { NextFunction, Request, Response } from "express";

export const RegisterMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const body = req.body;
  console.log(body);

  if (
    (body.idClient === '') ||
    (body.idPayment === '') ||
    (body.typeAppointment === '') ||
    (body.date === '')
  ) {
    res.status(400)
    res.json({
      info: 'Request Invalid! Some fields are empty.',
      body: undefined
    })
    return;
  }
  
  next()
}