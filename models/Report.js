const mongoose = require("mongoose");
// const { report } = require("../routes/apiRoutes");
// const { Child } = require(".");
const Schema = mongoose.Schema;

const reportSchema = new mongoose.Schema({

  day: String,
  food: String,
  nap: Number,
  activitie: String,
  message: String,
      
  child: [
    {
      type: Schema.Types.ObjectId,
      ref:"Child"
    }
  ]
  
});

const Report = mongoose.model("Report", reportSchema);

module.exports = Report;
