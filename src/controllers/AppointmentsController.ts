import AppointmentModel from "@/models/AppointmentModel";
import { Request, Response } from "express";
import { AppointmentControllerProtocol } from "./ControllersProtocol";


class AppointmentController implements AppointmentControllerProtocol{
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
      res.send(result);

    } catch (error) {
      console.log(error);
      res.send('deu ruim!')
    }
  }
}

export default new AppointmentController;