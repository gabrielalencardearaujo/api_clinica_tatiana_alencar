import connectionDB from "@/database/connectionSQL";
import { ClientModelProtocol } from "./ClientModelProtocols";

const ClientModel: ClientModelProtocol = {
  async getClients() {
    return await connectionDB.select().table('Clients');
  },

  async registerClient(body) {
    const result = await connectionDB.insert(body).into('Clients');
    return result;
  },

  async findClientEmail(email) {
    const result = await connectionDB.select().table('Clients').where({ email });
    return result;
  },

  async findClientCPF(cpf) {
    const result = await connectionDB.select().table('Clients').where({ cpf });
    return result;
  },

  async findClientId(id) {
    const result = await connectionDB.select().table('Clients').where({ idClients: id });
    return result;
  }
}

export default ClientModel;