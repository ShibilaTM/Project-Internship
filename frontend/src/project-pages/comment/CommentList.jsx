import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid } from '@mui/material';

const CommentList = ({ discussionId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetch comments for the specific discussion
    axios.get(`http://127.0.0.1:4000/comments/view/${discussionId}`)
      .then((res) => setComments(res.data))
      .catch((err) => console.error('Error fetching comments:', err));
  }, [discussionId]);

  return (
    <div>
      <ul>
        {comments.map((comment, index) => (
          
          <Grid sx={{paddingLeft:'10px'}} style={{color:'silver', fontSize:'18px'}} key={index} >
     {comment.text}

          </Grid>
     
        ))}
      </ul>
    </div>
  );
};

export default CommentList;