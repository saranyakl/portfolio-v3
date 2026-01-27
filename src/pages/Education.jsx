// import { useState } from 'react'
import '../App.css'

function Education() {
  const educationExperience = [
    {
      institution: 'DAIICT',
      location: 'Gandhinagar, India',
      degree: 'Bachelors in Information Technology (B.Tech)',
      years: '2011 - 2015'
    },
    {
      institution: 'University of Florida',
      location: 'Gainesville, FL, USA',
      degree: 'Masters of Science in Computer Science (M.S.)',
      years: '2016 - 2018'
    },
    {
      institution: 'Cisco Systems Pvt. Ltd.',
      location: 'Remote (Seattle, WA, USA + RTP, NC, USA)',
      role: 'Software Engineer',
      years: '2018 - Present'
    }
  ] 

  return (
    <>
      <div className="Education card" id="education">
        <div className='Education-title Education-wrapper'>
            <p className='Education-title-text'>EDUCATION & EXPERIENCE</p>
        </div>
        <div className='Education-content Education-wrapper'>
            {
                educationExperience.map((edu, index) => (
                    <div className='Education-content-item' key={index}>
                        <p className='Education-content-item-institution'>{edu.institution} - {edu.location}</p>
                        <p className='Education-content-item-degree-role'>{edu.degree ? edu.degree : edu.role}</p>
                        <p className='Education-content-item-years'>{edu.years}</p>
                    </div>
                ))
            }
        </div>
      </div>
    </>
  )
}

export default Education
