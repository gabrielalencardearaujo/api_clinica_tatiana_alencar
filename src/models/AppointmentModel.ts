import connectionDB from "@/database/connectionSQL";
import { AppointmentDB, AppointmentModelProtocol } from "./ModelProtocols";

class AppointmentModel implements AppointmentModelProtocol {
  async allAppointments() {
    
  }

  async findById(id: number) {

  }

  async registerAppointment(body: AppointmentDB) {

  }

  async (id: number) {

  }

}

export default new AppointmentModel;