'use client';

import React, { useState, useEffect } from 'react';
import './styles.css';
import ProjectContent from './components/ProjectContent';
import AboutContent from './components/AboutContent';
import BottomButton from './components/BottomButton';
import BottomLinks from './components/BottomLinks';

function PageContent({ lastClicked }) {
  switch (lastClicked) {
    case ButtonOptions.About:
      return <AboutContent />;
    default:
      return <ProjectContent />;
  }
}

enum ButtonOptions {
  About = "About Me",
  Projects = "My Projects",
  Other = ""
}
 
export default function HomePage() {
  const [lastClicked, setLastClicked] = useState<ButtonOptions>(ButtonOptions.About);

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
    <div className="page-container">
      <div className="page-content">
        <h1>{lastClicked}</h1>

        <PageContent lastClicked={lastClicked} />
      </div>
      <div className="bottom-bar">
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
        <BottomLinks />
      </div>
      
    </div>
  );
}