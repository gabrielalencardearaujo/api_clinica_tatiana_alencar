export type ClientModelProtocol = {
  getClients(): Promise<ClientsDB[]>;
  registerClient(body: BodyClient): Promise<number[]>;
  findClientByEmail(email: string): Promise<ClientsDB[]>;
  findClientByCPF(cpf: string): Promise<ClientsDB[]>;
  findClientById(id: number): Promise<ClientsDB[]>;
  findClientByName(name: number): Promise<ClientsDB[]>;
}

export type BodyClient = {
  name: string,
  email: string,
  cpf: string,
  phoneNumber: string,
  promotionalEmails: boolean | 0 | 1,
}

type ClientsDB = BodyClient & { 'idClients': number }