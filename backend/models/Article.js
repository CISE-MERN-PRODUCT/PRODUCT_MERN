const mongoose = require('mongoose');

const Article = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  claim: {
    type: String,
    required: true,
  },
  se_practice: {
    type: String,
    required: true,
  },
  evidence_strength: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['submitted', 'rejected', 'accepted', 'analyzed', 'public'],
    default: 'submitted',
  },
});

module.exports = mongoose.model('Article', Article);
