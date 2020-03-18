const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'Please add a user']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Please enter a email']
    },
    password: {
        type: String,
        required: [true, 'Please enter a password']
    },
    register_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('user', UserSchema);