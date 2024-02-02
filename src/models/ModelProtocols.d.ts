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


// Types Appointments:
type AppointmentDB = {
  fk_idClient: number,
  fk_typeAppointment: number,
  idPayment: number,
  description: string,
  dateTime: string,
}

export type AppointmentModelProtocol = {
  allAppointments: () => Promise<AppointmentDB[] | []>;
  registerAppointment: (body: AppointmentDB) => Promise<number[]>;
  findById: (idAppointment: number) => Promise<AppointmentDB[] | []>;
  deleteAppointment: (idAppointment: number) => Promise<number>;
  updateAppointment: (body: AppointmentDB, idAppointment: number) => Promise<number>;
}


// Types Products:
type Product = {
  title: string,
  description: string,
  price: number
}

export type BodyProduct = Product & { id_type: number }

export type ProductsModelProtocol = {
  getProducts: () => Promise<Product[] | undefined>;
  registerProduts: (body: BodyProduct) => Promise<number[]>;
  findId: (id_type: number) => Promise<Product[] | []>;
  updateProducts: (body: BodyProduct, id_type: number) => Promise<number>;
  deleteProdut: (id_type: number) => Promise<number>;
}

// Types Users:
type Users = {
  fullName: string,
  email: string,
  accessStatus: number,
  password: string,
}

type BodyUser = Users & { idUser: number };

export type UserModelProtocol = {
  getUsers: () => Promise<BodyUser[]>;
  registerUser: (body: Users) => Promise<number[]>;
  findById: (idUser) => Promise<BodyUser[] | []>;
  findByEmail: (email) => Promise<BodyUser[] | []>;
}