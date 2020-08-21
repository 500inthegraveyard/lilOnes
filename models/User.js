const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  isTeacher: {
    type: Boolean,
    required: true
  },
  children: [
    {
      type: Schema.Types.ObjectId,
      ref:"Child"
    }
  ]
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
