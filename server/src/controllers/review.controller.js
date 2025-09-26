const Review = require('../models/Review');
const asyncHandler = require('express-async-handler');

// @desc    Add a new review
// @route   POST /api/reviews
// @access  Public
exports.addReview = asyncHandler(async (req, res) => {
  const { name, email, property, title, review, rating, category } = req.body;

  // Validation
  if (!name || !email || !property || !title || !review || !rating) {
    res.status(400);
    throw new Error('Please provide all required fields (name, email, property, title, review, rating)');
  }

  const newReview = await Review.create({
    name,
    email,
    property,
    title,
    review,
    rating,
    category,
  });

  res.status(201).json({
    success: true,
    message: 'Review submitted successfully!',
    data: newReview,
  });
});

// @desc    Get all reviews
// @route   GET /api/reviews
// @access  Public
exports.getReviews = asyncHandler(async (req, res) => {
  const reviews = await Review.find().sort({ createdAt: -1 });

  res.json({
    success: true,
    count: reviews.length,
    data: reviews,
  });
});

// @desc    Update review status (verify, etc.)
// @route   PUT /api/reviews/:id
// @access  Private/Admin
exports.updateReviewStatus = asyncHandler(async (req, res) => {
  const review = await Review.findByIdAndUpdate(
    req.params.id,
    { verified: req.body.verified },
    { new: true, runValidators: true }
  );

  if (!review) {
    res.status(404);
    throw new Error('Review not found');
  }

  res.json({
    success: true,
    data: review,
  });
});
