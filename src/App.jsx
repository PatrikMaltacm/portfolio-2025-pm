import { useState } from 'react'
import { Link, animateScroll as scroll } from 'react-scroll';
import NavBar from './components/navbar/NavBar';
import Hero from './sections/hero/Hero';
import About from './sections/about/About';
import Projects from './sections/projects/Projects';
import Contact from './sections/contact/Contact'

function App() {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App;
