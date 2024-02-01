import { Request, Response } from "express";

export type ClientControllerProtocol = {
  allClients: fnControllers<void>
  findById: fnControllers<void | undefined>
}

export type AppointmentControllerProtocol = {
  allAppointments: fnControllers<void>
  findAppointment: fnControllers<void | undefined>
  registerAppointment: fnControllers<void>
  updateAppointment: fnControllers<void>
  deleteAppointment: fnControllers<void>
}

type fnControllers<T> = (req: Request, res: Response) => Promise<T>;