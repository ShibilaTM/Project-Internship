import React, { useState } from 'react';
import { Button, Grid, TextField} from '@mui/material';
import { Paper } from '@mui/material';
import { Avatar } from '@mui/material';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import axios from 'axios';

const Signup = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    exitmark: '',
    password: '',
    phonenumber: '',
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    phonenumber: '',
    exitmark: '',
  });


  const inputHandler = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: '', // Clear the error message when the user starts typing
    });
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePassword = (password) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,12}$/.test(password);
  };

  const validatePhoneNumber = (phoneNumber) => {
    return /^\d{10}$/.test(phoneNumber);
  };

  const addHandler = async (e) => {
    let isValid = true;
    const newErrors = {};

    //username checking
    
    if (!user.username.trim()) {
      newErrors.username = 'Username is required';
      isValid = false;
    }

    if (!validateEmail(user.email)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }

    if (!validatePassword(user.password)) {
      newErrors.password =
        'Password must be 8-12 characters and include at least one uppercase letter, one lowercase letter, and one digit';
      isValid = false;
    }

    if (!validatePhoneNumber(user.phonenumber)) {
      newErrors.phonenumber = 'Invalid phone number';
      isValid = false;
    }

    if (parseInt(user.exitmark) < 45) {
      newErrors.exitmark = 'There is not enough mark to register';
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      axios.post('http://localhost:4000/user/add', user)
      .then((res) => {
        alert('successfully registered');
        window.location.reload(false);
        // Redirect to login page after successful registration
        // navigate('/login');
      })
      .catch((error) => {
        console.error('Error in Axios request:', error);
        if (error.response) {
          console.error('Server responded with status code:', error.response.status);
          alert('Already registered')
          console.error('Response data:', error.response.data);
        }
      });
    
    }
  };

  const paperStyle = { padding: 20, margin: '20px auto' };
  const avatarStyle = { backgroundColor: '#005A92' };
  const buttonStyle = { margin: '15px 0',backgroundColor:"#005A98" ,color:'white'};

  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockPersonIcon />
          </Avatar>
          <h1 sx={{ color: 'purple' }}>Signup</h1>
        </Grid>

        <br />
        <TextField
          variant="outlined"
          label="Username"
          name="username"
          onChange={inputHandler}
          fullWidth
        />
        <br />
        <br />
        <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 2, md: 3 }}>
        <Grid item xs={6} sm={6} md={6}>
        <TextField
          variant="outlined"
          label="Email"
          name="email"
          onChange={inputHandler}
          fullWidth
          error={!!errors.email}
          helperText={errors.email}
        />
        </Grid>
        <br />
        <br />
        <Grid item xs={6} sm={6} md={6}>
        <TextField
          variant="outlined"
          label="Exit Mark"
          name="exitmark"
          onChange={inputHandler}
          fullWidth
          error={!!errors.exitmark}
          helperText={errors.exitmark}
        />
         </Grid>
        <br />
        <br />
        <Grid item xs={6} sm={6} md={6}>
        <TextField
          variant="outlined"
          label="Password"
          name="password"
          type="password"
          onChange={inputHandler}
          fullWidth
          error={!!errors.password}
          helperText={errors.password}
        />
         </Grid>
        <br />
        <br />
        <Grid item xs={6} sm={6} md={6}>
        <TextField
          variant="outlined"
          label="Phone Number"
          name="phonenumber"
          onChange={inputHandler}
          fullWidth
          error={!!errors.phonenumber}
          helperText={errors.phonenumber}
        />
        </Grid>
        </Grid>
        <br />
     
        <Button
          variant="contained"
          
          style={buttonStyle}
          onClick={addHandler}
          fullWidth
        >
          Submit
        </Button>
      </Paper>
    </Grid>
  );
};

export default Signup;



