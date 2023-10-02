/**
@group integration
**/
const request = require('supertest');
const app = require('../server');

// Test if Jest is working
describe('Test jest', () => {
    it('1 = 1', () => {
      expect(1).toBe(1);
    });
});


//Get req test

describe('getReqTest', () => {
  it('should return status: 200', async () => {
    const response = await request(app).get('/blogpost');
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('data');
  });
})
