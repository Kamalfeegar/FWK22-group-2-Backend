const request = require('supertest');
const { app } = require('../server');

/* describe('GET /', () => {
    it('responds with status code 200', async () => {
      const response = await request(app).get('/blogpost');
      expect(response.status).toBe(200);
    });
  }); */

  describe('GET /data', () => {
    afterAll((done) => {
      server.close(done);
    });
    it('responds with a 200 status code', async () => {
      const response = await request(app).get('/blogpost');
      expect(response.status).toBe(200);
    });
  });