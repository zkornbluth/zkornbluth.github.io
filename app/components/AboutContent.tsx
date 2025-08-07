import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import headshot from '../assets/headshot.jpeg';
import { workExps } from './WorkExp';

function DisplayWorkExp( {workExp} ) {
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

export default function AboutContent() {
    return (
        <div className="about-container">
            <div className="about-sidebar">
                <h2>Zachary Kornbluth</h2>
                <Image
                    src={headshot}
                    alt="Headshot"
                    width={250}
                    height={250}
                />
                <p>
                    I'm a software developer with 2+ years experience in full stack development. 
                    I'm proficient in Python, TypeScript, and React. 
                    I possess a bachelor's degree in Computer Science from Northwestern University with a minor in Data Science.
                </p>
                <Link className="resume-link" href="/resume.pdf" target="_blank" rel="noopener noreferrer" title="View my full resume">
                    View my resume
                </Link>
            </div>
            <div className="workexps-container">
                <h3>Experience</h3>
                {workExps.map((workExp, index) => (
                    <div key={index}>
                        <DisplayWorkExp workExp={workExp} />
                        <hr></hr>
                    </div>
                ))}
            </div>
        </div>
    )
}