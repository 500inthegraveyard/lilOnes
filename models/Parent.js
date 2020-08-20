const mongoose = require("mongoose");
const Schema = mongoose.Schema;

    
    const ParentSchema = Schema({
  
      firstName: String,
      lastName: String,
      email: String,
      password: String,
      children: [
        {
          type: Schema.Types.ObjectId,
          ref:"Child"
        }
      ]
    });
    
  
  


const Parent = mongoose.model("Parent", ParentSchema);

module.exports = Parent;