const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: String,
    // required: true,
    // unique: true,
    // trim: true,
    // minlength: 3,
  password: String,
  balance: {
    "type": Number,
    "default": 500.00
  },
  cart: []
});

var User = mongoose.model('User', userSchema);

module.exports = User;