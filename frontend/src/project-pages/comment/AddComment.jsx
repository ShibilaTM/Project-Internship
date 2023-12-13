import React, { useState } from 'react';
import axios from 'axios';
import { Button, Grid, TextField } from '@mui/material';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import axiosInstance from '../../axiosinterceptor';

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
  
    axiosInstance.post('http://127.0.0.1:4000/comments/add', commentData)
      .then((res) => {
        alert(res.data.message);
        window.location.reload(false);
      })
      .catch((err) => {
        console.error('Error adding comment:', err);
      });
    setNewComment('');
  };
  

  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={6} sm={8} md={9}>
          <TextField
            style={{ padding: '5px', margin: '5px' }}
            fullWidth
            label=" Comments....."
            id="filled-basic"
            variant="filled"
            value={newComment}
            onChange={handleCommentChange}
          />
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
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