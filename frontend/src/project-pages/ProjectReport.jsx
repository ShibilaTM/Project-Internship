import { Button, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';
import './Submission.css';
import axiosInstance from '../axiosinterceptor';

const ProjectReport = () => {
  const [project, setProject] = useState({
    projecttitle: '',
    url: '',
    projectreport: '',
    comments: '',
  });

  const [alreadySubmitted, setAlreadySubmitted] = useState(false);
  const [isFormEnabled, setIsFormEnabled] = useState(false);
  const [lastSubmissionDate, setLastSubmissionDate] = useState(null);

  useEffect(() => {
    // Check if the user has already submitted the form
    const userEmail = localStorage.getItem('userEmail');
    const hasSubmitted = localStorage.getItem(`submitted_${userEmail}`);
    if (hasSubmitted) {
      setAlreadySubmitted(true);
    }

    // Fetch the last submission date from the server
    const fetchLastSubmissionDate = async () => {
      try {
        const response = await axiosInstance.get('http://127.0.0.1:4000/form/deadline');

        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0); // Set time to midnight

        // Set the last submission date and check if it's the last week of submission
        const fetchedLastSubmissionDate = new Date(response.data.deadline);
        fetchedLastSubmissionDate.setHours(0, 0, 0, 0); // Set time to midnight

        const oneWeekInMilliseconds = 7 * 24 * 60 * 60 * 1000;

        if (currentDate < fetchedLastSubmissionDate && currentDate > fetchedLastSubmissionDate - oneWeekInMilliseconds) {
          setIsFormEnabled(true);
        } else {
          alert('Form is restricted until the last week of the course.');
        }

        setLastSubmissionDate(fetchedLastSubmissionDate);
      } catch (error) {
        console.error('Error fetching last submission date', error);
      }
    };

    fetchLastSubmissionDate();
  }, []);

  const projectHandler = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const addProject = (e) => {
    // Check if the user has already submitted the form
    if (alreadySubmitted) {
      alert('You have already submitted the form');
      return;
    }

    // Check if the form is disabled
    if (!isFormEnabled) {
      alert('Form is disabled. You can submit only during the last week of submission.');
      return;
    }

    // Check if any of the fields is empty
    for (const field in project) {
      if (!project[field].trim()) {
        alert('All fields are required');
        return;
      }
    }

    const userEmail = localStorage.getItem('userEmail');
    axiosInstance.post('http://127.0.0.1:4000/form/project', project).then((res) => {
      alert(res.data.message);
      setAlreadySubmitted(true);
      // Save in local storage to persist the information across browser sessions
      localStorage.setItem(`submitted_${userEmail}`, 'true');
      window.location.reload(false);
    });
  };

  return (
    <div className='form'>
      <div className='input'>
        <h2>Final Project Submission</h2>

        <br />

        <TextField variant='outlined' label='Project Title' fullWidth name='projecttitle' onChange={projectHandler} />
        <br />
        <br />
        <TextField variant='outlined' label='URL' fullWidth name='url' onChange={projectHandler} />
        <br />
        <br />
        <TextField variant='outlined' label='Project Report' fullWidth name='projectreport' onChange={projectHandler} />
        <br />
        <br />
        <TextField variant='outlined' label='Comments' name='comments' fullWidth multiline rows={3} onChange={projectHandler} />
        <br />
        <br />
        <Button variant='contained' onClick={addProject} disabled={!isFormEnabled}>
          Save & Submit
        </Button>
      </div>
    </div>
  );
};

export default ProjectReport;
