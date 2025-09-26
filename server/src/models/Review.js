const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide your name'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email'],
  },
  property: {
    type: String,
    required: [true, 'Please specify the property'],
    trim: true,
  },
  title: {
    type: String,
    required: [true, 'Please provide a title for your review'],
    trim: true,
    maxlength: 100,
  },
  review: {
    type: String,
    required: [true, 'Please write your review'],
    trim: true,
    maxlength: 1000,
  },
  rating: {
    type: Number,
    required: [true, 'Please provide a rating'],
    min: 1,
    max: 5,
  },
  verified: {
    type: Boolean,
    default: false, // admin can verify later
  },
  helpful: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
    enum: ['student-accommodation', 'shared-apartment', 'studio', 'private-room'],
    default: 'student-accommodation',
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Review', reviewSchema);
