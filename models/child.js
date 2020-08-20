const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ChildSchema = Schema({
 
  firstName: String,
  lastName: String,
  reports: [
    {
      type: Schema.Types.ObjectId,
      ref: "Report"
    }
  ]
});

const Child = mongoose.model("Child", ChildSchema);

module.exports = Child;