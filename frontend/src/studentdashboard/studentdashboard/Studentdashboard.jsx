
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // If you are using React Router
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import Theinternshipdetails from "../Resource/Theinternshipdetails"
import CardContent from '@mui/material/CardContent';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Box from '@mui/material/Box';
import Selectednavbar from '../utilities/Selectednavbar';

import "./Studentdashboard.css"
import axios from 'axios';
import ResponsiveAppBar from '../utilities/Newnavbar';
const Studentdashboard = () => {




    const [indexstate, setindexstate] = useState(null);
    const navigate = useNavigate();

    const handlecardclick = (index) => {
        navigate(`/internshippage${index + 1}`);

    };


    const steps = [
        'Signup',
        'Login',
        'Student dashboard',
        'Project dashboard',
    ];
    const getisinternshipselected = async () => {
        const response = await axios.get("http://127.0.0.1:4000/user/selectedinternship");
        console.log("Is internship selected get is triggered, ", response.data.doc.isinternshipselected)
        if (response.data.doc.isinternshipselected === true) {
            alert("You have already selected the Internship");
            navigate("/referencehome")
        }
    }
    useEffect(() => {
        getisinternshipselected()


    })

    return (
        <div className='bodyofthestudentdash'>

            {/* <h1 style={{ textAlign: "center" }}>Student Dashboard</h1> */}
            <ResponsiveAppBar />
            {/* <Box style={{ marginBottom: "60px", marginTop: "120px" }} sx={{ width: "1000px", paddingLeft: "500px" }}>
                <Stepper activeStep={2} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box> */}

            <Grid container style={{
                width: "900px",
                marginLeft: "300px",
                border: "1px solid black",
                background: "rgb(3, 96, 133)",

                padding: "10px",
                borderRadius: "10px",

            }}>

                {Theinternshipdetails.map((item, index) => (


                    <Grid item xs={12} md={6} lg={4} xl={4} >
                        <Card style={{ width: "250px", height: "270px", margin: "20px", borderRadius: "5px", backgroundColor: 'white', color: "black" }} onClick={() => handlecardclick(index)}>
                            <CardActionArea>
                                <img src={item.image} style={{ height: "150px", width: "200px", marginLeft: "25px", marginTop: "20px", borderRadius: "10px" }} alt="" />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div" className='subheadingofthetypography'>
                                        {item.heading}
                                    </Typography>

                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                ))
                }
            </Grid>
















        </div >
    )
}

export default Studentdashboard;
