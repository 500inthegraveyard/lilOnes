const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const KidSchema = Schema({
  kidName: String,
  photo: String
});

const Kid = mongoose.model("kid", KidSchema);

module.exports = Kid;