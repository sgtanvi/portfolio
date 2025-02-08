import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { About, Contact, Experience, Feedback, Hero, Navbar, Tach, Works, StarsCanvas, Feedbacks } from './components';
import './index.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
