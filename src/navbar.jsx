import React from 'react'
import './navbar.css' 
import {Link} from 'react-scroll' // Importing link from react-scroll for smooth scrolling

const Navbar = () => {
  return (
    <>

    {/* <div className="main"> */}
    <div className="container67"> 
      <div className="blank">
      
      </div>
    <div className="nav">

      <div className="home"><Link    className='linn'    to='home'>Home</Link></div>
      <div className="skills"><Link    className='linn'    to='skills'>Skills</Link></div>
      <div className="projects"><Link    className='linn'    to='projects'>Projects</Link></div>

      <div className="resume"><Link    className='linn'    to='resume'>Resume</Link></div>
      <div className="contact"><Link    className='linn'    to='resume'>Contact me</Link></div>

    </div></div>
    
    
  {/* </div> */}
    </>
    
  )
}

export default Navbar