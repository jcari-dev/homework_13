const express = require('express');
const { db } = require('../models/users.js');
const router = express.Router();
const User = require('../models/users.js');

router.get('/', (req, res) => {
    res.render('../views/sessions/new.ejs')
})

router.post('/new', (req, res) => {
    // const hash = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
    db.users.find({})
    console.log(req.body.password)
})

module.exports = router;