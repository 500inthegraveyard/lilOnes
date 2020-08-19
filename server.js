const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require("./routes/apiRoutes");

const db = require("./models");



// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(express.static("publlic"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dbLilOnes", { useNewUrlParser: true, });

// db.ParentKid.create({ name: "Parents and Kids"})
//   .then(dbParentKid => {
//     console.log(dbParentKid);
//   })
//   .catch(({message}) => {
//     console.log(message);
//   });
// Connect to the Mongo DB
// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/reactrecipes",
//   { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true 


// Use apiRoutes
app.use("/api", apiRoutes);

app.get('/api/child', function (req, res) {
  res.send('Hello World!');
});

app.post('/api/child', function ({body}, res) {
  res.send('Hello World!');
})

app.delete('/api/child', function ({body}, res) {
  res.send('Hello World!');
})

app.get('/api/repor', function (req, res) {
  res.send('Hello World!');
});

app.post('/api/report', function ({body}, res) {
  res.send('Hello World!');
})

app.delete('/api/report', function ({body}, res) {
  res.send('Hello World!');
})





// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
