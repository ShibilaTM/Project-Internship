import React, { useEffect, useState } from 'react'
import axios from "axios";
import ReactPlayer from "react-player"

const Software = () => {
    const handlePlay = () => {
        setIsPlaying(true);
    };

    const handlePause = () => {
        setIsPlaying(false);
    };

    const handleTogglePlay = () => {
        setIsPlaying((prevIsPlaying) => !prevIsPlaying);
    };
    const [selectedInternshipname, setSelectedInternshipname] = useState("")
    const [isPlaying, setIsPlaying] = useState(false);

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
    })

    return (
        <div className="bodyofthereferencematerial" >
            <h1 style={{ paddingTop: "40px", paddingBottom: "40px" }}>Software engineering</h1>
            <h3 style={{ paddingTop: "70px", marginBottom: "40px" }}>You can watch the full course on youtube to get a basic understanding about software engineering </h3>
            <ReactPlayer url="https://www.youtube.com/watch?v=FN_HSCp7ctw&list=PLmXKhU9FNesTrw7n8ouPsSLEcduRlENHr" controls
                playing={isPlaying}
                onPlay={handlePlay}
                onPause={handlePause} style={{ marginLeft: "350px", marginBottom: "40px" }} />

            <h3 className='h' style={{ marginTop: "70px", paddingBottom: "30px" }}>Overview Software engineering</h3>
            <p className='p' style={{ color: "white" }}>   Software documentation is a written piece of text that is often accompanied by a software program. This makes the life of all the members associated with the project easier. It may contain anything from API documentation, build notes or just help content. It is a very critical process in software development. It’s primarily an integral part of any computer code development method. Moreover, computer code practitioners are a unit typically concerned with the worth, degree of usage, and quality of the actual documentation throughout the development and its maintenance throughout the total method. Motivated by the requirements of Novatel opposition, a world-leading company developing package in support of worldwide navigation satellite system, and based mostly on the results of a former systematic mapping studies area unit aimed at a higher understanding of the usage and therefore the quality of varied technical documents throughout computer code development and their maintenance.</p>
            <a className='a' href="https://www.geeksforgeeks.org/overview-software-documentation/">Docs</a>

            <h3 className='h' style={{ marginTop: "130px" }}>SDLC Models</h3>
            <p className='p' style={{ color: "white" }} >   Software Development life cycle (SDLC) is a spiritual model used in project management that defines the stages include in an information system development project, from an initial feasibility study to the maintenance of the completed application.

                There are different software development life cycle models specify and design, which are followed during the software development phase. These models are also called "Software Development Process Models." Each process model follows a series of phase unique to its type to ensure success in the step of software development.</p>
            <a className='a' href="https://www.javatpoint.com/software-engineering-sdlc-models">Learn SDLC Models</a>


            <h3 className='h' style={{ marginTop: "130px" }}>Waterfall Model – Software Engineering </h3>
            <p className='p' style={{ color: "white" }}>   The classical waterfall model is the basic software development life cycle model. It is very simple but idealistic. Earlier this model was very popular but nowadays it is not used. But it is very important because all the other software development life cycle models are based on the classical waterfall model.
            </p>
            <a className='a' style={{ marginTop: "130px", marginBottom: "40px" }} href="https://www.geeksforgeeks.org/waterfall-model/">Learn Waterfall Model </a>
        </div >
    )
}

export default Software
