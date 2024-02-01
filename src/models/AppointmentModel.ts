import connectionDB from "@/database/connectionSQL";
import { AppointmentDB, AppointmentModelProtocol } from "./ModelProtocols";

class AppointmentModel implements AppointmentModelProtocol {
  async allAppointments() {
    const result = await connectionDB.select().table('Appointments');

    if (result.length > 0) return result;
    else return [];
  }

  async registerAppointment(body: AppointmentDB) {
    const result = await connectionDB.insert(body).into('Appointments');
    return result;
  }

  async findById(idAppointment: number) {
    const result = await connectionDB.select().where({ idAppointment }).table('Appointments')
    if (result.length > 0) return result;
    else return [];
  }

  async deleteAppointment(idAppointment: number) {
    const result = await connectionDB.delete().table('Appointments').where({ idAppointment });
    return result;
  }
}

export default new AppointmentModel;