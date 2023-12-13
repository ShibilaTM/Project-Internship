import React from 'react'
import {Button} from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import './Vivavoce2.css';

const Vivavoce2 = () => {
  return (
    <div className='voce'>
       <br></br>
       <div className='viva'>
      <h1> Welcome To Vivavoce</h1>
      </div>
      <br></br>
      <h2>Cyber Security Viva Voce. Press the Start button : </h2>
      <br></br>
    
      <Link to="/Quiz2">
              <Button className='one'> <h2>Start</h2></Button>
             </Link>
             </div>
    
  )
}


export default Vivavoce2
