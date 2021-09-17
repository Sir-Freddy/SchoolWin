import mongoose from 'mongoose';
import validator from 'validator';

const user = new mongoose.Schema({
  username: {
    type: String,
    unique: true
  },
  email: {
    type: String,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: '{VALUE} is not a valid email',
      isAsync: false
    }
  },
  password: String,
  prenom: String,
  nom: String,
  classe: String,
  feedBack: String,

  level: {
    type: Boolean,
    default: false
  },

  progression: {
    type: Number,
    default: 0
  },

  isAdmin: {
    type: Boolean,
    default: false
  },
  emailValidate: {
    type: Boolean,
    default: false
  }
});

export default mongoose.model('User', user);
