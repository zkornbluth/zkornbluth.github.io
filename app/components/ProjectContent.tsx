import React from 'react';
import { projects, ProjectType } from '../models/Project';
import DisplayProject from './DisplayProject';

export default function ProjectContent() {
    const authoredProjects = projects.filter(project => project.contributor == ProjectType.Mine);
    const contributedProjects = projects.filter(project => project.contributor == ProjectType.Contributed);
    const inReviewProjects = projects.filter(project => project.contributor == ProjectType.InReview);

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

            {/* Section Divider */}
            {inReviewProjects.length > 0 && (
                <div className="section-divider">
                    <h2>Open Source Contributions In Review</h2>
                </div>
            )}

            {/* In Review Projects */}
            {inReviewProjects.map((project, index) => (
                <DisplayProject key={`inrev-${index}`} project={project} />
            ))}
        </div>
    )
}