const mongoose = require("mongoose");
const Schema = mongoose.Schema;

    
    const passportUserSchema = Schema({
     
      firstName: String,
      lastName: String,
      email: String,
      password: String,
      isEmployee: Boolean,
      
      children: [
        {
          type: Schema.Types.ObjectId,
          ref:"Child"
        }
      ]
    });
    

const PassportUser = mongoose.model("PassportUser", passportUserSchema);

module.exports = PassportUser;