export type ClientModelProtocol = {
  getClients(): Promise<ClientsDB[]>;
  registerClient(body: BodyClient): Promise<number[]>;
  findClientEmail(email: string): Promise<ClientsDB[]>;
  findClientCPF(cpf: string): Promise<ClientsDB[]>;
  findClientId(id: number): Promise<ClientsDB[]>;
}

export type BodyClient = {
  name: string,
  email: string,
  cpf: string,
  phoneNumber: string,
  promotionalEmails: boolean | 0 | 1,
}

type ClientsDB = BodyClient & { 'idClients': number }