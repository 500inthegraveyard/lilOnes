"use strict";

var mongoose = require("mongoose"); // const { report } = require("../routes/apiRoutes");
// const { Child } = require(".");


var Schema = mongoose.Schema;
var reportSchema = new mongoose.Schema({
  // day: String,
  // food: String,
  // nap: Number,
  date: {
    type: Date,
    "default": function _default() {
      return Date.now() + 7 * 24 * 60 * 60 * 1000;
    }
  },
  activities: String,
  note: String
});
var Report = mongoose.model("Report", reportSchema);
module.exports = Report;