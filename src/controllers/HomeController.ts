import { Request, Response } from "express";


class HomeController {
  index(req: Request, res: Response) {
    res.send(`
    <h1>API Rest - Clinica Tatiana Alencar</h1>
    <h3>API desenvolvida para ser consumida pelo site: </h3>
    <p>Documentação: <a href="https://github.com/gabrielalencardearaujo/api_clinica_tatiana_alencar" target="_blank">api_clinica_tatiana_alencar</a></p>
    `);

  }
}

export default new HomeController;