import React, { useEffect, useState } from 'react'
import axios from "axios";
import ReactPlayer from "react-player"
const Datasci = () => {
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
    )

}

export default Datasci
