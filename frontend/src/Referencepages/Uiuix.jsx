import React, { useEffect, useState } from 'react'
import axios from "axios";
import ReactPlayer from "react-player"
const Uiuix = () => {
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
            <h1 style={{ paddingTop: "40px", paddingBottom: "40px" }}>UI/UX development </h1>
            <h3 style={{ paddingTop: "70px", marginBottom: "40px" }}>You can watch the full course on youtube to get a basic understanding about UI/UX </h3>
            <ReactPlayer url="https://www.youtube.com/watch?v=c9Wg6Cb_YlU" controls
                playing={isPlaying}
                onPlay={handlePlay}
                onPause={handlePause} style={{ marginLeft: "350px", marginBottom: "40px" }} />

            <h3 className='h' style={{ marginTop: "70px", paddingBottom: "30px" }}>  Lightweight UX Documentation</h3>
            <p className='p' style={{ color: "white" }}>  UX documentation is a crucial part of the UX design process. It serves as a reference, giving context to the product’s lifespan from the initial concept to the current iteration.

                Good UX documentation is detailed yet lean. It should be highly focused, actionable, and purposeful.

                UXPin lets you store UX documentation, prototypes, design systems, and style guides all in one place. Discover the world’s most advanced UX design tool.</p>
            <a className='a' href="https://www.uxpin.com/studio/blog/3-step-guide-lightweight-ux-documentation/">Learn UI/UX</a>

            <h3 className='h' style={{ marginTop: "130px" }}>UI Design (User Interface):</h3>
            <p className='p' style={{ color: "white" }} > UI (User Interface) and UX (User Experience) design are two critical components of creating effective and user-friendly digital products. While closely related, they have distinct roles in shaping the overall user interaction and satisfaction with a website, application, or any digital interface.</p>
            <a className='a' href="https://aelaschool.com/en/strategy/documentation-ux-design-track-information-communicate-effortlessly/">User Interface</a>


            <h3 className='h' style={{ marginTop: "130px" }}>UX Design (User Experience):</h3>
            <p className='p' style={{ color: "white" }}>
                User Research: Conducting research to understand the target audience, their needs, behaviors, and pain points. This helps in creating a design that caters to user preferences.

                Information Architecture: Organizing and structuring content in a way that is logical and easy to navigate, ensuring users can find information intuitively.</p>
            <a className='a' style={{ marginTop: "130px", marginBottom: "40px" }} href="https://aelaschool.com/en/strategy/documentation-ux-design-track-information-communicate-effortlessly/">User Experience</a>
        </div >
    )
}

export default Uiuix
