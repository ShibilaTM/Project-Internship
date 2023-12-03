import React, { useEffect, useState } from 'react'
import ReactPlayer from "react-player"


export const Information = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const handlePlay = () => {
        setIsPlaying(true);
    };

    const handlePause = () => {
        setIsPlaying(false);
    };

    const handleTogglePlay = () => {
        setIsPlaying((prevIsPlaying) => !prevIsPlaying);
    };

    const ReferencematerialInfo = [{
        id: 1,
        heading: "Web Development Internship",

        content: <div className="bodyofthereferencematerial" >
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
    },
    {
        id: 2,
        heading: "Cybersecurity Internship:",
        content: <div className="bodyofthereferencematerial" >
            <h1 style={{ paddingTop: "40px", paddingBottom: "40px" }}>Software  engineering</h1>
            <h3 style={{ paddingTop: "70px", marginBottom: "40px" }}>You can watch the full course on youtube to get a basic understanding about webdevelopment </h3>
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
    },


    {
        id: 3,
        heading: "Software Engineering Internship",
        content: <div className="bodyofthereferencematerial" >
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
    }, {
        id: 4,
        heading: "Data Science Internship:",
        content: <div className="bodyofthereferencematerial" >
            <h1 style={{ paddingTop: "40px", paddingBottom: "40px" }}>Data Science </h1>
            <h3 style={{ paddingTop: "70px", marginBottom: "40px" }}>You can watch the full course on youtube to get a basic understanding about Data Science Internship</h3>
            <ReactPlayer url="https://www.youtube.com/watch?v=ua-CiDNNj30" controls
                playing={isPlaying}
                onPlay={handlePlay}
                onPause={handlePause} style={{ marginLeft: "350px", marginBottom: "40px" }} />

            <h3 className='h' style={{ marginTop: "70px", paddingBottom: "30px" }}> Data science in python</h3>
            <p className='p' style={{ color: "white" }}>   Data science is a multidisciplinary field that encompasses the extraction of actionable insights and knowledge from vast and complex datasets through a combination of statistical, mathematical, and computational methods. At its core, data science involves the collection, processing, and analysis of large volumes of structured and unstructured data to uncover patterns, trends, and valuable information that can drive informed decision-making and solve complex problems. The data science process typically includes data collection, cleaning, and preprocessing, followed by exploratory data analysis and the application of various machine learning algorithms for predictive modeling and pattern recognition. The field leverages advanced statistical techniques, programming languages such as Python and R, and tools like Jupyter notebooks and TensorFlow to develop and deploy models. Data scientists often work with big data technologies, including Hadoop and Spark, to handle and process massive datasets efficiently. Beyond the technical skills, effective communication and domain expertise are essential in data science, as findings must be translated into actionable insights for stakeholders. .</p>
            <a className='a' href="https://python-data-science.readthedocs.io/en/latest/general.html">Learn Data science</a>

            <h3 className='h' style={{ marginTop: "130px" }}>Supervised Learning</h3>
            <p className='p' style={{ color: "white" }} > Supervised learning is a category of machine learning where the algorithm is trained on a labeled dataset, meaning that each input data point is associated with a corresponding output or target. The primary objective in supervised learning is for the algorithm to learn the mapping or relationship between the input features and the output labels so that it can make predictions or classifications on new, unseen data.

                In a supervised learning scenario, the training data consists of pairs of input-output examples. The algorithm learns from these examples by identifying patterns and relationships in the data. The two main types of supervised learning tasks are classification and regression. </p>
            <a className='a' href="https://python-data-science.readthedocs.io/en/latest/supervised.html">Learn Supervised Learning</a>


            <h3 className='h' style={{ marginTop: "130px" }}>Regression</h3>
            <p className='p' style={{ color: "white" }}>
                In regression tasks, the algorithm predicts a continuous numerical output based on input features. This can include predicting house prices based on features like square footage and number of bedrooms, forecasting stock prices, or estimating the temperature based on historical data.
            </p>
            <a className='a' style={{ marginTop: "130px", marginBottom: "40px" }} href="https://python-data-science.readthedocs.io/en/latest/supervised.html#regression">Learn regression</a>
        </div >
    }
        , {
        id: 5,
        heading: "Mobile App Development Internship", content: <div className="bodyofthereferencematerial" >
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
    },
    {
        id: 6,
        heading: "UI/UX Design Internship", content: <div className="bodyofthereferencematerial" >
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
    }
    ]
    return ReferencematerialInfo
}
export default Information

// const things = [{cirnge:1,bomb:2},{cirnge:3,bomb:4}]

