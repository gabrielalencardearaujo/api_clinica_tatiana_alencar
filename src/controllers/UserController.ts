import { Request, Response } from "express";
import { UserControllerProtocol } from "./ControllersProtocol";
import UserModel from "@/models/UserModel";
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import ServerConfig from "@/configs/ServerConfig";
import formatJsonResponses from "@/utils/formatJsonResponses";

class UserController implements UserControllerProtocol {
  async allItems(req: Request, res: Response) {
    const result = await UserModel.getUsers();
    res.json(result);
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    if((!email || !password) || (email === '' || password === '')){
      res.status(400);
      res.json(formatJsonResponses(400));
    }

    try {
      const user = await UserModel.findByEmail(email);

      if (user.length > 0) {
        const decor = await bcrypt.compare(password, user[0]?.password);

        if (decor) {
          const token = jwt.sign({ email, accessStatus: user[0]?.accessStatus }, ServerConfig.secret, { expiresIn: '7d' });

          res.status(200);
          res.json(formatJsonResponses(200, token));

        } else {
          res.status(403);
          res.json(formatJsonResponses(403))
        }

      } else {
        res.status(403);
        res.json(formatJsonResponses(403))
      }
    } catch (error) {
      console.log(error);

      res.status(500);
      res.json(formatJsonResponses(500));
    }
  }

  async register(req: Request, res: Response) {
    const body = req.body;

    if((!body.email || !body.password) || (body.email === '' || body.password === '')){
      res.status(400);
      res.json(formatJsonResponses(400));
    }

    const user = await UserModel.findByEmail(body.email); 

    if(user.length > 0) {
      res.status(403);
      res.json(formatJsonResponses(403));
      return;
    }

    try {
      const hash: string = await bcrypt.hash(body.password, 10);

      const result = await UserModel.registerUser({ ...body, password: hash })

      if (result) {
        res.status(200);
        res.json(formatJsonResponses(200, result));
      }
    } catch (error) {
      console.log(error);

      res.status(500);
      res.json(formatJsonResponses(500));
    }
  }

  async findById(req: Request, res: Response) {
    const { id } = req.params;

    if (isNaN(+id)) {

      res.status(400);
      res.json(formatJsonResponses(400));
      return;

    } else {

      try {
        const result = await UserModel.findById(+id);
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

export default new UserController;