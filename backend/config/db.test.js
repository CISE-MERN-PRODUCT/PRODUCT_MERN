const { connectDB, clearDB } = require('./db.memory');

describe('Mongo memory test', () => {
  it('Mongodb memory connect test', async () => {
    expect.assertions(0);
    await connectDB();
  });
  it('Mongodb memory clear test', async () => {
    expect.assertions(0);
    await clearDB();
  });
});
