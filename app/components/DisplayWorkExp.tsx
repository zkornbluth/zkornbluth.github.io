export default function DisplayWorkExp( {workExp} ) {
    return (
        <div>
            <div className="workexp-header">
                <span>{workExp.title}</span>
                <span>{workExp.years}</span>
            </div>
            <div className="workexp-company">{workExp.company}</div>
            <br></br>
            <div className="workexp-des">{workExp.description}</div>
            <div className="workexp-tech-container">
                {workExp.technologies.map((tech, index) => (
                    <span key={index} className="project-tech">{tech}</span>
                ))}
            </div>
            <br></br>
        </div>
    )
}