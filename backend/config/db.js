const mongoose = require('mongoose');

const connectDB = async () => {
  if (!areWeTestingWithJest()) {
    try {
      await mongoose.connect(process.env.MONGO_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
      });

      console.log('MongoDB is Connected...');
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
  }
};

function areWeTestingWithJest() {
  return process.env.JEST_WORKER_ID !== undefined;
}

module.exports = connectDB;
