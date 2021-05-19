const request = require('supertest');

const app = require('./app');
const { connectDB, clearDB, closeDB } = require('./config/db.memory');

beforeAll(async () => {
  await connectDB();
});

describe('practice routes', () => {
  it('GET /api/practice/ --> array of practices', async () => {
    await request(app)
      .get('/api/practices/')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) =>
        response.body.forEach((value) => {
          expect(value).objectContaining({
            name: expect.any(String),
          });
        }),
      );
  });
});

// describe('user routes', () => {
//   it('POST /api/users/login --> array of practices', async (done) => {
//     return request(app)
//       .post('/api/users/login/')
//       .send({
//         username: 'user',
//         password: 'password',
//       })
//       .expect('Content-Type', /json/)
//       .expect(200)
//       .then((response) => {
//         expect(response.body.msg('Login Successful'));
//       });
//   });
// });

describe('article routes', () => {
  it('POST /api/articles', async () => {
    await request(app)
      .post('/api/articles')
      .send({
        title: 'Test article',
        author: 'test author',
        year: '2000',
        claim: 'Good for something',
        se_practice: 'TDD',
        evidence_strength: 'Strongly support',
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.msg).toEqual('Article submitted successfully');
      });
  });
  it('Post fail /api/articles/ --> article', async () => {
    await request(app)
      .post('/api/articles/')
      .send({
        title1: 'Hello',
      })
      .expect('Content-Type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.error).toEqual('Unable to add this article');
      });
  });
  it('Clear database', async () => {
    expect.assertions(0);
    await clearDB();
  });
});

afterAll(async () => {
  expect.assertions(0);
  // Closing the DB connection allows Jest to exit successfully.
  await closeDB();
});
