
import {Button,  Grid,  TextField } from '@mui/material'
import { Paper } from '@mui/material'
import { Avatar } from '@mui/material'
import LockPersonIcon from '@mui/icons-material/LockPerson';
import axios from 'axios'
import React, { useState } from 'react'


const Login = () => {
    const [user,setUser] = useState({
    email:'',
    password:''
  })
const inputHandler=(e)=>{
      setUser({
        ...user,
        [e.target.name]:e.target.value
      })
}



const addHandler = async (e) => {
  try {
     axios.post('http://127.0.0.1:4000/user/login', user)
     .then((res)=>{
      alert(res.data.message)
      if(res.data.message ==='success'){
        sessionStorage.setItem('userToken',res.data.token)
        console.log('successfully logged in')
      }
     })

   
  } catch (err) {
    console.log(err);
  }
};
  const paperStyle ={padding:20,height:'70vh',width:300,margin:'20px auto'}
  const avatarStyle = {backgroundColor:'#BF40BF'}
  const buttonStyle ={margin:'15px 0'}
  return (
    <Grid>
      <Paper  style={paperStyle}>
        <Grid align="center">
        <Avatar style={avatarStyle}><LockPersonIcon/></Avatar>
              <h1 sx={{color:'purple'}}>Login</h1>
        </Grid>
     
    <br />
  <TextField variant='outlined' label='email' name='email' onChange={inputHandler} fullWidth/>
    <br /><br />
     <TextField variant='outlined' label='Password' name='password' type='password' onChange={inputHandler} fullWidth/>
    <br /><br />
   <Button variant='contained' color='secondary' style={buttonStyle} onClick={addHandler} fullWidth>Login</Button>
    {/* <span>Email or password is incorrect</span> */}
   </Paper>
    </Grid>
      )
    }
    
    export default Login