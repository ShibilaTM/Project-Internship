// CommentList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CommentList = ({ userId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetch comments for the specific user
    axios.get(`http://127.0.0.1:4000/comments/${userId}`)
      .then(response => setComments(response.data))
      .catch(error => console.error('Error fetching comments:', error));
  }, [userId]);

  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {comments.map(comment => (
          <li key={comment._id}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
