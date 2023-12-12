
// import { Button, TextField } from '@mui/material';
// import React, { useState, useEffect } from 'react';
// import './Submission.css';
// import axiosInstance from '../axiosinterceptor';

// const ProjectReport = () => {
//   const [project, setProject] = useState({
//     projecttitle: '',
//     url: '',
//     projectreport: '',
//     comments: '',
//   });

//   const [alreadySubmitted, setAlreadySubmitted] = useState(false);

//   useEffect(() => {
//     // Check if the user has already submitted the form
//     const userEmail = localStorage.getItem('userEmail');
//     const hasSubmitted = localStorage.getItem(`submitted_${userEmail}`);
//     if (hasSubmitted) {
//       setAlreadySubmitted(true);
//     }
//   }, []);

//   const projectHandler = (e) => {
//     setProject({ ...project, [e.target.name]: e.target.value });
//   };

//   const addProject = (e) => {
//     // Check if the user has already submitted the form
//     if (alreadySubmitted) {
//       alert('You have already submitted the form');
//       return;
//     }
//     // Submit only if the user has not submitted before
//     if (project.title.trim() === '' || project.url.trim() === '' || project.comments.trim() === '' || project.comments.trim() === '') {
//       alert('Please fill in all fields.');
//       return;
//     }

//     const userEmail = localStorage.getItem('userEmail');
//     // Include the user's email in the payload
//     //  const projectData = {
//     //   ...project,
//     //   userEmail: userEmail
//     // };

//     axiosInstance.post('http://127.0.0.1:4000/form/project', project).then((res) => {
//       alert(res.data.message);
//       setAlreadySubmitted(true);
//       // Save in local storage to persist the information across browser sessions
//       localStorage.setItem(`submitted_${userEmail}`, 'true');
//     });
//   };

//   return (
//     <div className='form'>
//       <div className='input'>
//         <h2>Final Project Submission</h2>

//         <br />

//         <TextField variant='outlined' label='Project Title' fullWidth name='projecttitle' onChange={projectHandler} />
//         <br />
//         <br />
//         <TextField variant='outlined' label='URL' fullWidth name='url' onChange={projectHandler} />
//         <br />
//         <br />
//         <TextField variant='outlined' label='Project Report' fullWidth name='projectreport' onChange={projectHandler} />
//         <br />
//         <br />
//         <TextField variant='outlined' label='Comments' name='comments' fullWidth multiline rows={3} onChange={projectHandler} />
//         <br />
//         <br />
//         <Button variant='contained' onClick={addProject}>
//           Save & Submit
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default ProjectReport;


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

  useEffect(() => {
    // Check if the user has already submitted the form
    const userEmail = localStorage.getItem('userEmail');
    const hasSubmitted = localStorage.getItem(`submitted_${userEmail}`);
    if (hasSubmitted) {
      setAlreadySubmitted(true);
    }
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

      // Check if any of the fields is empty
  for (const field in project) {
    if (!project[field].trim()) {
      alert('All fields are required');
      return;
    }
  }

    const userEmail = localStorage.getItem('userEmail');
    // Include the user's email in the payload
    //  const projectData = {
    //   ...project,
    //   userEmail: userEmail
    // };
   
    axiosInstance.post('http://127.0.0.1:4000/form/project', project).then((res) => {
      alert(res.data.message);
      setAlreadySubmitted(true);
      // Save in local storage to persist the information across browser sessions
      localStorage.setItem(`submitted_${userEmail}`, 'true');
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
        <Button variant='contained' onClick={addProject}>
          Save & Submit
        </Button>
      </div>
    </div>
  );
};

export default ProjectReport
