const mongoose = require('mongoose');
const validator = require('validator');

// create User model
const User = mongoose.model('User', {
  name: {
    type: String,
    trim: true,
    required: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid');
      }
    }
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error('Age must be a positive number');
      }
    }
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 6,
    validate(value) {
      if (!validator.isLength(value, { min: 6, max: 6 })) {
        throw new Error('Password must be 6 characters long');
      }
    },
    validate(value) {
      if (validator.contains(value, 'password')) {
        throw new Error('Password cannot contain password');
      }
    }
  }
});

module.exports = User;
