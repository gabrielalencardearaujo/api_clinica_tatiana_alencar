import ClientModel from "@/models/ClientModel";
import { Request, Response } from "express";
import { ClientControllerProtocol } from "./ClientControllerProtocol";

class ClientController implements ClientControllerProtocol {
  async allClients(req: Request, res: Response) {
    const result = await ClientModel.getClients();
    res.json(result);
  }

  async findById(req: Request, res: Response) {
    const { id } = req.params;

    if (isNaN(+id)) {

      res.status(400);
      res.json({ info: "Identifier invalid!" });
      return;

    } else {

      try {
        const result = await ClientModel.findClientById(+id);
        if (result.length === 0) {
          res.status(404);
          res.json({ info: 'Client not exists!' })
        } else {
          res.status(200);
          res.json({
            info: "Request Success!", body: result[0]
          })
        }

      } catch (error) {
        console.log(error);
        res.status(500);
        res.json({ info: "Ocorreu algum erro no banco de dados! " });
      }
    }
  }
}

export default new ClientController;