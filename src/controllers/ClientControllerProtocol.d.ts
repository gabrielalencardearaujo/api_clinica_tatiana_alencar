import { Request, Response } from "express";

export type ClientControllerProtocol = {
  allClients: (req: Request, res: Response) => Promise<void>;
  findById: (req: Request, res: Response) => Promise<void | undefined>;
}