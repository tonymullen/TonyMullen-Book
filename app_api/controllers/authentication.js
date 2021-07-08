const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');

const register = function(req, res) {
  if (!req.body.name || !req.body.email || !req.body.password) {
    res
      .status(400)
      .json({
        "message": "All fields required"
      });
    return;
  }

  const user = new User();
  user.name = req.body.name;
  user.email = req.body.email;

  user.setPassword(req.body.password);
  user.save(function(err) {
    let token;
    if (err) {
      res
        .status(404)
        .json(err);
    } else {
      token = user.generateJwt()
      res
        .status(200)
        .json({
          "token" : token
        });
    }
  })
}

const login = function(req, res) {
  if (!req.body.email || !req.body.password) {
    res
      .status(400)
      .json({
        "message": "All fields required"
      });
    return;
  }

  passport.authenticate('local', function(err, user, info) {
    let token;

    if (err) {
      res
        .status(404)
        .json(err);
      return;
    }

    if (user) {
      token = user.generateJwt();
      res
        .status(200)
        .json({
          "token" : token
        });
    } else {
      res
        .status(401)
        .json(info);
    }
  })(req, res);

};

module.exports = {
  register,
  login
}
