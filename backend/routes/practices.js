const express = require('express');

const router = express.Router();

const Practice = require('../models/Practice');

router.get('/', (req, res) => {
  Practice.find()
    .then((practices) => res.json(practices))
    .catch((err) => res.status(404).json({ noarticlesfound: 'No Practices found', message: err }));
});

router.post('/', (req, res) => {
  Practice.create(req.body)
    .then((practice) => res.json({ msg: 'Article added successfully', practice: practice }))
    .catch((err) => res.status(400).json({ error: 'Unable to add this practice', message: err }));
});

module.exports = router;
