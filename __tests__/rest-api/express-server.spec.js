import expressServer from '../../rest-api/express-server';

let server;

beforeEach(async (done) => {
    server = await expressServer();
    done();
});

afterEach(async (done) =>{
    await server.close();
    done();
});

describe('express server', () =>{
    it ('Objective: started successfully', async (done) =>{
        expect(server).toBeTruthy();
        done();
    });
});