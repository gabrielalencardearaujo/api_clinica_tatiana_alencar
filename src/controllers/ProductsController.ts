import AppointmentModel from "@/models/AppointmentModel";
import { Request, Response } from "express";
import { ControllerProtocol } from "./ControllersProtocol";


class ProductController implements ControllerProtocol {
  async register(req: Request, res: Response) {
    const body = req.body;

    try {
      const result = await AppointmentModel.registerAppointment(body);
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
        info: 'An unexpected error occurred in our services, please try later!',
        body: undefined
      })
    }
  }

  async allItems(req: Request, res: Response) {
    try {
      const arrayAppo = await AppointmentModel.allAppointments();

      res.status(200);
      res.json({
        info: 'Request Success!',
        body: arrayAppo
      })

    } catch (error) {
      res.json({
        info: 'An unexpected error occurred in our services, please try later!',
        body: undefined
      })
    }
  }

  async findId(req: Request, res: Response) {
    const { id } = req.params;

    if (isNaN(+id)) {
      res.status(400);
      res.json({
        info: 'Identifier invalid!',
        body: undefined
      })
      return;
    }

    try {
      const appo = await AppointmentModel.findById(+id);

      res.status(200);
      res.json({
        info: 'Search success!',
        body: appo
      })
    } catch (error) {
      console.log(error)

      res.status(500);
      res.json({
        info: 'An unexpected error occurred in our services, please try later!',
        body: undefined
      });
    }
  }

  async update(req: Request, res: Response) {
    const body = req.body;
    const { id } = req.params;

    if (isNaN(+id)) {
      res.status(400);
      res.json({
        info: 'Identifier invalid!',
        body: undefined
      })
      return;
    }

    try {
      const appo = AppointmentModel.updateAppointment(body, +id);

      if (appo) {
        res.status(200);
        res.json({
          info: 'Update success!',
          body: appo
        });
      } 
      
    } catch (error) {
      console.log(error);

      res.status(500);
      res.json({
        info: 'An unexpected error occurred in our services, please try later!',
        body: undefined
      });
    } 
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    if (isNaN(+id)) {
      res.status(400);
      res.json({
        info: 'Identifier invalid!',
        body: undefined
      })
      return;
    } else {

      try {

        const appo = await AppointmentModel.deleteAppointment(+id);
        console.log(appo);

        if (appo) {
          res.status(200)
          res.json({
            info: 'Delete success!',
            body: appo
          })
        } else {
          res.status(404)
          res.json({
            info: 'Appointment not exists!',
            body: undefined
          })
        }

      } catch (error) {
        console.log(error);

        res.status(500);
        res.json({
          info: 'Delete unsuccess!',
          body: undefined
        });
      }

    }
  }
}

export default new ProductController;