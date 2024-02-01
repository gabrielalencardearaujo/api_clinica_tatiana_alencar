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
  idAppointment: number,
  fk_idClient: number,
  id_Payment: number,
  fk_idTypeAppointment: number,
  description: string,
  dateTime: string,
}

export type AppointmentModelProtocol = {
  allAppointments: () => Promise<AppointmentDB[]>;
  findById: (id: number) => Promise<AppointmentDB | undefind>;
  registerAppointment: (body: AppointmentDB) => Promise<AppointmentDB>;
  updateAppointment: (body: AppointmentDB) => Promise<AppointmentDB | undefined>;
  deleteAppointment:(id: number) =>  Promise<AppointmentDB | undefined>;
}