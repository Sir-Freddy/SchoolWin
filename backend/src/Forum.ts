import mongoose from 'mongoose';

const forum = new mongoose.Schema({
  msgCreated: {
    type: Number,
    default: 0
  },
  subjectCreated: {
    type: Number,
    default: 0
  },
  msg: {
    type: String,
    default: '',
    required: true
  },
  username: {
    type: String,
    default: ''
  },
  subject: {
    type: String,
    default: ''
  },
  type: {
    type: String
  }
});

export default mongoose.model('Forum', forum);
