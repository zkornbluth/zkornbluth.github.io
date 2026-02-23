import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import headshot from '../assets/headshot.jpeg';
import tableau_desktop_foundations from '../assets/tableau-desktop-foundations.png';
import cloud_digital_leader from '../assets/cloud-digital-leader.png';
import CertificationBadge from './CertificationBadge';
import { workExps } from '../models/WorkExp';
import DisplayWorkExp from './DisplayWorkExp';

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
                    I completed my bachelor's degree in Computer Science at Northwestern University with a minor in Data Science.
                </p>
                <Link className="resume-link" href="/resume.pdf" target="_blank" rel="noopener noreferrer" title="View my full resume">
                    View my resume
                </Link>
                <br></br>
                <span>
                    <CertificationBadge certification={tableau_desktop_foundations} alt="Salesforce Certified Tableau Desktop Foundations" />
                    <CertificationBadge certification={cloud_digital_leader} alt="Google Cloud Digital Leader" />
                </span>
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