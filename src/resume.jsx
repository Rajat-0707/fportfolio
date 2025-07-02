import React from 'react'
import './resume.css'
const Resume = () => {
  return (
    <>
    <div className="h">
    <div className="container2222">
        
    <header className="header1">
      <h1>RAJAT</h1>
      <div class="contact1">
        <a href="tel:+919306919192">+91-9306919192</a>
        <span>—</span>
        <a href="mailto:rajat6248640@gmail.com">rajat6248640@gmail</a>
        <span>—</span>
        <a href="#">linkedin</a>
        <span>—</span>
        <a href="#">github</a>
      </div>
    </header>

    <hr/>

    <section class="education">
      <h2>Education</h2>
      <p className="ins">• Deenbandhu Chhotu Ram University of Science and Technology Murthal<br/>
      <em>Bachelor of Technology in Computer Science and Engineering Batch: 2023–2027</em></p>

      <p className="ins">• DAV Centenary public school<br/>
      <em>Completed 12th Grade with 93.6% Marks in 2023</em></p>

      <p className="ins">• DAV Centenary public school<br/>
      <em>Completed 10th Grade with 95.6% Marks in 2021</em></p>
    </section>

    <section class="skills">
      <h2>Skills</h2>
      <div class="skills-list">
        <p> <span className="ins">•Programming Languages:</span> C, C++, JavaScript</p>
        <p> <span className="ins">•Frameworks/Libraries:</span> React, Redux, Express.js</p>
        <p> <span className="ins">•Databases:</span> MySQL, MongoDB</p>
        <p> <span className="ins">•DevOps Tools:</span> VS Code, Git/GitHub</p>
      </div>
    </section>

    <section class="proects">
      <h2>Projects</h2>
      <ol>
        <li>
          <a href="https://takss-xhwf.vercel.app/" target="_blank">NOTES WEB APP</a><br/>
          A website created with the help of React, Redux, and Tailwind for managing tasks (editing, deleting, sharing, etc).<br/>
          It stores all the tasks locally on the web browser (does not use any database).
        </li>
        <li>
          <a href="https://project1-lruzy3hde-rajat-0707s-projects.vercel.app/" target="_blank">EVEN-ODD-GAME</a><br/>
          A website made with the help of React and CSS for styling.<br/>
          A simple game between the user and the computer of choosing even or odd and selecting any number between 1 and 5.<br/>
          If the sum of both numbers selected by the user and the computer is even/odd as selected by the user, the user wins.
        </li>
        <li>
          <a href="https://portfolio-iota-swart-42.vercel.app/" target="_blank">MY PORTFOLIO</a><br/>
          A webpage made using React and CSS. It shows myself and displays my skills, projects, and other information about me.<br/>
          It mainly uses the props and component features of React, making it fast and efficient.
        </li>
      </ol>
    </section>

    </div></div>
    </>
    
  )
}

export default Resume