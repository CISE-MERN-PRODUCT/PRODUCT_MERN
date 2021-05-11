const dotenv = require('dotenv');
const { articles, practices } = require('../data/evidence');
const Article = require('../models/Article');
const Practice = require('../models/Practice');
const connectDB = require('./db.js');

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Article.deleteMany();
    await Article.insertMany(articles);

    await Practice.deleteMany();
    await Practice.insertMany(practices);

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
