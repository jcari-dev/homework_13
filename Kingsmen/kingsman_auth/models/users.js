const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Name: String,
    Password: String,
    Messages: []
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;