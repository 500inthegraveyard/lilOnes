const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ChildSchema = Schema({
 
  name: String,
  last: String,
  reports: [
    {
      type: Schema.Types.ObjectId,
      ref:"Reports"
    }
  ]
});

const Child = mongoose.model("Child", ChildSchema);

module.exports = Child;