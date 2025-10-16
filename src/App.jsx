// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import ResumeDownload from './ResumeDownload'
import Navbar from './navbar'
import Home from './home'
import React from 'react'
import './navbar.css'
import './home.css'
import Skills from './skills'
import Hr from './Hr'
import './hr.css'
import './skill.css'
import Projects from './projects'
import Mainpage from './mainpage'
import './main2.css'
import WordDisplay from './worddisplay'
import Contact from './contact'
import './contact.css'
import { Element } from 'react-scroll'

function App() {


  return (
    
    <>
      <div className="all">
    
      <Navbar />
      <Hr />
      <Element name="home" >
      <Mainpage />
      <Hr />
      
      <Home />
      </Element>
      <Hr />
      <Element name="skills" >
      <h1 className='myski'>My Skills</h1>
      <div className="skill">
        <div className="skill-category">
          <h3>Frontend Development</h3>
          <div className="skill-grid">
            <Skills name="HTML" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
            <Skills name="CSS" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
            <Skills name="JavaScript" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
            <Skills name="React" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
            <Skills name="Tailwind CSS" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" />
            <Skills name="Bootstrap" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
          </div>
        </div>

        <div className="skill-category">
          <h3>Backend Development</h3>
          <div className="skill-grid">
            <Skills name="Node.js" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
            <Skills name="Express.js" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
            <Skills name="MongoDB" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
            <Skills name="PHP" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" />
          </div>
        </div>

        <div className="skill-category">
          <h3>Programming Languages</h3>
          <div className="skill-grid">
            <Skills name="C" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" />
            <Skills name="C++" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" />
          </div>
        </div>

        <div className="skill-category">
          <h3>Tools & Technologies</h3>
          <div className="skill-grid">
            <Skills name="Git" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
            <Skills name="GitHub" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
            <Skills name="VS Code" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
            <Skills name="Postman" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" />
          </div>
        </div>
      </div>
      </Element>
      
      <Element name="projects" >
          <Hr />
          <h1 className='myski'>Featured Projects</h1>

       <div className="projects-container">
         <div className="project-category">
           <h3>React Applications</h3>
           <div className="projects-grid">
             <div className="project-item">
               <div className="project-card">
                 <h4>Odd Even Game</h4>
                 <p>A simple game built with React to guess if the sum of numbers guessed by both the player and computer is odd or even. Features interactive gameplay and real-time score tracking.</p>
                 <a href="https://project1-chi-eight.vercel.app/" target="_blank" rel="noopener noreferrer">View Project →</a>
               </div>
             </div>
             <div className="project-item">
               <div className="project-card">
                 <h4>Portfolio Website</h4>
                 <p>A modern, responsive portfolio website showcasing projects, skills, and experience. Built with React and styled with glassmorphism design principles.</p>
                 <a href="https://portfolion-eta.vercel.app/" target="_blank" rel="noopener noreferrer">View Project →</a>
               </div>
             </div>
           </div>
         </div>

         <div className="project-category">
           <h3 className="fullstack-heading">Full-Stack Applications</h3>
           <div className="projects-grid">
             <div className="project-item">
               <div className="project-card">
                 <h4>Task Manager</h4>
                 <p>A comprehensive task management application built with React, Redux, and CSS. Features local storage integration for persistent task management and intuitive user interface.</p>
                 <a href="#" target="_blank" rel="noopener noreferrer">View Project →</a>
               </div>
             </div>
             <div className="project-item">
               <div className="project-card">
                 <h4>Akrit - Artist Platform</h4>
                 <p>A platform connecting artists with clients for performance bookings. Provides artists with increased visibility and reach while offering clients an easy way to discover and book talented performers.</p>
                 <a href="#" target="_blank" rel="noopener noreferrer">View Project →</a>
               </div>
             </div>
           </div>
         </div>
       </div>
       </Element>

      <Element name="resume" >
       <Hr />
       <ResumeDownload />
      </Element>
      <Hr />

      <Element name="contact" >
       <Contact />
      </Element>

     </div>
    </>
  
  )
}

export default App
