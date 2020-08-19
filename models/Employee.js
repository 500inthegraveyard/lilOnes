const mongoose = require("mongoose");
const Schema = mongoose.Schema;

    
    const EmployeeSchema = Schema({
     
      firstName: String,
      lastName: String,
      email: String,
      password: String,
      
      child: [
        {
          type: Schema.Types.ObjectId,
          ref:"Child"
        }
      ]
    });
    
  
  


const Employee = mongoose.model("Employee", EmployeeSchema);

module.exports = Employee;