import { Request, Response } from "express";
import { UserControllerProtocol } from "./ControllersProtocol";
import UserModel from "@/models/UserModel";
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import ServerConfig from "@/configs/ServerConfig";

class UserController implements UserControllerProtocol {
  async allItems(req: Request, res: Response) {
    const result = await UserModel.getUsers();
    res.json(result);
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
      const user = await UserModel.findByEmail(email);

      if (user.length > 0) {
        const decor = await bcrypt.compare(password, user[0]?.password);

        if (decor) {
          const token = jwt.sign({ email, accessStatus: user[0]?.accessStatus }, ServerConfig.secret, { expiresIn: '7d' });

          res.status(200);
          res.json({
            info: 'Login success.',
            token,
          })
        } else {
          res.status(403);
          res.json({
            info: 'Email or password invalid.',
            token: undefined
          })
        }

      } else {
        res.status(403);
        res.json({
          info: 'Email or password invalid.',
          token: undefined
        })
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

  async register(req: Request, res: Response) {
    const body = req.body;

    try {
      const hash: string = await bcrypt.hash(body.password, 10);

      const result = await UserModel.registerUser({ ...body, password: hash })

      if (result) {
        res.status(200);
        res.json({
          info: 'Register Success!',
          body: result
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

  async findById(req: Request, res: Response) {
    const { id } = req.params;

    if (isNaN(+id)) {

      res.status(400);
      res.json({ info: "Identifier invalid!" });
      return;

    } else {

      try {
        const result = await UserModel.findById(+id);
        if (result.length === 0) {
          res.status(404);
          res.json({ info: 'Client not exists!' })
        } else {
          res.status(200);
          res.json({
            info: "Request Success!",
            body: result[0]
          })
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
  }
}

export default new UserController;