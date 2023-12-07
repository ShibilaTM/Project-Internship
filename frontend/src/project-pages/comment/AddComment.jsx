// AddComment.js
import React, { useState } from 'react';
import axios from 'axios';
import { Button, Grid, TextField } from '@mui/material';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

const AddComment = ({ userId }) => {
  const [newComment, setNewComment] = useState('');

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send new comment to the server with the user ID
    axios.post(`http://127.0.0.1:4000/comments/${userId}`, { text: newComment })
      .then(response => {
        console.log('New comment added:', response.data);
        // Optionally, you can fetch the updated comments from the server and update the state
      })
      .catch(error => console.error('Error adding comment:', error));

    // Clear the input field
    setNewComment('');
  };

  return (
    <div>

<Grid container spacing={2}>
                <Grid item xs={10}>
                  <TextField
                    style={{ padding: "5px", margin: "5px" }}
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
                    style={{ marginTop: "15px", marginLeft: "5em" }}
                    variant="outlined"
                  >
                    <SendRoundedIcon onClick={handleSubmit}  />
                  </Button>
                </Grid>
              </Grid>



    </div>
  );
};

export default AddComment;
