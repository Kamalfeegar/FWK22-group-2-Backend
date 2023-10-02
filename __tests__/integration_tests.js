/**
@group integration
**/
const request = require('supertest');
const app = require('../server');

//GET req test

describe('GetReqTest', () => {
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

// DELETE request test

describe('DeleteReqTest' ,() =>{
  it('delete shuld return status 200', async () => {
    const articleId = 1;
    const response = await request(app).delete(`/blogpost/${articleId}`);

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: 'success' });
  });
});
