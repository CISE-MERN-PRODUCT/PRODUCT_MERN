const express = require('express');

const router = express.Router();

const User = require('../models/User');

router.get('/', (req, res) => {});

router.post('/register', (req, res) => {});

router.post('/login', (req, res) => {});

module.exports = router;
