/* eslint-disable no-undef */
import request from 'supertest';
import expressServer from '../../../rest-api/express-server';

let server;

beforeEach(async (done) => {
  server = await expressServer();
  done();
});

afterEach(async (done) => {
  await server.close();
  done();
});

describe('Root', () => {
  it('Method: GET | Route: "/" | Objective: returns 200 with expected payload', async (done) => {
    const response = await request(server).get('/');
    expect(response.statusCode).toEqual(200);
    //expect(response.body).toHaveProperty('endpoints');
    done();
  });
});