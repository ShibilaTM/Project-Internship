import React, { useEffect, useState } from 'react'
import ReactPlayer from "react-player"

import axios from "axios";
import { Information } from '../../Resource/Information';
import "../referencehome/referencematerial.css"
import { useNavigate } from 'react-router-dom';

const Referencematerial = () => {
    const navigate = useNavigate()
    const [isPlaying, setIsPlaying] = useState(false);
    const [selectedInternshipname, setSelectedInternshipname] = useState("")
    // const [selectedInternshipid, setSelectedInternshipid] = useState()
    const informationofproject = Information;
    const NameoftheIntership = async () => {
        try {
            const apiUrl = 'http://127.0.0.1:4000/user/selectedinternship';
            const response = await axios.get(apiUrl);
            console.log('Success:', response.data);
            setSelectedInternshipname(response.data.nameoftheinternship[0].internshipname)
            console.log('selectedInternship:', selectedInternshipname);
        } catch (error) {
            console.error('Error:', error.message);
        }
    }
    useEffect(() => {
        NameoftheIntership()
        if (selectedInternshipname === "Cybersecurity Internship") {
            navigate("/cyber")
        }
        if (selectedInternshipname === "Software Engineering Internship") {
            navigate("/software")
        }
        if (selectedInternshipname === "Web Development Internship") {
            navigate("/web")
        }
        if (selectedInternshipname === "Data Science Internship:") {
            navigate("/datasci")
        }
        if (selectedInternshipname === "Mobile App Development Internship") {
            navigate("/mobile")
        }
        if (selectedInternshipname === "UI/UX Design Internship") {
            navigate("/uiuix")
        }

    }, [selectedInternshipname])





    // const mapfoprojectreport = async () => {
    //     await informationofproject?.map((item) => {
    //         if (item.heading === selectedInternshipname) {
    //             return <div>

    //                 {item.content}
    //             </div>
    //         }

    //     })
    // };



    // console.log(informationofproject, "informationfotheporject")
    // const selectedProject = informationofproject.find((item) => item.heading === selectedInternshipname);

    // informationofproject.map((item) => {
    //     if (item.heading === selectedInternshipname) {
    //         return
    //         <div>
    //             {item.content}
    //         </div>
    //     }
    //     return <div> reference</div>
    // })

    return (
        <div>
            <h1>Reference</h1>

        </div>
    );



}

export default Referencematerial
