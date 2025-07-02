import "./skill.css"

const Skills = (props) => {
  return (
    <>
    <div className="skill-box">
        <div className="image1">
            <img src={props.image} alt={props.name} />
        </div>
        <div className="name">{props.name}</div>
    </div>
    </>
  )
}

export default Skills