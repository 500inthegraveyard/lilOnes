"use strict";

var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var reportSchema = new mongoose.Schema({
  date: {
    type: Date,
    "default": function _default() {
      return Date.now() + 7 * 24 * 60 * 60 * 1000;
    }
  },
  activities: String,
  note: String,
  children: [{
    type: Schema.Types.ObjectId,
    ref: "Child"
  }]
});
var Report = mongoose.model("Report", reportSchema);
module.exports = Report;