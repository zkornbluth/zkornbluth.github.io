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
                        <Link href={project.pageLink} rel="noopener noreferrer" target="_blank" title="Open Project">
                            <Image 
                                src={link}
                                alt={project.pageLink}
                                height={15}
                                width={15}
                            />
                        </Link>
                    }
                    <Link href={project.github} rel="noopener noreferrer" target="_blank" title="Open GitHub Repository">
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
            {/* Project Image */}
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
    const authoredProjects = projects.filter(project => !project.contributor);
    const contributedProjects = projects.filter(project => project.contributor);

    return (
        <div className="project-content">
            {/* My Projects (header is handled in page) */}
            {authoredProjects.map((project, index) => (
                <DisplayProject key={`authored-${index}`} project={project} />
            ))}

            {/* Section Divider */}
            {contributedProjects.length > 0 && (
                <div className="section-divider">
                    <h2>Projects I've Contributed To</h2>
                </div>
            )}

            {/* Contributed Projects */}
            {contributedProjects.map((project, index) => (
                <DisplayProject key={`contrib-${index}`} project={project} />
            ))}
        </div>
    )
}