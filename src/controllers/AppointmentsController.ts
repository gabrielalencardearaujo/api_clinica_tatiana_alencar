import AppointmentModel from "@/models/AppointmentModel";
import { Request, Response } from "express";
import { AppointmentControllerProtocol } from "./ControllersProtocol";


class AppointmentController implements AppointmentControllerProtocol {
  async register(req: Request, res: Response) {
    const body = req.body;

    const appointment = {
      fk_idClient: Number(body.idClient),
      fk_typeAppointment: Number(body.typeAppointment),
      idPayment: Number(body.idPayment),
      description: String(body.description),
      dateTime: String(body.date),
    }

    try {
      const result = await AppointmentModel.registerAppointment(appointment);
      console.log(result);

      res.status(200);
      res.json({
        info: 'Request Success!',
        body: result
      });

    } catch (error) {
      console.log(error);
      res.status(500);
      res.json({
        info: 'Ocorreu um erro inesperado no nossos serviços, tente mais tarde!',
        body: undefined
      })
    }
  }

  async allAppo(req: Request, res: Response) {
    try {
      const arrayAppo = await AppointmentModel.allAppointments();

      res.status(200);
      res.json({
        info: 'Request Success!',
        body: arrayAppo
      })

    } catch (error) {
      res.json({
        info: 'Ocorreu um erro inesperado no nossos serviços, tente mais tarde!',
        body: undefined
      })
    }
  }

  async findId(req: Request, res: Response) {
    const { id } = req.params;

    if(isNaN(+id)) {
      res.status(400);
      res.json({
        info: 'Identifier invalid!',
        body: undefined
      })
      return;
    }

    const appo = await AppointmentModel.findById(+id);
    console.log(appo);
    res.json({
      info: 'Search success!',
      body: appo
    })
  }
}

export default new AppointmentController;