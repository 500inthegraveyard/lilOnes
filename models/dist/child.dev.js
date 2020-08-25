"use strict";

var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var ChildSchema = Schema({
  firstName: String,
  lastName: String,
  parent1: String,
  parent1_id: String,
  parent2: String,
  parent2_id: String,
  notes: String,
  reports: [{
    type: Schema.Types.ObjectId,
    ref: "Report"
  }]
});
var Child = mongoose.model("Child", ChildSchema);
module.exports = Child;