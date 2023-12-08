import React, { useState } from 'react';
import axios from 'axios';
import { Button, Grid, TextField } from '@mui/material';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

const AddComment = ({ discussionData }) => {
  const [newComment, setNewComment] = useState('');

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleSubmit = () => {
    if (newComment.trim() === '') {
      alert('Please enter a valid comment.');
      return;
    }
    const commentData = {
      discussData: discussionData, 
      text: newComment,
    };
  
    axios.post('http://127.0.0.1:4000/comments/add', commentData)
      .then((res) => {
        alert(res.data.message);
      })
      .catch((err) => {
        console.error('Error adding comment:', err);
      });
    setNewComment('');
  };
  

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <TextField
            style={{ padding: '5px', margin: '5px' }}
            fullWidth
            label="Write your comments....."
            id="filled-basic"
            variant="filled"
            value={newComment}
            onChange={handleCommentChange}
          />
        </Grid>
        <Grid item xs={2}>
          <Button
            style={{ marginTop: '15px', marginLeft: '5em' }}
            variant="outlined"
            onClick={handleSubmit}
          >
            <SendRoundedIcon />
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddComment;