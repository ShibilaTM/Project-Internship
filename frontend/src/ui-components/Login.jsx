import { Button, Grid, TextField, Paper, Avatar } from '@mui/material';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import axios from 'axios';
import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { usercredentials } from '../Reducers/User';
import { isloggedinred } from '../Reducers/Userisloggedin';

const Login = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  // const [userforcontext, setUserforcontext] = useState({
  //   email: '',
  //   password: '',
  // });

  const [error, setError] = useState('');

  const inputHandler = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });

    setError(''); // Clear any previous error message
  };

  const addHandler = async (e) => {
    try {
      // Check for empty fields
      if (!user.email || !user.password) {
        setError('Email and password are required');
        return;
      }

      const response = await axios.post('http://127.0.0.1:4000/user/login', user);

      if (response.data.message === 'success') {

        const responseofuserisloggedin = await axios.post('http://127.0.0.1:4000/protection/theuserlogindata', { isloggedin: true });
        console.log("responseofuserisloggedin", responseofuserisloggedin)
        const userEmail = user.email; // Accessing the user's email from the state
        sessionStorage.setItem('userToken', response.data.token);
        // During the login process
        sessionStorage.setItem('userEmail', userEmail);

        localStorage.setItem('userEmail', userEmail); // Store the user's email in local storage
        console.log('Successfully logged in as:', userEmail);
        alert('success')
        console.log("responseofuserisloggedin in login pagepromax", responseofuserisloggedin.data.saveduserlogindata._id)
        const dispatchthestate = async () => {
          await dispatch(usercredentials({ idoftheloginpost: responseofuserisloggedin.data.saveduserlogindata._id }));
          await dispatch(isloggedinred({ isloggedin: true }));
        }
        await dispatchthestate()
        //set the value of the redux global state variable(isloggedin)to true whenever user is loggedin
        navigate('/studentdashboard');
      } else {
        alert('Email or password is incorrect');
        setError(''); // Clear any previous error message
      }
    } catch (error) {
      console.log(error);
      setError('Email or password is incorrect');
    }
  };


  const paperStyle = { padding: 20, width: '100%', maxWidth: 400, margin: '20px auto' };
  const avatarStyle = { backgroundColor: '#005A92' };
  const buttonStyle = { margin: '15px 0', backgroundColor: "#005A98", color: 'white' };

  return (
    <Grid container justifyContent="center">
      <Paper style={paperStyle}>
        <Grid container direction="column" alignItems="center" spacing={2}>
          <Grid item>
            <Avatar style={avatarStyle}>
              <LockPersonIcon />
            </Avatar>
          </Grid>
          <Grid item>
            <h1 sx={{ color: 'purple' }}>Login</h1>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <TextField variant="outlined" label="email" name="email" onChange={inputHandler} fullWidth />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <TextField
              variant="outlined"
              label="Password"
              name="password"
              type="password"
              onChange={inputHandler}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Button
              variant="contained"
              color="secondary"
              style={buttonStyle}
              sx={{ width: '100%' }}
              onClick={addHandler}
              fullWidth
            >
              Login
            </Button>
          </Grid>
          {error && (
            <Grid item xs={12} sm={12} md={12}>
              <p style={{ color: 'red', margin: 0 }}>{error}</p>
            </Grid>
          )}
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Login;