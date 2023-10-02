/**
@group integration
**/
const request = require('supertest');
const app = require('../server');

//Get req test

describe('getAllArticles', () => {
  it('should return status: 200', async () => {
    const response = await request(app).get('/blogpost');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('data');
  });
})

//Post request test

describe('createBlogPost', () => {
  it('Should create a new blog post and return status 201', async () => {
    
    const blogPostTest = {
      title: "Testing blog post title",
      description: "Testing blog post description"
    };

    const response = await request(app)
    .post("/blogpost")
    .send(blogPostTest);

    expect(response.status).toBe(201)

  });
});