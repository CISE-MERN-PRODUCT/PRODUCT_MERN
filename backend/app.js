const express = require('express');

const dotenv = require('dotenv');

const cors = require('cors');

const path = require('path');

const connectDB = require('./config/db');

const articleRoutes = require('./routes/articles');

const practiceRoutes = require('./routes/practices');

const app = express();

dotenv.config();
connectDB();
// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

//ROUTES
app.use('/api/articles', articleRoutes);
app.use('/api/practices', practiceRoutes);

//Check production or dev
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(path.resolve(), '/frontend/build')));

  app.get('*', (req, res) => res.sendFile(path.resolve('frontend', 'build', 'index.html')));
} else {
  app.get('/', (req, res) => {
    res.send('Hello fellow CISE students the app is running yaay!!!!');
  });
}

module.exports = app;
