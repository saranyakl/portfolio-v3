// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './pages/HomePage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import Education from './pages/Education.jsx'
import PreviousWork from './pages/PreviousWork.jsx';
import Skills from './pages/Skills.jsx';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <HomePage />
        <Education />
        <Skills />
        <PreviousWork />
        <ContactPage />
      </div>
    </>
  )
}

export default App
