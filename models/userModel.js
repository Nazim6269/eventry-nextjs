const { Schema, default: mongoose } = require('mongoose');

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: false,
  },
  bio: {
    type: String,
    required: true,
  },
});

export const userModel =
  mongoose.models.users ?? mongoose.model('Users', userSchema);
