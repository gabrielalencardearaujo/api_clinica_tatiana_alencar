import connectionDB from "@/database/connectionSQL";
import { ProductsModelProtocol, BodyProduct } from "./ModelProtocols";

const ClientModel: ProductsModelProtocol = {
  async getProducts() {
    return await connectionDB.select().table('typeAppointments');
  },

  async registerProduts(body: BodyProduct) {
    const result = await connectionDB.insert(body).into('typeAppointments');
    return result;
  },

  async findId(id_type) {
    const result = await connectionDB.select().table('typeAppointments').where({ id_type });
    return result;
  },

  // async updateProducts(body: BodyProduct) {

  // },

  // async deleteProduts(id) {

  // }
}

export default ClientModel;