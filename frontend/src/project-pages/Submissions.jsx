
import { useState, useEffect } from 'react';
import axiosInstance from '../axiosinterceptor';
import { BarLoader } from 'react-spinners';
import { css } from '@emotion/react';
import { Button, TextField } from '@mui/material';

const Submissions = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [subm, setSubm] = useState({
    title: '',
    url: '',
    comments: '',
  });
  const [question, setQuestion] = useState('');
  const [deadline, setDeadline] = useState('');
  const [isSubmissionAllowed, setIsSubmissionAllowed] = useState(true);

  useEffect(() => {
    const userEmail = sessionStorage.getItem('userEmail');
    axiosInstance
      .get(`http://127.0.0.1:4000/form/question?userEmail=${userEmail}`)
      .then((response) => {
        setQuestion(response.data.question);
        setDeadline(response.data.deadline);
        const now = new Date();
        const deadlineDate = new Date(response.data.deadline);
        const hasSubmitted =
          localStorage.getItem(`hasSubmitted_${userEmail}`) === 'true';
        setIsSubmissionAllowed(now < deadlineDate && !hasSubmitted);
      })
      .catch((error) => {
        console.error('Error fetching question:', error);
      })
      .finally(() => {
        setIsLoading(false); // Set loading state to false once the request is complete
      });
  }, []);

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



  const loaderStyles = css`
  display: block;
  margin: 20px auto; // Adjust margin as needed
`;

  return (
    <div className='form'>
      <div className='input'>
        <h2>Submissions</h2>
        {isLoading ? (
          <BarLoader
            color='#36D7B7' // Customize the color as needed
            css={loaderStyles}
            loading={isLoading}
          />
        ) : (
          <>
            <p>
              <b>Assignment: {question}</b>
            </p>
            <p>Deadline: {deadline}</p>
            <p>Time Remaining: {calculateTimeRemaining()}</p>
            <br />

            <TextField
              variant='outlined'
              label='Title'
              name='title'
              fullWidth
              onChange={inputHandler}
            />
            <br />
            <br />
            <TextField
              variant='outlined'
              label='URL'
              name='url'
              fullWidth
              onChange={inputHandler}
            />
            <br />
            <br />
            <TextField
              variant='outlined'
              label='Comments'
              name='comments'
              fullWidth
              multiline
              rows={3}
              onChange={inputHandler}
            />
            <br />
            <br />
            <Button
              variant='contained'
              onClick={addHandler}
              disabled={!isSubmissionAllowed}
            >
              Save & Submit
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Submissions;