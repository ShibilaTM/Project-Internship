import React from 'react'
import { useNavigate } from 'react-router-dom';


import DummyImage from "../../Images/GRA_Home-Header-Overlay.png"
import { Grid, Paper } from '@mui/material'
// import "./intershippages.css"
import "../../styles/indvidualIntership.css"

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Selectednavbar from '../../utilities/Selectednavbar';
import axios from 'axios';



const Internshipdynamicpage = (props) => {
    const navigate = useNavigate();

    async function sendselectedinternship() {
        try {
            const url = 'http://127.0.0.1:4000/referenceroute/selectedinternship';
            const dataToSend = { internshipname: props.heading }
            // Making a POST request using async/await
            const response = await axios.post(url, dataToSend);
            console.log('POST Request Successful');
            console.log('Response Data:', response.data);
        } catch (error) {
            console.error('Error during POST request:', error.message);
        }
    }


    const HandleBackButtonclick = () => {
        navigate("/studentdashboard");

        console.log("button clicked navigate")
    }
    const Handleconfirmbuttonclick = async () => {
        alert(`you Have selected the ${props.heading}`);
        await sendselectedinternship()
        navigate("/dash")
    }
    const steps = [
        'Signup',
        'Login',
        'Student dashboard',
        'Project dashboard',
    ];

    return (
        <div>



            <div className='containeroftheInternshippage'>

                < Selectednavbar heading={props.heading} />

                <Box style={{ marginBottom: "30px", marginTop: "120px" }} sx={{ width: "1000px", paddingLeft: "350px" }}>
                    <Stepper activeStep={2} alternativeLabel >
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel  >{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Box>

                <Grid container spacing={2} style={{ paddingTop: "40px", width: "1150px", marginLeft: "100px" }}>
                    <Grid item lg={6} sm={12} xs={12}>
                        <img src={props.image} className='ImageoftheIntershippage' style={{ height: "300px", width: "450px" }} alt="" />
                    </Grid>
                    <Grid item lg={6} sm={12} xs={12}>
                        <h1>     {props.heading}</h1>
                        <p className='paraoftheIntershippage' >{props.content}</p>
                    </Grid>
                </Grid>

                <Grid container spacing={2} style={{ paddingTop: "80px", width: "1130px", marginLeft: "95px" }}>
                    <Grid item xs={6}>
                        <button className='BackbuttonoftheIntershippage' style={{ background: "#352F44", color: "white", borderRadius: "10px" }} onClick={HandleBackButtonclick}>Back</button>
                    </Grid>

                    <Grid item xs={6}>
                        <button className='buttonoftheIntershippage' style={{ width: "280px", background: "#352F44", color: "white", borderRadius: "10px" }} onClick={Handleconfirmbuttonclick} >Click Here to Confirm your Intership</button>
                    </Grid>

                </Grid>





            </div>
        </div>
    )
}

export default Internshipdynamicpage;
