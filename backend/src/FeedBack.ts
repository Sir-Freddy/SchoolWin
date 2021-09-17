import mongoose from 'mongoose';

const feed = new mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  msg: {
    type: String,
    required: true
  },
  star1: {
    type: Boolean,
    default: false
  },
  star2: {
    type: Boolean,
    default: false
  },
  star3: {
    type: Boolean,
    default: false
  },
  star4: {
    type: Boolean,
    default: false
  },
  star5: {
    type: Boolean,
    default: false
  },
  type: {
    type: String
  }
});

export default mongoose.model('Feed', feed);
