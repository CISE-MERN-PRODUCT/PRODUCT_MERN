const mongoose = require('mongoose');
const dotenv = require('dotenv');
const articles = require('../data/evidence');
const Article = require('../models/Article');
const connectDB = require('./db.js');

dotenv.config();

connectDB();

const importData = async () => {
	try {
		await Article.deleteMany();

		// const createdUsers = await User.insertMany(users);

		// const mappedArticle  = articles.map(article => {return {article.title }})

		// const adminUser = createdUsers[0]._id;

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
		console.log(`${error}`.red.inverse);
		process.exit(1);
	}
};

if (process.argv[2] === '-d') {
	destroyData();
} else {
	importData();
}
