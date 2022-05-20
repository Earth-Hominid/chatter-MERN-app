const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add your name'],
    },
    email: {
      type: String,
      required: [true, 'Please add your email'],
      unique: true,
    },
    alias: {
      type: String,
      required: [true, 'Please add an alias'],
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
    },
    member: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);
