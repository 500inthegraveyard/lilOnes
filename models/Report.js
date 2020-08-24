const mongoose = require("mongoose");
// const { report } = require("../routes/apiRoutes");
// const { Child } = require(".");
const Schema = mongoose.Schema;

const reportSchema = new mongoose.Schema({
  // day: String,
  // food: String,
  // nap: Number,
  date: {
    type: Date,
    default: () => Date.now() + 7 * 24 * 60 * 60 * 1000,
  },
  activities: String,
  note: String,
});

const Report = mongoose.model("Report", reportSchema);

module.exports = Report;
