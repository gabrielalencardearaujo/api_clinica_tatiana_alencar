import { Request, Response } from "express";

export type ClientControllerProtocol = {
  allClients: fnControllers<void>
  findById: fnControllers<void | undefined>
}

export type AppointmentControllerProtocol = {
  // allAppo: fnControllers<void>
  // findById: fnControllers<void | undefined>
  register: fnControllers<void>
  // update: fnControllers<void>
  // delete: fnControllers<void>
}

type fnControllers<T> = (req: Request, res: Response) => Promise<T>;