import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
// import About from './components/About'
import Skill from './components/Skill'
import Project from './components/Project'
import Contact from './components/Contact'

const App = () => {
  return (
    <div>
  
        <Navbar />
        <Home />
        {/* <About/> */}
        <Skill />
        <Project />
        <Contact />
      
    
    </div>
  )
}

export default App