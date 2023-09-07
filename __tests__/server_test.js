const request = require('supertest');
const { app } = require('../server');

describe('GET /', () => {
    it('responds with status code 200', async () => {
      const response = await request(app).get('/');
      expect(response.status).toBe(200);
    });
  });