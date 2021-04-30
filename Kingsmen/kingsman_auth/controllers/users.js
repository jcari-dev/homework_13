const express = require('express');
const router = express.Router();
const User = require('../models/users.js');

//Route to new
router.get('/new', (req, res) => {
    res.render('../views/users/new.ejs');
})

//Create new user

router.post('/', (req, res) => {
    res.send('got chu');
})

module.exports = router;