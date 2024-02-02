// import ClientController from "@/controllers/ClientController"
import * as supertest from 'supertest';

const request = supertest('http://localhost:3001')

const appoObj = {
  idClient: 15,
  idPayment: 88,

}

const value = 4;


describe('testes nas rotas clients', () => {
  it('deve retornar um array com todos os clients cadastrados.', async () => {
    // const value = 4;
    return request.get('/clients').then(res => {

      expect(res.statusCode).toEqual(200);
      console.log(res.body)
    })
  });

  it('deve retornar um array com o cliente do id informado.', async () => {
    return request.get(`/client/${value}`).then(res => {

      expect(res.statusCode).toEqual(200);
      expect(res.body).toBeDefined();
      console.log(res.body)
    })
  });
})

describe('testes nas rotas appointments', () => {
  it('deve retornar um array com todas as consultas.', async () => {

    return request.get('/appointments').then(res => {

      expect(res.statusCode).toEqual(200);
      expect(res.body).toBeDefined();
      console.log(res.body);
    })
  });

  it('deve retornar um array com 1 appointment.', async () => {
    const appId = 8;
    return request.get(`/appointments/${appId}`).then(res => {

      expect(res.statusCode).toEqual(200);
      expect(res.body.body[0].idAppointment).toEqual(8);
      console.log(res.body);
    })
  });

  it('deve retornar um array com 1 appointment.', async () => {
    const appId = 8;
    return request.post(`/appointments/${appId}`, ).then(res => {

      expect(res.statusCode).toEqual(200);
      expect(res.body.body[0].idAppointment).toEqual(8);
      console.log(res.body);
    })
  });
})