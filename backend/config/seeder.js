const dotenv = require('dotenv');
const articles = require('../data/evidence');
const Article = require('../models/Article');
const connectDB = require('./db.js');

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Article.deleteMany();

    await Article.insertMany(articles);

    console.log('Data Imported');
    process.exit();
  } catch (err) {
    console.log(`${err}`);
    process.exit(1);
  }
};
const destroyData = async () => {
  try {
    await Article.deleteMany();

    console.log('Data destroyed'.red.inverse);
    process.exit();
  } catch (err) {
    console.log(`${err}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
