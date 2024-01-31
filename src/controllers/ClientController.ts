import ClientModel from "@/models/ClientModel";
import { Request, Response } from "express";
import validator from 'validator';
import ValidaCPF from "@/utils/ValidaCPF";
import { formatName } from "@/utils/formatName";

class ClientController {
  async findOneClient(req: Request, res: Response) {
    const { value } = req.body;

    const isEmail = validator.isEmail(value); 
    const isCPF = ValidaCPF.isCPF(value);

    console.log(isCPF);
    if (isEmail) {

      try {
        const result = await ClientModel.findClientByEmail(value);

        if (result.length === 0) {
          res.status(404);
          res.json({
            info: "Client not exists!"
          })
        } else {
          res.status(200);
          res.json({ info: "Request Success", body: result[0] });
        }

      } catch (error) {
        console.log(error);
        res.status(500);
        res.json({
          info: "Ocorreu algum erro no banco de dados! Tente novamente mais tarde"
        });
      }

    } else if (isCPF) {
      try {
        const result = await ClientModel.findClientByCPF(value);

        if (result.length === 0) {
          res.status(404);
          res.json({
            info: "Client not exists!"
          })
        } else {
          res.status(200)
          res.json({
            info: "Request Success",
            body: result[0]
          });
        }

      } catch (error) {
        console.log(error);
        res.status(500);
        res.json({
          info: "Ocorreu algum erro no banco de dados! Tente novamente mais tarde"
        });
      }

    } else if (!isCPF && !isEmail) {
      const nameFormated = formatName(value);
      try {
        const result = await ClientModel.findClientByName(nameFormated)

        if (result.length === 0) {
          res.status(404);
          res.json({
            info: "Client not exists!"
          })
        } else {

          res.status(200);
          res.json({
            info: 'É um nome',
            body: result // Retorna um array
          });
        }

      } catch (error) {
        console.log(error);
        res.status(500);
        res.json({
          info: "Ocorreu algum erro no banco de dados! Tente novamente mais tarde"
        });
      }
    }

    else {
      res.status(400);
      res.json({ info: 'Valor incorreto' })
    }

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
          return;
        }

        res.status(200);
        res.json({
          info: "Request Success!", body: result[0]
        })

      } catch (error) {
        console.log(error);
        res.status(500);
        res.json({ info: "Ocorreu algum erro no banco de dados! " });
      }
    }
  }

  async allClients(req: Request, res: Response) {
    const result = await ClientModel.getClients();
    res.json(result);
  }
}

export default new ClientController;