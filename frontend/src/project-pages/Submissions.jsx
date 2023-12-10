

import { Button, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';
import './Submission.css';
import axiosInstance from '../axiosinterceptor';

const Submissions = () => {
  const [subm, setSubm] = useState({
    title: '',
    url: '',
    comments: '',
  });

  const [question, setQuestion] = useState('');
  const [deadline, setDeadline] = useState('');
  const [isSubmissionAllowed, setIsSubmissionAllowed] = useState(true);

  useEffect(() => {
    // Check if the user has already submitted
    const userEmail = sessionStorage.getItem('userEmail'); // Assuming you store the user email after login
    console.log('user',userEmail)
    // Fetch question and deadline from the backend when the component mounts
    axiosInstance.get(`http://127.0.0.1:4000/form/question?userEmail=${userEmail}`)
      .then((response) => {
        setQuestion(response.data.question);
        setDeadline(response.data.deadline);

        // Check if submission is allowed based on the current date and deadline
        const now = new Date();
        const deadlineDate = new Date(response.data.deadline);

        // Check if the user has already submitted
        const hasSubmitted = localStorage.getItem(`hasSubmitted_${userEmail}`) === 'true';

        setIsSubmissionAllowed(now < deadlineDate && !hasSubmitted);
      })
      .catch((error) => {
        console.error('Error fetching question:', error);
      });
  }, []); // Empty dependency array ensures that this effect runs only once on component mount

  const inputHandler = (e) => {
    setSubm({ ...subm, [e.target.name]: e.target.value });
  };

  const addHandler = (e) => {
    // Check if submission is allowed
    if (!isSubmissionAllowed) {
      alert('Submission is not allowed after the deadline or if you have already submitted.');
      return;
    }

    // Submit only if the user has not submitted before
    if (subm.title.trim() === '' || subm.url.trim() === '' || subm.comments.trim() === '') {
      alert('Please fill in all fields.');
      return;
    }

    const userEmail = sessionStorage.getItem('userEmail'); // Assuming you store the user email after login

    axiosInstance.post(`http://127.0.0.1:4000/form/subm?userEmail=${userEmail}`, subm)
      .then((res) => {
        alert(res.data.message);
        setIsSubmissionAllowed(false); // Disable further submissions after the first one

        // Store the submission flag in localStorage
        localStorage.setItem(`hasSubmitted_${userEmail}`, 'true');
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
      });
  };

  // Function to calculate time remaining
  const calculateTimeRemaining = () => {
    const now = new Date();
    const deadlineDate = new Date(deadline);
    const timeRemaining = deadlineDate - now;

    if (timeRemaining <= 0) {
      return 'Deadline has passed';
    }

    // Convert milliseconds to days, hours, minutes
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));

    return `${days} days, ${hours} hours, ${minutes} minutes`;
  };

  return (
    <div className='form'>
      <div className='input'>
        <h2>Submissions</h2>
        <br />
        <p><b> {question}</b></p>
        <p>Deadline: {deadline}</p>
        <p>Time Remaining: {calculateTimeRemaining()}</p>
        <br />

        <TextField variant='outlined' label='Title' name='title' fullWidth onChange={inputHandler} />
        <br /><br />
        <TextField variant='outlined' label='URL' name='url' fullWidth onChange={inputHandler} />
        <br /><br />
        <TextField variant='outlined' label='Comments' name='comments' fullWidth multiline rows={3} onChange={inputHandler} />
        <br />
        <br />
        <Button variant='contained' onClick={addHandler} disabled={!isSubmissionAllowed}>
          Save & Submit
        </Button>
      </div>
    </div>
  );
};

export default Submissions;