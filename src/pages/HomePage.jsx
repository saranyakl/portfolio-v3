// import { useState } from 'react'
import '../App.css'

function HomePage() {

  return (
    <>
      <div className="HomePage card">
        <div className='HomePage-side-wrapper'>
          <div className="HomePage-description HomePage-wrapper">
            <p className='HomePage-description-text HomePage-description-location'><span>Hi - I am currently working in Cisco Systems as a software developer in Hyderabad, India.</span></p>
            <p className='HomePage-description-text HomePage-description-invite'><span>Welcome to my personal portfolio website!</span></p>
          </div>
        </div>
        <div className='HomePage-bg-image HomePage-wrapper'>
        </div>
        <div className='HomePage-content HomePage-wrapper'>
            <h1 className='HomePage-content-name'>Saranya Kalidindi</h1>
            {/* <p className='HomePage-content-summary'>I love building scalable web applications and cloud infrastructure solutions. I am passionate about AI and its applications in solving real-world problems. </p>
            <p className='HomePage-content-contact'></p> */}
            <p className='HomePage-content-role'>Software Engineer | FullStack + DevOps | AI Enthusiast | Lifelong Learner</p>
            <p className='HomePage-content-summary'>Architected and implemented robust CICD pipelines using Jenkins, Python and Github webhooks and built an entire DevOps ecosystem, enabling developers globally. Expert in designing scalable and reliable systems, identifying vulnerabilities during code reviews and pixel-perfect implementation of complex visualizations. </p>
        </div>
      </div>
    </>
  )
}

export default HomePage
