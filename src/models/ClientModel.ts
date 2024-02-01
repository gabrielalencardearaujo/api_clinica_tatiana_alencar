import connectionDB from "@/database/connectionSQL";
import { ClientModelProtocol } from "./ModelProtocols";

const ClientModel: ClientModelProtocol = {
  async getClients() {
    return await connectionDB.select().table('Clients');
  },

  async registerClient(body) {
    const result = await connectionDB.insert(body).into('Clients');
    return result;
  },

  async findClientByEmail(email) {
    const result = await connectionDB.select().table('Clients').where({ email });
    return result;
  },

  async findClientByCPF(cpf) {
    const result = await connectionDB.select().table('Clients').where({ cpf });
    return result;
  },

  async findClientById(id) {
    const result = await connectionDB.select().table('Clients').where({ idClients: id });
    return result;
  },

  async findClientByName(name) {
    const result = await connectionDB.select().table('Clients').where({ name });
    return result;
  }
}

export default ClientModel;