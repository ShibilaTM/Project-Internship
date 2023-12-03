import React from 'react'
import { Link } from "react-router-dom";
import {Button} from "react-bootstrap";
import './Vivavoce.css';


const Vivavoce = () => {
  return (
    <div className='voce'>
       <br></br>
       <div className='viva'>
      <h1> Welcome To Vivavoce</h1>
      </div>
      <br></br>
      <h2>Web Devolopment Viva Voce. Press the Start button : </h2>
      <br></br>
    
      <Link to="/Quiz">
              <Button className='one'> <h2>Start</h2></Button>
             </Link>
             </div>
    
  )
}

export default Vivavoce
