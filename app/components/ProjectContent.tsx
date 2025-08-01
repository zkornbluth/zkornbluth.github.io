import React from 'react';
import { projects } from './Project';

function DisplayProject({ project }) {
    return (
        <div className="project-display">
            <div className="project-name"><strong>{project.name}</strong></div>
            <div>
            {project.technologies.map((tech, index) => (
                <span key={index} className="project-tech">{tech}</span>
            ))}
            </div>
        </div>
    )
}

export default function ProjectContent() {
    return (
        <div className="project-content">
            {projects.map((project, index) => (
                <DisplayProject key={index} project={project} />
            ))}
        </div>
    )
}