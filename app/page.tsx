'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './styles.css';
import email from './assets/email.png';
import github from './assets/github.png';
import linkedin from './assets/linkedin.png';
import ProjectContent from './components/ProjectContent';

function BottomButton({ displayName, clickButton, isActive }) {
  return (
    <button 
      className={`bottom-button ${isActive ? 'active' : ''}`} 
      onClick={() => clickButton(displayName)}
    >
      {displayName}
    </button>
  )
}

function BottomLinks() {
  return (
    <div className='bottom-links'>
      <Link href="mailto:zkornbluth2007@gmail.com">
        <Image
          src={email}
          alt="Email Logo"
          width={30}
          height={30}
          className='bottom-link'
        />
      </Link>
      <Link href="https://github.com/zkornbluth" rel="noopener noreferrer" target="_blank">
        <Image
          src={github}
          alt="GitHub Logo"
          width={30}
          height={30}
          className='bottom-link'
        />
      </Link>
      <Link href="https://linkedin.com/in/zachary-kornbluth/" rel="noopener noreferrer" target="_blank">
        <Image
          src={linkedin}
          alt="LinkedIn Logo"
          width={30}
          height={30}
          className='bottom-link'
        />
      </Link>
    </div>
  )
}

function PageContent({ lastClicked }) {
  switch (lastClicked) {
    case ButtonOptions.Home:
      break;
    case ButtonOptions.About:
      break;
    default:
      return <ProjectContent />
  }
}

enum ButtonOptions {
  Home = "Home",
  About = "About",
  Projects = "Projects",
  Other = ""
}
 
export default function HomePage() {
  const [lastClicked, setLastClicked] = useState<ButtonOptions>(ButtonOptions.Home);

  useEffect(() => {
    const saved = localStorage.getItem('lastClicked');
    if (saved && Object.values(ButtonOptions).includes(saved as ButtonOptions)) {
      setLastClicked(saved as ButtonOptions);
    }
  }, []);

  function clickButton(clicked: ButtonOptions) {
    setLastClicked(clicked);
    localStorage.setItem('lastClicked', clicked);
  }
 
  return (
    <div>
      <h1>{lastClicked}</h1>

      <PageContent lastClicked={lastClicked} />
      
      <div className="bottom-bar">
        <BottomButton 
          displayName={ButtonOptions.Home} 
          clickButton={clickButton} 
          isActive={lastClicked === ButtonOptions.Home} 
        />
        <BottomButton 
          displayName={ButtonOptions.About} 
          clickButton={clickButton} 
          isActive={lastClicked === ButtonOptions.About} 
        />
        <BottomButton 
          displayName={ButtonOptions.Projects} 
          clickButton={clickButton} 
          isActive={lastClicked === ButtonOptions.Projects} 
        />
        {/* <BottomButton 
          displayName={ButtonOptions.Contact} 
          clickButton={clickButton} 
          isActive={lastClicked === ButtonOptions.Contact} 
        /> */}
        {/* <BottomButton
          displayName="Test"
          clickButton={clickButton}
          isActive={false}
        /> */}
        <BottomLinks />
      </div>
      
    </div>
  );
}