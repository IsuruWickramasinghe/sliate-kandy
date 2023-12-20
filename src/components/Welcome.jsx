import React from 'react'
import '../styles/welcome.css'

function Welcome() {
  return (
    <div className='welcome container'>
      <h1 className="section-title welcome-title">
        Welcome to SLIATE Kandy
      </h1>
      <div className="welcome-desc">
        <div className="welcome-cards">
          <div className="vision">
            <img src="/vision.svg" alt="vision" />
            <div className="vision-title">Our Vision</div>
            <p>"To Become the Centre of Excellence in Technological Education"</p> 
          </div>
          <div className="mission">
            <img src="/mission.svg" alt="mission" />
            <div className="mission-title">Our Mission</div>
            <p> "Creating Excellent Higher National and National Diplomates with Modern Technology for Sustainable Development" </p>
          </div>
        </div>
        <div className="welcome-note">
          <img src="/about.svg" alt="about" />
          <p>
            As per the recommendations of the Committee appointed by Prof. Wiswa Waranapala, Deputy Minister of Higher Education in 1994, the Sri Lanka Institute of Advanced Technical Education (SLIATE) was formed in 1995, under the Sri Lanka Institute of Advanced Technical Education Act No. 29 of 1995, In 2001 the name of the institution was amended as Sri Lanka Institute of Advanced Technological Education, (SLIATE). It functions as an autonomous Institute for the management of Higher National and National Diploma courses. The main purposes of establishing SLIATE were to reform and restructure the entire technical and vocational education system in relation to the changing needs of economic development, to meet manpower requirements of national development strategies, and the promotion of privatization, With special concern of meeting the scarcity of trained technological manpower resources at the technician level.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Welcome