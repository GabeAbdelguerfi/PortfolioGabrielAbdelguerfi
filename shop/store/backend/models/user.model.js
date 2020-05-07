const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: String,
    // required: true,
    // unique: true,
    // trim: true,
    // minlength: 3,
  password: String
});

var User = mongoose.model('User', userSchema);

module.exports = User;