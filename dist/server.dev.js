"use strict";

var express = require("express");

var mongoose = require("mongoose");

var passport = require("passport");

var flash = require("connect-flash");

var session = require("express-session");

var app = express();
var PORT = process.env.PORT || 3001;

var db = require("./config/keys").mongoURI;

var apiRoutes = require("./routes/apiRoutes");

var path = require("path"); // Passport Config


require("./config/passport")(passport); // Connect to MongoDB
// mongoose
//   .connect(
//     db,
//     { useNewUrlParser: true ,useUnifiedTopology: true}
//   )
//   .then(() => console.log('MongoDB Connected'))
//   .catch(err => console.log(err));


mongoose.connect("mongodb://localhost:27017/kidsdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  return console.log("MongoDB Connected");
})["catch"](function (err) {
  return console.log(err);
}); // Express body parser

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json()); // Serve up static assets (usually on heroku)

if (process.env.NODE_ENV === "production") {
  app.use(express["static"]("client/build"));
} // Send every request to the React app
// Define any API routes before this runs
// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });
// Express session


app.use(session({
  secret: "secret",
  resave: true,
  saveUninitialized: true
})); // Passport middleware

app.use(passport.initialize());
app.use(passport.session()); // Connect flash

app.use(flash()); // Global variables

app.use(function (req, res, next) {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  next();
}); // Routes

app.use("/users", require("./routes/users.js"));
app.use("/api", apiRoutes);
app.listen(PORT, console.log("Server started on port ".concat(PORT)));