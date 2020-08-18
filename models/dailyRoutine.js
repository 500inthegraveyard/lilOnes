const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DailyRoutineSchema = new mongoose.Schema({

  day: Number,
    
    routines:[{
    meals: String,
    behavior: String,
    activities: String,
    message: String,
    nap:Number,
    diapers:Number,
  }],

  kids: [
    {
      type: Schema.Types.ObjectId,
      ref:"Kid"
    }
  ]
  
});

const DailyRoutine = mongoose.model("dailyRoutine", DailyRoutineSchema);

module.exports = DailyRoutine;
