const mongoose = require("mongoose");
const { report } = require("../routes/apiRoutes");
const { Child } = require(".");
const Schema = mongoose.Schema;

const reportSchema = new mongoose.Schema({
//creat
// Look up how we can utilize a default feature for the cardDate
  date: Number,
    activities: [{
      Name: String,
      Food: String,
      Nap: String,
      Activity: String,
      Potty: String,
    }

    ],
    // routines:[{
    // meals: String,
    // behavior: String,
    // activities: String,
    // message: String,
  //   // nap:Number,
  //   // diapers:Number,
  // }],

  child: [
    {
      type: Schema.Types.ObjectId,
      ref:"Child"
    }
  ]
  
});

const Report = mongoose.model("Report", reportSchema);

module.exports = Report;
