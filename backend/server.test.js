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
        expect(response.body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              name: expect.any(String),
            }),
          ]),
        );
        done();
      });
    // expect(response.statusCode).toBe(200);
  });
});

afterAll((done) => {
  // Closing the DB connection allows Jest to exit successfully.
  done();
});
