const request = require('supertest');

const app = require('./app');
const { connectDB, clearDB, closeDB } = require('./config/db.test');

beforeAll(async (done) => {
  await connectDB();
  done();
});
describe('practice routes', () => {
  it('GET /practice --> array of practices', async (done) => {
    return request(app)
      .get('/api/practices/')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        if (response.body.length > 0) {
          expect(response.body).toEqual(
            expect.arrayContaining([
              expect.objectContaining({
                name: expect.any(String),
              }),
            ]),
          );
        } else {
          expect(response.body).toEqual([]);
        }

        done();
      });
    // expect(response.statusCode).toBe(200);
  });
});

describe('article routes', () => {
  it('Post /api/articles/ --> article', async (done) => {
    return request(app)
      .post('/api/articles/')
      .send({
        title: 'Hello',
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.msg).toEqual('Article added successfully');
        done();
      });
  });
  it('Post fail /api/articles/ --> article', async (done) => {
    return request(app)
      .post('/api/articles/')
      .send({
        title1: 'Hello',
      })
      .expect('Content-Type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.error).toEqual('Unable to add this article');
        done();
      });
    // expect(response.statusCode).toBe(200);
  });
});

afterAll((done) => {
  // Closing the DB connection allows Jest to exit successfully.
  done();
});
