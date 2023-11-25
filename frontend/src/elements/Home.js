import React from 'react'
import { Link } from 'react-router-dom'
import '../elements/style.css'

const Home = () => {
  return (
    <div>
       <main>
        <section className="banner-container">
          <div className="container">
            <div className="left-section">
              <h1>Welcome to Internship Portal</h1>
              <p>
                As a college student, you might wonder what kind of computer
                science internships are available to you. Whether full time or
                part time, these work experiences provide a lot of real-world
                practice that can help you better understand your career field
                and provide qualifications for your resume.
              </p>

              <button>          <Link to='/login'>Login  </Link> </button>
            </div>
          </div>
        </section>
        <h2>Internship Courses</h2>
        <div className="card">
          <div className="card-item">
          <Link to='/signup'>  <img
              src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Advantages_and_Disadvantages_of_artificial_intelligence.jpg"
              alt=""
            /></Link>
          
            <br />
            <h4>Intenship in Artifical Inteligence and Machine Learning</h4>
          </div>
          <div className="card-item">
           
          <Link to='/signup'>  <img
              src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Advantages_and_Disadvantages_of_artificial_intelligence.jpg"
              alt=""
            /></Link>
            <br />
            <h4>Intenship in Cyber Security</h4>
          </div>
          <div className="card-item">
          <Link to='/signup'>  <img
              src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Advantages_and_Disadvantages_of_artificial_intelligence.jpg"
              alt=""
            /></Link>
            <br />
            <h4>Intenship in Data science</h4>
          </div>
        </div>
        <div className="card">
          <div className="card-item">
          <Link to='/signup'>  <img
              src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Advantages_and_Disadvantages_of_artificial_intelligence.jpg"
              alt=""
            /></Link>
            <br /> <h4>Intenship in Full Stack Development (MERN)</h4>
          </div>
          <div className="card-item">
          <Link to='/signup'>  <img
              src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Advantages_and_Disadvantages_of_artificial_intelligence.jpg"
              alt=""
            /></Link>
            <br />
            <h4>Intenship in Artifical Inteligence and Machine Learning</h4>
          </div>
          <div className="card-item">
          <Link to='/signup'>  <img
              src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Advantages_and_Disadvantages_of_artificial_intelligence.jpg"
              alt=""
            /></Link>
            <br />{" "}
            <h4>Intenship in Artifical Inteligence and Machine Learning</h4>
          </div>
        </div>

      

        <div id="root"></div>
      </main>
    </div>
  )
}

export default Home
