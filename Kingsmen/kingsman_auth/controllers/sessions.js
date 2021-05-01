const express = require('express');
const { db } = require('../models/users.js');
const router = express.Router();
const User = require('../models/users.js');

router.get('/', (req, res) => {
    res.render('../views/sessions/new.ejs')
})

router.post('/', (req, res) => {
    User.find({ "username": req.body.username }, (err, checkUser) => {
        console.log(foundUser)
        if (req.body.password === checkUser[0].password) {
            res.redirect('/room')
        } else {
            res.redirect('/')
        }
    })
})

module.exports = router;


NOT COMPLETED WILL RESUBMIT