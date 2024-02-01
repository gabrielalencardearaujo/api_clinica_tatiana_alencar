import { NextFunction, Request, Response } from "express";

export const AppointmentMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const body = req.body;

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

  req.body = {
    fk_idClient: Number(body.idClient),
    fk_typeAppointment: Number(body.typeAppointment),
    idPayment: Number(body.idPayment),
    description: String(body.description),
    dateTime: String(body.date),
  }

  next()
}
