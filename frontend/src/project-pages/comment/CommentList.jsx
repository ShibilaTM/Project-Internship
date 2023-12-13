import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Accordion, AccordionDetails, AccordionSummary, Divider, Grid, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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

<Accordion sx={{padding:'3px',margin:'8px'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
  
          <Typography>Comments</Typography>
        </AccordionSummary>
        <AccordionDetails>
        {comments.map((comment, index) => (


          
<Grid   style={{color:'silver', fontSize:'13px'}} key={index} >
{comment.text}

<Divider />
</Grid>


))}
        </AccordionDetails>
      </Accordion>
      
   
      

    </div>
  );
};

export default CommentList;