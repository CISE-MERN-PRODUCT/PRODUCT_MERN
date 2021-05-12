const request = require('supertest');
const articleRoutes = require('./routes/articles');
const practiceRoutes = require('./routes/practices');

describe('practice routes', () => {
  it('GET /articles --> array of practices', () => {
    return request(practiceRoutes)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(expect.array);
      });
  });
});
