import ClientModel from "@/models/ClientModel";
import { Request, Response } from "express";
import { ClientControllerProtocol } from "./ControllersProtocol";
import formatJsonResponses from "@/utils/formatJsonResponses";

class ClientController implements ClientControllerProtocol {
  async allItems(req: Request, res: Response) {
    const result = await ClientModel.getClients();
    res.json(result);
  }

  async findById(req: Request, res: Response) {
    const { id } = req.params;

    if (isNaN(+id)) {

      res.status(400);
      res.json(formatJsonResponses(400));
      return;

    } else {

      try {
        const result = await ClientModel.findClientById(+id);
        if (result.length === 0) {
          res.status(404);
          res.json(formatJsonResponses(404))
        } else {
          res.status(200);
          res.json(formatJsonResponses(200, result[0]))
        }

      } catch (error) {
        console.log(error);
        res.status(500);
        res.json(formatJsonResponses(500));
      }
    }
  }
}

export default new ClientController;