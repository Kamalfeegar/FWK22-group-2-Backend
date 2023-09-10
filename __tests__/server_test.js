const request = require('supertest');
const { app } = require('../server');


  describe('GET /data', () => {
    it('responds with a 200 status code', async () => {
      const response = await request(app).get('/blogpost');
      expect(response.status).toBe(200);
    });
});