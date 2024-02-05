import AppointmentModel from "@/models/AppointmentModel";
import { Request, Response } from "express";
import { ControllerProtocol } from "./ControllersProtocol";
import formatJsonResponses from "@/utils/formatJsonResponses";


class AppointmentController implements ControllerProtocol {
  async register(req: Request, res: Response) {
    const body = req.body;

    try {
      const result = await AppointmentModel.registerAppointment(body);

      if(result) {
        console.log(result)
        res.status(200);
        res.json(formatJsonResponses(200, result));  
      }
   
    } catch (error) {
      console.log(error);
      res.status(500);
      res.json(formatJsonResponses(500))
    }
  }

  async allItems(req: Request, res: Response) {
    try {
      const arrayAppo = await AppointmentModel.allAppointments();

      res.status(200);
      res.json(formatJsonResponses(200, arrayAppo))

    } catch (error) {
      res.status(500);
      res.json(formatJsonResponses(500))
    }
  }

  async findId(req: Request, res: Response) {
    const { id } = req.params;

    if (isNaN(+id)) {
      res.status(400);
      res.json(formatJsonResponses(400))
      return;
    }

    try {
      const appo = await AppointmentModel.findById(+id);

      res.status(200);
      res.json(formatJsonResponses(200, appo))
    } catch (error) {
      console.log(error)

      res.status(500);
      res.json(formatJsonResponses(500));
    }
  }

  async update(req: Request, res: Response) {
    const body = req.body;
    const { id } = req.params;

    if (isNaN(+id)) {
      res.status(400);
      res.json(formatJsonResponses(400))
      return;
    }

    try {
      const appo = AppointmentModel.updateAppointment(body, +id);

      if (appo) {
        res.status(200);
        res.json(formatJsonResponses(200, appo));
      } 
      
    } catch (error) {
      console.log(error);

      res.status(500);
      res.json(formatJsonResponses(500));
    } 
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    if (isNaN(+id)) {
      res.status(400);
      res.json(formatJsonResponses(400))
      return;
    } else {

      try {

        const appo = await AppointmentModel.deleteAppointment(+id);
        console.log(appo);

        if (appo) {
          res.status(200)
          res.json(formatJsonResponses(200, appo))
        } else {
          res.status(404)
          res.json(formatJsonResponses(404))
        }

      } catch (error) {
        console.log(error);

        res.status(500);
        res.json(formatJsonResponses(500));
      }

    }
  }
}

export default new AppointmentController;