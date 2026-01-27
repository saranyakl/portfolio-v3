// import { useState } from 'react'
import '../App.css'

function ContactPage() {

  return (
    <>
      <div className="ContactPage card">
        <div className='ContactPage-content'>
          <h1 className='ContactPage-content-text'>Please reach out if you want to create impactful visual art, automatic CI/CD pipelines or any cool AI projects.</h1>
        </div>
        <div className='ContactPage-contact'>
            <div className='ContactPage-contact-details'>
                <span className='ContactPage-contact-name'>LAKSHMI SARANYA KALIDINDI</span>
                <span className='ContactPage-contact-email'>klsaranya.dev@gmail.com</span>
                <span className='ContactPage-contact-phone'>+91 800xxxx800 (Email me for my number)</span>
                <span className='ContactPage-contact-website'></span>
            </div>
            <div className='ContactPage-contact-socials'>
                <span >Find me on: </span>
                <div className='ContactPage-contact-links'>
                  <a href="https://github.com/klsaranya" target="_blank" rel="noopener noreferrer" className='ContactPage-contact-links-wrapper'>
                    <img src="/icons/github.svg" fill="#AD6A6C" alt="github" width="32" height="32"/>
                  </a>
                  <a href="https://www.linkedin.com/in/saranya-kalidindi/" target="_blank" rel="noopener noreferrer" className='ContactPage-contact-links-wrapper'>
                    <img src="/icons/linkedin2.svg" fill="#AD6A6C" alt="linkedin" width="32" height="32"/>
                  </a>
                  <a href="mailto:klsaranya108@gmail.com?subject=Hello%20from%20portfolio&body=Hi%20there!" target="_blank" rel="noopener noreferrer" className='ContactPage-contact-links-wrapper'>
                    <img src="/icons/gmail2.svg" fill="#AD6A6C" alt="gmail" width="32" height="32"/>
                  </a>
                </div>
                <a className='ContactPage-contact-resume' href="./dev_resume.pdf" download> Find my resume here! </a>
            </div>
        </div>
      </div>
    </>
  )
}

export default ContactPage