const express = require('express');
const router = express.Router();
const Comment = require('../model/comment');
const User = require('../model/userData');

// Get comments for a specific user
router.get('/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const comments = await Comment.find({ user: userId }).populate('user');
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new comment for a specific user
router.post('/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const comment = new Comment({
      text: req.body.text,
      user: userId,
    });

    const newComment = await comment.save();
    res.status(201).json(newComment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
