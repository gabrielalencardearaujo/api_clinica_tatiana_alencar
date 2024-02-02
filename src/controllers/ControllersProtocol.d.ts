import { Request, Response } from "express";

export type ClientControllerProtocol = {
  allItems: fnControllers<void>;
  findById: fnControllers<void | undefined>;
}

export type ControllerProtocol = {
  allItems: fnControllers<void>;
  register: fnControllers<void>;
  findId: fnControllers<void | undefined>;
  delete: fnControllers<void>;
  update: fnControllers<void>;
}

type fnControllers<T> = (req: Request, res: Response) => Promise<T>;

export type UserControllerProtocol = ClientControllerProtocol & {
  register: fnControllers<void>;
  login: fnControllers<void>;
}