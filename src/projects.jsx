import React from 'react'
import './projects.css'

const Projects = (props) => {
  return (
    <div className="p-cards">
      <div className="image-project">
        <img className='project-image' src={props.image} alt="Project" />
      </div>
      <div className="detail">
        <h3 className='project-title'>{props.title}</h3>
        <p className='project-description'>{props.description}</p>
        <a className='project-link' href={props.link} target='_blank' rel="noopener noreferrer">
          View Project →
        </a>
      </div>
    </div>
  )
}

export default Projects