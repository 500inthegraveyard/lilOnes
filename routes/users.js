const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");
// const db = require("../routes");

// Load User model
const User = require("../models/User");
const { restart } = require("nodemon");

// Register
router.post("/register", (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password,
    isTeacher,
  } = req.body.userLogin;
  let errors = [];

  if (errors.length > 0) {
    // res.render('register', {
    //   errors,
    //   name,
    //   email,
    //   password,
    // });
  } else {
    User.findOne({ email: email }).then((user) => {
      if (user) {
        errors.push({ msg: "Email already exists" });
        // res.render('register', {
        //   errors,
        //   name,
        //   email,
        //   password,
        //   password2
        // });
      } else {
        const newUser = new User({
          name: firstName + lastName,
          email,
          password,
          isTeacher,
        });
        console.log("NEW USER: ", newUser);
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then((user) => {
                req.flash("success_msg", "Account creation successful");
                res.json(user);
              })
              .catch((err) => res.json(err));
          });
        });
      }
    });
  }
});

router.get("/parents", (req, res) => {
  User.find({})
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      console.log(err);
    });
});

// Login
// router.post("/login", passport.authenticate("local"), (req, res, next) => {
//   res.json(req.user);
// });
router.post("/login", passport.authenticate("local"), {
  successRedirect: "/",
  failureRedirect: "/login",
});

// Logout
router.get("/logout", (req, res) => {
  req.logout();
  req.flash("success_msg", "You are logged out");
});

module.exports = router;
