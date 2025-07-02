import React from 'react'
import './main2.css'
import WordDisplay from './worddisplay'
const Mainpage = () => {
  return (
    <>
    <div className="cc">
     <video autoPlay loop muted src="bgvideo.mp4"></video>
    <div className="container12">

    <p className="text1">
       Hii, I am <span >Rajat</span> 
    </p>
    <div className="wd">
      <WordDisplay />
    </div>
    <p id='text2' >Welcome to my portfolio website</p>

    

    



    </div>
    </div>
    </>
   
  )
}

export default Mainpage