import React from 'react'

function About() {
  return (
    <div className='about-page'>
      <div className='container'>
        <h2 className='section-title'>About</h2>
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
              <br /><br />
              The SLIATE is a statutory body operating under the purview of the Ministry of Higher Education and is one of the leading higher educational institutions in Srilanka.
              <br /><br />
              SLIATE has been focusing on fostering Advanced Technical Education at post secondary level. It is mandated to establish Advanced Technological Institutes (ATI) in every province for technological education. At present it manages and supervises 11 ATIs and 7 ATI Sections. Its Chief Executive Officer is the Director General while each ATIs and ATI sections are headed by a Director and an Academic Coordinator respectively.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About