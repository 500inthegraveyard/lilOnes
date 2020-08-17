const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ParentKidSchema = mongoose.Schema({

    ParentName: String,
    

kids: [
    {
      
      type: Schema.Types.ObjectId,
      
      ref:"Kid"
    }
  ]
  
  
});

const ParentKid = mongoose.model("ParentKid", ParentKidSchema);

module.exports = ParentKid;