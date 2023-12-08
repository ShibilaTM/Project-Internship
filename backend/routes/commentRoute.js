const express = require('express');
const router = express.Router();
const Comment = require('../model/comment');
const User = require('../model/userData');

// Get comments for a specific user
router.get('/view/:id', async (req, res) => {
  const discussId = req.params.id;

  try {
    const comments = await Comment.find({ discussData: discussId });
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
    }
  });


router.post('/add', async (req, res) => {
  const { text, discussData } = req.body;

try {
  const comment = new Comment({ text, discussData });
  await comment.save();

  console.log('Comment added successfully:', comment);
  res.json({ message: 'Comment added successfully', comment });
} catch (error) {
  console.error('Error adding comment:', error); // Log the error object for more details
  res.status(500).json({ message: error.message });
  }
});

// Create a new comment for a specific user
// router.post('/:userId', async (req, res) => {
//   const { userId } = req.params;

//   try {
//     const user = await User.findById(userId);
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     const comment = new Comment({
//       text: req.body.text,
//       user: userId,
//     });

//     const newComment = await comment.save();
//     res.status(201).json(newComment);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

module.exports = router;
