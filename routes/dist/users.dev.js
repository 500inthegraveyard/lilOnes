"use strict";

var express = require("express");

var router = express.Router();

var bcrypt = require("bcryptjs");

var passport = require("passport"); // const db = require("../routes");
// Load User model


var User = require("../models/User"); // Register


router.post("/register", function (req, res) {
  var _req$body$userLogin = req.body.userLogin,
      firstName = _req$body$userLogin.firstName,
      lastName = _req$body$userLogin.lastName,
      email = _req$body$userLogin.email,
      password = _req$body$userLogin.password,
      isTeacher = _req$body$userLogin.isTeacher;
  var errors = []; // if (!name || !email || !password) {
  //   errors.push({ msg: 'Please enter all fields' });
  // }
  // if (password.length < 6) {
  //   errors.push({ msg: 'Password must be at least 6 characters' });
  // }

  if (errors.length > 0) {// res.render('register', {
    //   errors,
    //   name,
    //   email,
    //   password,
    // });
  } else {
    User.findOne({
      email: email
    }).then(function (user) {
      if (user) {
        errors.push({
          msg: "Email already exists"
        }); // res.render('register', {
        //   errors,
        //   name,
        //   email,
        //   password,
        //   password2
        // });
      } else {
        var newUser = new User({
          name: firstName + lastName,
          email: email,
          password: password,
          isTeacher: isTeacher
        });
        console.log("NEW USER: ", newUser);
        bcrypt.genSalt(10, function (err, salt) {
          bcrypt.hash(newUser.password, salt, function (err, hash) {
            if (err) throw err;
            newUser.password = hash;
            newUser.save().then(function (user) {
              req.flash("success_msg", "Account creation successful");
              res.json(user);
            })["catch"](function (err) {
              return res.json(err);
            });
          });
        });
      }
    });
  }
}); // Login

router.post("/login", passport.authenticate("local"), function (req, res, next) {
  res.json(req.user);
}); // Logout

router.get("/logout", function (req, res) {
  req.logout();
  req.flash("success_msg", "You are logged out");
});
module.exports = router;