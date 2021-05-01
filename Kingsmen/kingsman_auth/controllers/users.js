const express = require('express');
const router = express.Router();
const User = require('../models/users.js');
const mongoose = require('mongoose');
//Route to new
router.get('/new', (req, res) => {
    res.render('../views/users/new.ejs');

})

//Create new user

router.post('/', (req, res) => {
    // const hash = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
    const data = new User({
        username: req.body.username,
        password: req.body.password,
        messages: req.body.messages
    });
    console.log(data.password)
    User.find({}),
        data.save();
    res.render('../views/sessions/new.ejs');
})

module.exports = router;