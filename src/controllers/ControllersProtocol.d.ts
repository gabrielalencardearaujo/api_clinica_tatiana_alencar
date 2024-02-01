import { Request, Response } from "express";

export type ClientControllerProtocol = {
  allClients: fnControllers<void>
  findById: fnControllers<void | undefined>
}

export type AppointmentControllerProtocol = {
  allAppo: fnControllers<void>
  register: fnControllers<void>
  // findById: fnControllers<void | undefined>
  // update: fnControllers<void>
  // delete: fnControllers<void>
}

type fnControllers<T> = (req: Request, res: Response) => Promise<T>;