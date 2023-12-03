import React, { useEffect, useState } from 'react'
import axios from "axios";
import ReactPlayer from "react-player"

const Mobile = () => {

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
            <h1 style={{ paddingTop: "40px", paddingBottom: "40px" }}>Mobile app development </h1>
            <h3 style={{ paddingTop: "70px", marginBottom: "40px" }}>You can watch the full course on youtube to get a basic understanding about Mobile app development </h3>
            <ReactPlayer url="https://www.youtube.com/watch?v=fis26HvvDII" controls
                playing={isPlaying}
                onPlay={handlePlay}
                onPause={handlePause} style={{ marginLeft: "350px", marginBottom: "40px" }} />

            <h3 className='h' style={{ marginTop: "70px", paddingBottom: "30px" }}> Android app develpment</h3>
            <p className='p' style={{ color: "white" }}>   Mobile app development is a dynamic and rapidly evolving field that involves the creation of software applications specifically designed for mobile devices such as smartphones and tablets. It encompasses a diverse range of platforms, including iOS for Apple devices and Android for a multitude of smartphones. The process of mobile app development typically begins with ideation and planning, where developers and stakeholders define the app's purpose, target audience, and features. Following this, a detailed design phase involves creating wireframes and prototypes to visualize the app's layout and user interface.</p>
            <a className='a' href="https://developer.android.com/codelabs/basic-android-kotlin-compose-first-app#0">Learn Data science</a>

            <h3 className='h' style={{ marginTop: "130px" }}>Ios-app development</h3>
            <p className='p' style={{ color: "white" }} > The actual development phase involves coding the app using programming languages like Swift or Objective-C for iOS and Java or Kotlin for Android. Alternatively, cross-platform frameworks like React Native or Flutter allow developers to write code that can be used on both iOS and Android platforms, streamlining the development process. Integrating functionalities such as GPS, camera access, and push notifications is a crucial part of enhancing user experience and app capabilities.</p>
            <a className='a' href="https://developer.apple.com/tutorials/app-dev-training">Learn Ios-app development</a>


            <h3 className='h' style={{ marginTop: "130px" }}>Mobile app development lifecyle</h3>
            <p className='p' style={{ color: "white" }}>
                Your app design is key to its success. The program design must have a friendly user interface. The easier it is to use, the more inclined users will be to download the app. Content should also be a top design priority, as should security. People have valuable and potentially sensitive information on their phones. Make sure you consider data protection features and privacy settings. The more advanced your app’s security protocols are, the better.
            </p>
            <a className='a' style={{ marginTop: "130px", marginBottom: "40px" }} href="https://www.upwork.com/resources/how-to-develop-an-app">Learn regression</a>
        </div >
    )
}

export default Mobile
