export type ClientModelProtocol = {
  getClients(): Promise<ClientsDB[]>;
  registerClient(body: BodyClient): Promise<number[]>;
  findClientByEmail(email: string): Promise<ClientsDB[]>;
  findClientByCPF(cpf: string): Promise<ClientsDB[]>;
  findClientById(id: number): Promise<ClientsDB[]>;
  findClientByName(name: string): Promise<ClientsDB[]>;
}

export type BodyClient = {
  name: string,
  email: string,
  cpf: string,
  phoneNumber: string,
  promotionalEmails: boolean | 0 | 1,
}

type ClientsDB = BodyClient & { 'idClients': number }

type AppointmentDB = {
  fk_idClient: number,
  fk_typeAppointment: number,
  idPayment: number,
  description: string,
  dateTime: string,
}

export type AppointmentModelProtocol = {
  // allAppointments: () => Promise<AppointmentDB[]>;
  // findById: (id: number) => Promise<AppointmentDB | undefind>;
  registerAppointment: (body: AppointmentDB) => Promise<number[]>;
  // updateAppointment: (body: AppointmentDB) => Promise<AppointmentDB | undefined>;
  // deleteAppointment:(id: number) =>  Promise<AppointmentDB | undefined>;
}