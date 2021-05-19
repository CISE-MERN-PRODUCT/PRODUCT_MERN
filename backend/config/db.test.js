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

describe('Mongo memory test', () => {
  it('Mongodb memory connect test', async (done) => {
    await connectDB();
    done();
  });
  it('Mongodb memory clear test', async (done) => {
    await clearDB();
    done();
  });
});

module.exports = { connectDB, closeDB, clearDB };
