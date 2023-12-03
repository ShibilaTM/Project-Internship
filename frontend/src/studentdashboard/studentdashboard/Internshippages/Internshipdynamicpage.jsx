import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios"

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
<<<<<<< HEAD
            const url = 'http://127.0.0.1:4000/user/selectedinternship';
=======
            const url = 'http://127.0.0.1:4000/referenceroute/selectedinternship';
>>>>>>> rolesonpro
            const dataToSend = { internshipname: props.heading }
            // Making a POST request using async/await
            const response = await axios.post(url, dataToSend);
            console.log('POST Request Successful');
            console.log('Response Data:', response.data);
        } catch (error) {
            console.error('Error during POST request:', error.message);
        }
    }

<<<<<<< HEAD
=======

>>>>>>> rolesonpro
    const HandleBackButtonclick = () => {
        navigate("/studentdashboard");

        console.log("button clicked navigate")
    }
    const Handleconfirmbuttonclick = async () => {
<<<<<<< HEAD
        alert(`you Have selected the ${props.heading}`)
=======
        alert(`you Have selected the ${props.heading}`);
>>>>>>> rolesonpro
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
                        <h1 className='h1promax'>     {props.heading}</h1>
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


                );



            </div>
        </div>
    )
}

export default Internshipdynamicpage;

// import React, { Children, createContext, useContext, useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { Grid, Box, Stepper, Step, StepLabel } from '@mui/material';
// import Selectednavbar from '../../utilities/Selectednavbar';
// import '../../styles/indvidualIntership.css';
// import ProjectReport from "../../../project-pages/ProjectReport";




// const Internshipdynamicpage = (props) => {
//     const navigate = useNavigate();
//     // Step 2: Use the Context in your Component
//     // const [selectedInternship, setSelectedInternship] = useState();
//     const [emailoftheuser, setemailoftheuser] = useState("")

//     async function sendselectedinternship() {
//         try {
//             const url = 'http://127.0.0.1:4000/user/selectedinternship';
//             const dataToSend = { internshipname: props.heading };
//             // Making a POST request using async/await
//             const response = await axios.post(url, dataToSend);
//             console.log('POST Request Successful');
//             console.log('Response Data:', response.data);
//         } catch (error) {
//             console.error('Error during POST request:', error.message);
//         }
//     }

//     const HandleBackButtonclick = () => {
//         navigate('/studentdashboard');
//         console.log('button clicked navigate');
//     };

//     const Handleconfirmbuttonclick = async () => {
//         alert(`you Have selected the ${props.heading}`);
//         await sendselectedinternship();
//         // setSelectedInternship(props.heading); // Update the context state
//         navigate('/dash');
//     };

//     const steps = ['Signup', 'Login', 'Student dashboard', 'Project dashboard'];

//     useEffect(() => {
//         const gettheemailandsettheemail = async () => {
//             const response = await axios.get('http://127.0.0.1:4000/user/selectedinternship');
//             setemailoftheuser(response.data.emailoftheuser)
//         }
//         gettheemailandsettheemail()

//     }, [emailoftheuser])

//     return (
//         <div>

//             <div className="containeroftheInternshippage">
//                 <Selectednavbar heading={props.heading} />


//                 <Box style={{ marginBottom: '30px', marginTop: '120px' }} sx={{ width: '1000px', paddingLeft: '350px' }}>
//                     <Stepper activeStep={2} alternativeLabel>
//                         {steps.map((label) => (
//                             <Step key={label}>
//                                 <StepLabel>{label}</StepLabel>
//                             </Step>
//                         ))}
//                     </Stepper>
//                 </Box>


//                 <Grid container spacing={2} style={{ paddingTop: "40px", width: "1150px", marginLeft: "100px" }}>
//                     <Grid item lg={6} sm={12} xs={12}>
//                         <img src={props.image} className='ImageoftheIntershippage' style={{ height: "300px", width: "450px" }} alt="" />
//                     </Grid>
//                     <Grid item lg={6} sm={12} xs={12}>
//                         <h1>     {props.heading}</h1>
//                         <p className='paraoftheIntershippage' >{props.content}</p>
//                     </Grid>
//                 </Grid>



//                 <Grid container spacing={2} style={{ paddingTop: '80px', width: '1130px', marginLeft: '95px' }}>
//                     <Grid item xs={6}>
//                         <button className='BackbuttonoftheIntershippage' style={{ background: "#352F44", color: "white", borderRadius: "10px" }} onClick={HandleBackButtonclick}>Back</button>
//                     </Grid>
//                     <Grid item xs={6}>
//                         <button className='buttonoftheIntershippage' style={{ width: "280px", background: "#352F44", color: "white", borderRadius: "10px" }} onClick={Handleconfirmbuttonclick} >Click Here to Confirm your Intership</button>
//                     </Grid>
//                 </Grid>
//                 {/* Step 3: Provide the Context in your Component */}



//             </div>

//         </div>
//     );
// };

// export default Internshipdynamicpage;
