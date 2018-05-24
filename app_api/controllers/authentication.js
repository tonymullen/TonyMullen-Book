const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
}

const register = function() {

}

const login = function() {

}

module.exports = {
  register,
  login
}
