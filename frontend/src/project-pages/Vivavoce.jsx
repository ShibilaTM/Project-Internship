import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import './Vivavoce.css';
import axios from 'axios';


const Vivavoce = () => {
  const Navigate = useNavigate()
  const [selectedInternship, setSelectedInternship] = useState("")

  const NameoftheIntership = async () => {
    try {
      const apiUrl = 'http://127.0.0.1:4000/user/selectedinternship';
      const response = await axios.get(apiUrl);
      console.log('Success:', response.data);
      setSelectedInternship(response.data.doc.internshipname)

      console.log('selectedInternship:', selectedInternship);
    } catch (error) {
      console.error('Error:', error.message);
    }
  }

  if (selectedInternship === "Cybersecurity Internship:") {
    Navigate("/viva2")
  }
  if (selectedInternship === "Software Engineering Internship") {
    Navigate("/viva3")
  }
  if (selectedInternship === "Web Development Internship:") {
    Navigate("/viva1")
  }
  if (selectedInternship === "Data Science Internship:") {
    Navigate("/viva4")
  }
  if (selectedInternship === "Mobile App Development Internship") {
    Navigate("/viva5")
  }
  if (selectedInternship === "UI/UX Design Internship") {
    Navigate("/viva6")
  }
  useEffect(() => {
    NameoftheIntership()
  })
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
