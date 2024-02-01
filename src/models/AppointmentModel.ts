import connectionDB from "@/database/connectionSQL";
import { AppointmentDB, AppointmentModelProtocol } from "./ModelProtocols";

class AppointmentModel implements AppointmentModelProtocol {


  async registerAppointment(body: AppointmentDB) {
    const result = await connectionDB.insert(body).into('Appointments');
    return result;
  }


}

export default new AppointmentModel;