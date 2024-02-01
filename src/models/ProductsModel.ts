import connectionDB from "@/database/connectionSQL";
import { ProductsModelProtocol, BodyProduct } from "./ModelProtocols";

const ProductModel: ProductsModelProtocol = {
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

  async updateProducts(body: BodyProduct, id_type: number) {
    const result = await connectionDB.update(body).table('typeAppointments').where({ id_type });
    return result;
  },

  async deleteProdut(id_type) {
    const result = await connectionDB.delete().table('typeAppointments').where({ id_type });
    return result;
  }
}

export default ProductModel;