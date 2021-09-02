// Node imports
import supertest from 'supertest';
// Own imports
import app from '../../index';

const request = supertest(app);

describe('Test image endpoint responses', () => {
  it('Gets the api endpoint', async (done) => {
    const response = await request.get('/images');
    expect(response.status).toBe(401);
    done();
  });

  it('Tests api endpoint with a non-existing image', async (done) => {
    const response = await request.get('/images?filename=notfound.jpg');
    expect(response.status).toBe(404);
    done();
  });

  it('Tests api endpoint with an existing image', async (done) => {
    const response = await request.get('/images?filename=santamonica.jpg');
    expect(response.status).toBe(200);
    done();
  });

});