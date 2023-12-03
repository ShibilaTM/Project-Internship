import React, { useEffect, useState } from 'react'
import axios from "axios";
import ReactPlayer from "react-player"

const Cyber = () => {
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
            <h1 style={{ paddingTop: "40px", paddingBottom: "40px" }}>Cybersecurity</h1>
            <h3 style={{ paddingTop: "70px", marginBottom: "40px" }}>You can watch the full course on youtube to get a basic understanding about Cybersecurity </h3>
            <ReactPlayer url="https://www.youtube.com/watch?v=U_P23SqJaDc" controls
                playing={isPlaying}
                onPlay={handlePlay}
                onPause={handlePause} style={{ marginLeft: "350px", marginBottom: "40px" }} />

            <h3 className='h' style={{ marginTop: "70px", paddingBottom: "30px" }}> Waterfall approach</h3>
            <p className='p' style={{ color: "white" }}>   The Waterfall approach is a linear method with distinct goals for each development phase. Teams that use waterfall spend a reasonable amount of time on product planning in the early stages of the project. They create an extensive overview of the main goals and objectives and plan what the working process will look like. Waterfall teams strive to create detailed documentation before any of the engineering stages begin. Careful planning works well for projects with little to no changes in progress as it allows for precise budgeting and time estimates. However, waterfall planning has proven to be ineffective for long-term development as it doesn’t account for possible changes and contingencies on the go.
            </p>
            <a className='a' href="https://www.altexsoft.com/blog/technical-documentation-in-software-development-types-best-practices-and-tools/">Docs</a>

            <h3 className='h' style={{ marginTop: "130px" }}>Cloud Security</h3>
            <p className='p' style={{ color: "white" }} >    Cloud Access Security Brokers (CASB): CASBs monitor and manage the use of cloud services within an organization, ensuring secure and compliant cloud adoption.

                Serverless Security: With the rise of serverless computing, new security challenges emerge, and solutions are evolving to secure applications built on serverless architectures.</p>
            <a className='a' href="https://aws.amazon.com/training/learn-about/security/">Docs</a>


            <h3 className='h' style={{ marginTop: "130px" }}>Blockchain in Cybersecurity </h3>
            <p className='p' style={{ color: "white" }}>    Decentralized Identity Management: Blockchain provides a decentralized and secure way of managing identities, reducing the risk of identity theft and unauthorized access.

                Secure Transactions: Blockchain ensures the integrity and security of transactions, making it difficult for malicious actors to tamper with data.
            </p>
            <a className='a' style={{ marginTop: "130px", marginBottom: "40px" }} href="https://www.infosectrain.com/blog/role-of-blockchain-in-cybersecurity/"> React Docs</a>
        </div >
    )

}

export default Cyber
