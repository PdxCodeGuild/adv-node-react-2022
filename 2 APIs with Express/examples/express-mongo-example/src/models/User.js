const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
    minlength: 4,
    maxlength: 40,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
}, {
  timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;