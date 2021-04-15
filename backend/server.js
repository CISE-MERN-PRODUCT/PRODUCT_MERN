const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const bookRoutes = require('./routes/api/books');
var cors = require('cors');
const path = require('path');

const app = express();

dotenv.config();
connectDB();
// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

const port = process.env.PORT || 5000;

app.listen(port, console.log('Server is running on the port 8082'));

app.use('/api/books', bookRoutes);

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(path.resolve(), '/frontend/build')));

	app.get('*', (req, res) => res.sendFile(path.resolve('frontend', 'build', 'index.html')));
} else {
	app.get('/', (req, res) => {
		res.send('Hello fellow CISE students the app is running yaay!!!!');
	});
}
