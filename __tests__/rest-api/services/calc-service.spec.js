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

const body = {
    "meters": 165
};

describe('calcMeters', () => {
  it('Method: POST | Route: "/v1/calc/metro/quadrado" | Objective: returns 200', async (done) => {
    await request(server).post('/v1/calc/metro/quadrado').send(body);
    expect(200);
    done();
  });
});