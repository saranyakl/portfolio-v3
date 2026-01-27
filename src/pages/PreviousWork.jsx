// import { useState } from 'react'
import '../App.css'

function PreviousWork() {

    const images = [
        {
            id: 3,
            src: '/images/OpenAI_API.png',
            alt: 'OpenAI API Certification',
            link:'https://www.datacamp.com/completed/statement-of-accomplishment/course/f3a4f5ba376c80d39b76358aebecea51d0382b29'
        },
         {
            id: 4,
            src: '/images/PromptEngineering.png',
            alt: 'Prompt Engineering Certification',
            link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/27d9ae14cce3a518adbc1910584422dd600e0a62'
        },
        {
            id: 5,
            src: '/images/HuggingFace.png',
            alt: 'Hugging Face Certification',
            link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/955b354ed5d807e83815a3b482808f07d4480f1e'
        },
        {
            id: 6,
            src: '/images/HuggingFace.png',
            alt: 'Hugging Face Certification',
            link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/955b354ed5d807e83815a3b482808f07d4480f1e'
        },
        {
            id: 7,
            src: '/images/kitchen_thumbnail.png',
            alt: 'Project 1',
            link: 'https://product-list-with-cart-sigma-three.vercel.app/'
        },
        {
            id: 8,
            src: '/images/card_thumbnail.png',
            alt: 'Project 2',
            link: 'https://blog-preview-frontend-project.vercel.app/'
        }
    ]


  return (
    <>
      <div className="PreviousWork card">
        <span className='PreviousWork-subtitle'>Showcase of my previous projects and certifications</span>
        <div className='PreviousWork-content'>
            {images.map((image, index) => (
                <div key={index} className='PreviousWork-content-item'>
                    {image.link ? (
                        <a href={image.link} className='PreviousWork-content-link' target="_blank" rel="noopener noreferrer">
                            <img src={image.src} alt={image.alt} className='PreviousWork-content-image'/>
                        </a>
                    ): (<img src={image.src} alt={image.alt} className='PreviousWork-content-image'/>)}
                </div>
            ))}
        </div>
      </div>
    </>
  )
}
export default PreviousWork
