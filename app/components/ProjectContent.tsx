import React from 'react';
import { projects } from './Project';
import Image from 'next/image';
import Link from 'next/link';
import github from '../assets/github.png';
import link from '../assets/link.png';

function DisplayProject({ project }) {
    return (
        <div className="project-display">
            <div className="project-header">
                {/* Project Title */}
                <span className="project-name"><strong>{project.name}</strong></span>
                {/* Project Link(s) */}
                <span className="project-links">
                    {project.pageLink != null && 
                        <Link href={project.pageLink} rel="noopener noreferrer" target="_blank">
                            <Image 
                                src={link}
                                alt={project.pageLink}
                                height={15}
                                width={15}
                            />
                        </Link>
                    }
                    <Link href={project.github} rel="noopener noreferrer" target="_blank">
                        <Image 
                            src={github}
                            alt={project.github}
                            height={15}
                            width={15}
                        />
                    </Link>
                </span>
            </div>
            {/* Project Description */}
            <div className="project-description">{project.description}</div>
            {/* Project Image? */}
            {project.image != null && 
                <div className="project-image">
                    <Image
                        src={project.image}
                        alt={project.name}
                        // width={project.width}
                        height={136}
                        style={{height: '136px', width: 'auto', maxWidth: '100%'}}
                    />
                </div>
            }
            {/* Project Technologies */}
            <div className='project-tech-container'>
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