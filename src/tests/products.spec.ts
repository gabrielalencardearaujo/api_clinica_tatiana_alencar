import * as supertest from 'supertest';

const request = supertest('http://localhost:3001')

describe('testes das rotas /products', () => {
  it('deve retornar um array com todos os clients cadastrados.', async () => {
    return request.get('/products').then(res => {

      expect(res.statusCode).toEqual(200);
      console.log(res.body)
    })
  });

  it('deve retornar um array com todos os clients cadastrados.', async () => {

    return request.get('/products/2').then(res => {

      expect(res.statusCode).toEqual(200);
      console.log(res.body)
    })
  });
})