// import { useState } from 'react'
import '../App.css'

function Skills() {
    const skills = [
        {
            title: 'Javascript + React',
            proficiency: 8
        },
        {
            title: 'HTML + CSS',
            proficiency: 9
        },
        {
            title: 'Node.js',
            proficiency: 7
        },
        {
            title: 'Python',
            proficiency: 9
        },
        {
            title: 'Jenkins',
            proficiency: 8
        },
        {
            title: 'Kubernetes + Docker',
            proficiency: 6
        },
        {
            title: 'OpenAI',
            proficiency: 7
        }
    ]

  return (
    <>
      <div className="Skills card">
        <div className='Skills-title Skills-wrapper'>
            <p className='Skills-title-text'>What I can do</p>
            <p className='Skills-subtitle'>Skills & Technologies</p>
        </div>
        <div className='Skills-content Skills-wrapper'>
            {
                skills.map((skill, index) => (
                    <div className='Skills-content-bar-container' key={index}>
                        <div className='Skills-content-bar-label'>
                            {skill.title}
                        </div>
                        <div className='Skills-content-bar'>
                            <div 
                                className='Skills-content-bar-fill' 
                                style={{ width: `${skill.proficiency * 10}%` }}
                            ></div>
                        </div>
                    </div>
                ))
            }
        </div>
      </div>
    </>
  )
}

export default Skills
