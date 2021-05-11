const mongoose = require('mongoose');

const Practice = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  claims: [
    {
      type: String,
      required: true,
    },
  ],
});

module.exports = mongoose.model('Practice', Practice);
