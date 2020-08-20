const mongoose = require("mongoose");
// const { report } = require("../routes/apiRoutes");
// const { Child } = require(".");
const Schema = mongoose.Schema;

const reportSchema = new mongoose.Schema({
  // day: String,
  // food: String,
  // nap: Number,
  activities: [{
    type: String
  }],
  message: String,
});

const Report = mongoose.model("Report", reportSchema);

module.exports = Report;
