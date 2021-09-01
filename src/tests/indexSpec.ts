import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Test image endpoint responses', () => {
  it('Gets the api endpoint', async (done) => {
    const response = await request.get('/images');
    expect(response.status).toBe(401);
    done();
  });
});