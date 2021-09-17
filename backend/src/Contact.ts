import mongoose from 'mongoose';

const contact = new mongoose.Schema({
  msg: {
    type: String,
    default: '',
    required: true
  },
  nom: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    default: ''
  },
  phone: {
    type: String,
    default: ''
  },
  type: {
    type: String
  }
});

export default mongoose.model('Contact', contact);
