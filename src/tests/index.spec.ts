import ClientController from "@/controllers/ClientController"
import * as supertest from 'supertest';

const request = supertest('http://localhost:3001')

it('should return true or false', async () => {
  const value = 4
  return request.get('/client/'+value).then(res => {
    
    expect(res.statusCode).toEqual(200);
    expect(res.info).toBe('É um id');

  })
})