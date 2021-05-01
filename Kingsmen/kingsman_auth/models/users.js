const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    messages: Array
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;