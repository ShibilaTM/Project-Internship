import React, { useEffect, useState } from 'react'
import axios from "axios";
import ReactPlayer from "react-player"

const Web = () => {
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
            <h1 style={{ paddingTop: "40px", paddingBottom: "40px" }}>Web development</h1>
            <h3 style={{ paddingTop: "70px", marginBottom: "40px" }}>You can watch the full course on youtube to get a basic understanding about webdevelopment </h3>
            <ReactPlayer url="https://www.youtube.com/watch?v=VAaUy_Moivw" controls
                playing={isPlaying}
                onPlay={handlePlay}
                onPause={handlePause} style={{ marginLeft: "350px", marginBottom: "40px" }} />

            <h3 className='h' style={{ marginTop: "70px", paddingBottom: "30px" }}>MongoDB Documentation: </h3>
            <p className='p' style={{ color: "white" }}>MongoDB's official documentation is a comprehensive resource that covers everything you need to know about MongoDB. It includes information on installation, configuration, CRUD operations,
                indexing, aggregation, and more.
                MongoDB is a popular open-source NoSQL database management
                system that falls under the category of document-oriented databases.
                It is designed to store, retrieve, and manage data in a flexible, schema-less format,
                making it particularly well-suited for handling unstructured or semi-structured data. MongoDB is widely used in modern web development for its
                scalability, flexibility, and ease of use.</p>
            <a className='a' href="https://www.mongodb.com/docs/manual/core/document/">Docs</a>

            <h3 className='h' style={{ marginTop: "130px" }}>Express.js  Documentation </h3>
            <p className='p' style={{ color: "white" }} >Express.js is a widely-used, minimalist web application framework designed for Node.js, a server-side JavaScript runtime. Known for its simplicity and flexibility, Express.js facilitates the development of web and mobile applications by providing essential features without imposing unnecessary structures. It employs middleware to handle requests and responses, enabling developers to customize the request-response cycle efficiently. With built-in support for routing, developers can easily define routes for various HTTP requests. Express.js also supports a range of template engines for rendering dynamic content on the server, such as EJS, Pug, and Handlebars. Installation is straightforward using npm (Node Package Manager), and creating a basic server involves minimal code. The framework's active community contributes to its extensive ecosystem of middleware and extensions. Express.js is particularly valued for its modular and encapsulated routing system, allowing developers to organize routes into separate files and seamlessly integrate them into the main application. As a lightweight and powerful framework, Express.js continues to be a preferred choice for building scalable and modular server-side applications with Node.js..</p>
            <a className='a' href="https://expressjs.com/en/5x/api.html">Docs</a>


            <h3 className='h' style={{ marginTop: "130px" }}>React  Documentation: </h3>
            <p className='p' style={{ color: "white" }}>React is a declarative, efficient, and flexible JavaScript library for building user interfaces. Developed and maintained by Facebook, React has emerged as a dominant force in modern web development, providing a robust foundation for creating dynamic and interactive applications.

                At the core of React's design philosophy is the concept of components. Components are modular, self-contained building blocks that encapsulate a piece of the user interface. These components can be composed and reused, promoting a modular and maintainable code structure. This approach facilitates the development of large-scale applications by breaking down complex UIs into manageable and logically structured pieces.

                One of React's distinctive features is JSX (JavaScript XML), an extension to JavaScript that allows developers to write HTML elements within their JavaScript code. This syntactic sugar enhances code readability and makes it more expressive. JSX is then transformed into standard JavaScript during the build process, seamlessly integrating UI components into the codebase.
            </p>
            <a className='a' style={{ marginTop: "130px", marginBottom: "40px" }} href="https://legacy.reactjs.org/docs/getting-started.html"> React Docs</a>
        </div >
    )
}

export default Web
