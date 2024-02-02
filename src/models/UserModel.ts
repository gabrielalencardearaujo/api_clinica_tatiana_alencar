import connectionDB from "@/database/connectionSQL";
import { UserModelProtocol } from "./ModelProtocols";

const UserModel: UserModelProtocol = {
  async getUsers() {
    return await connectionDB.select().table('users');
  },

  async registerUser(body) {
    const result = await connectionDB.insert(body).into('users');
    return result;
  },

  async findById(idUser) {
    const result = await connectionDB.select().table('users').where({ idUser });
    return result;
  },

  async findByEmail(email) {
    const result = await connectionDB.select().table('users').where({ email });

    if(result.length === 0 ) return [];
    else return result;
  },
}

export default UserModel;