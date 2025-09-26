const express = require('express');
const router = express.Router();
const { 
  addReview, 
  getReviews, 
  updateReviewStatus 
} = require('../controllers/review.controller');
const { protect, authorize } = require('../middleware/auth.middleware');

// Public routes
router.post('/', addReview);
router.get('/', getReviews);

// Admin routes
router.put('/:id', protect, authorize('admin'), updateReviewStatus);

module.exports = router;
