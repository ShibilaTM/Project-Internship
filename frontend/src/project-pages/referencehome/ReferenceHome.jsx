import axios from "axios"
// import "../projectreport/projectreport.css"
import "/referencehome.css"
import { useEffect, useState } from "react"

import { Grid } from "@mui/material"
import { useNavigate } from "react-router-dom";

const ProjectReport = () => {
  const [selectedInternship, setSelectedInternship] = useState("")
  const Navigate = useNavigate();

  const NameoftheIntership = async () => {
    try {
      const apiUrl = 'http://127.0.0.1:4000/user/selectedinternship';
      const response = await axios.get(apiUrl);
      console.log('Success:', response.data);
      setSelectedInternship(response.data.nameoftheinternship[0].internshipname)
      console.log('selectedInternship:', selectedInternship);
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
  const handlerefmaterbuttonclick = () => {
    // Navigate('/referencematerials')
    if (selectedInternship === "Cybersecurity Internship:") {
      Navigate("/cyber")
    }
    if (selectedInternship === "Software Engineering Internship") {
      Navigate("/software")
    }
    if (selectedInternship === "Web Development Internship:") {
      Navigate("/web")
    }
    if (selectedInternship === "Data Science Internship:") {
      Navigate("/datasci")
    }
    if (selectedInternship === "Mobile App Development Internship") {
      Navigate("/mobile")
    }
    if (selectedInternship === "UI/UX Design Internship") {
      Navigate("/uiuix")
    }
  }
  useEffect(() => {
    NameoftheIntership()
  })
  return (
    <div className="containeroftheprojectreport">
      <div style={{ height: "100px" }}></div>
      <div className="smallcontaineroftheprojectreport">


        <h1 className="h1oftheprojectreport">
          {selectedInternship}
        </h1>

        {/* <h3 className="h3oftheprojectreport">Programming isn't about what you know; it's about what you can figure out</h3> */}
        <p className="paragraphoftheprojectreport">You can download the detailed documentation of the Project or You can start learning through the reference materials

        </p>
        <Grid container >
          <Grid item lg={6}>
            <a href="../Resource/Random.pdf" className="downloadbuttonoftheprojectreport" download="Random.pdf">DOWNLOAD</a>

          </Grid>
          <Grid item lg={6}>
            <a download="Random.pdf" className="refmaterialsbuttonoftheprojectreport" onClick={handlerefmaterbuttonclick}>Reference materials</a>

          </Grid>
        </Grid>
      </div >

    </div>
  )
}

export default ProjectReport
