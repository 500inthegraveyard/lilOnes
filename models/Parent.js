const mongoose = require("mongoose");
const Schema = mongoose.Schema;

    
    const ParentSchema = Schema({
  
      name: String,
      last: String,
      email: String,
      password: String,
      Kids: [
        {
          type: Schema.Types.ObjectId,
          ref:"Child"
        }
      ]
    });
    
  
  


const Parent = mongoose.model("Parent", ParentSchema);

module.exports = Parent;