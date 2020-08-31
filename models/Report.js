const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reportSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: () => Date.now() + 7 * 24 * 60 * 60 * 1000,
  },
  activities: String,
  note: String,
  children: [
    {
      type: Schema.Types.ObjectId,
      ref: "Child",
    },
  ],
});

const Report = mongoose.model("Report", reportSchema);

module.exports = Report;
