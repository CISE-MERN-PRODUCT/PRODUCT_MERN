const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

const mongod = new MongoMemoryServer();

const connectDB = async () => {
  try {
    const uri = await mongod.getUri();
    await mongoose.connect(uri, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      autoReconnect: true,
      reconnectTries: Number.MAX_VALUE,
      reconnectInterval: 1000,
    });

    console.log('MongoDB is Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

const closeDB = async () => {
  try {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongod.stop();
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

const clearDB = async () => {
  try {
    const collections = mongoose.connection.collections;
    for (const key in collections) {
      const collection = collections[key];
      await collection.deleteMany();
    }
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

describe('', () => {
  it('Mongodb memory connect test', async (done) => {
    await connectDB();
    done();
  });
  it('Mongodb memory clear test', async (done) => {
    await clearDB();
    done();
  });
  it('Mongodb memory close test', async (done) => {
    await closeDB();
    done();
  });
});

module.exports = { connectDB, closeDB, clearDB };
