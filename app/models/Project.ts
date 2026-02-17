import wheeloffortune from '../assets/wheeloffortune-2.png';
import passwordgenerator from '../assets/passwordgenerator.png';
import weather from '../assets/weather-2.png';
import typing from '../assets/typing.png';
import todos from '../assets/todos.png';
import fileorganizer from '../assets/fileorganizer.png';
import jobsearcher from '../assets/jobsearcher.png';
import pitching from '../assets/pitching.png';
import congress from '../assets/congress.png';
import fantrax from '../assets/fantrax.png';
import livescore from '../assets/livescore.png';
import teamlogos from '../assets/teamlogos.png';
import boxscore from '../assets/boxscore.png';
import plotly from '../assets/plotly.png';
import asdict from '../assets/asdict.png';
import gtrcof from '../assets/gtr-cof.png';
import dedup from '../assets/dedup.png';
import maptoposter from '../assets/maptoposter.png';

export enum ProjectType {
    Mine,
    Contributed,
    InReview
}

interface Project {
    contributor: ProjectType;
    name: string;
    technologies: string[];
    github: string;
    pageLink?: string;
    description: string;
    image: any | null;
}

export const projects: Project[] = [
    { contributor: ProjectType.Mine, name: "Wheel of Fortune Dashboard", technologies: ["R", "Shiny"], description: "Improve your Bonus Round puzzle solving", image: wheeloffortune, github: "https://github.com/zkornbluth/WheelOfFortune", pageLink: "http://zkornbluth.github.io/WheelOfFortune" },
    { contributor: ProjectType.Mine, name: "Menu Bar Live Sports Scoreboard", technologies: ["Swift", "APIs"], description: "Follow NFL, NHL, NBA, MLB, and EPL scores", image: livescore, github: "https://github.com/zkornbluth/LiveSports-Menu" },
    { contributor: ProjectType.Mine, name: "Job Posting Filtering Tool", technologies: ["Python", "pandas", "Google Cloud"], description: "Scrape Indeed & LinkedIn with filters", image: jobsearcher, github: "https://github.com/zkornbluth/job_searcher" },
    { contributor: ProjectType.Mine, name: "Cy Young Pitching Dashboard", technologies: ["Tableau", "Python", "HTML"], description: "Analyze MLB pitcher performance", image: pitching, github: "https://github.com/zkornbluth/pitching_dashboard", pageLink: "https://zkornbluth.github.io/pitching_dashboard" },
    { contributor: ProjectType.Mine, name: "Fantrax Baseball Contract Chart", technologies: ["React", "Selenium", "TypeScript", "Tailwind CSS"], description: "Plan your offseason moves", image: fantrax, github: "https://github.com/zkornbluth/fantrax-contract-chart", pageLink: "https://zkornbluth.github.io/fantrax-contract-chart" },
    { contributor: ProjectType.Mine, name: "To Do Manager", technologies: ["React", "TypeScript", "Next.js"], description: "Track your tasks with easy editing", image: todos, github: "https://github.com/zkornbluth/todo-manager", pageLink: "https://zkornbluth.github.io/todo-manager" },
    { contributor: ProjectType.Mine, name: "Password Generator Utility", technologies: ["Swift"], description: "Generate random passwords with rules", image: passwordgenerator, github: "https://github.com/zkornbluth/PasswordGenerator" },
    { contributor: ProjectType.Mine, name: "File Organizer", technologies: ["Java", "JavaFX"], description: "Sort files into folders by extension", image: fileorganizer, github: "https://github.com/zkornbluth/FileOrganizer" },
    { contributor: ProjectType.Mine, name: "Weather Widget", technologies: ["Python", "tkinter", "APIs"], description: "View real-time weather data by location", image: weather, github: "https://github.com/zkornbluth/weather_app" },
    { contributor: ProjectType.Mine, name: "Typing Speed Test", technologies: ["React", "TypeScript", "Next.js"], description: "Measure your words per minute & accuracy", image: typing, github: "https://github.com/zkornbluth/typing-test", pageLink: "https://zkornbluth.github.io/typing-test" },
    { contributor: ProjectType.Contributed, name: "Map Poster Generator", technologies: ["Python", "Git"], description: "Fixed missing bays and straits", image: maptoposter, github: "https://github.com/originalankur/maptoposter" },
    { contributor: ProjectType.Contributed, name: "Public US Congress Database", technologies: ["YAML", "Git"], description: "Fixed legislator IDs, refreshed leadership info", image: congress, github: "https://github.com/unitedstates/congress-legislators" },
    { contributor: ProjectType.Contributed, name: "R Team Colors Package", technologies: ["R", "Git"], description: "Added Seattle Kraken, coded rebrands", image: teamlogos, github: "https://github.com/beanumber/teamcolors" },
    { contributor: ProjectType.InReview, name: "Guitar Music Theory Dashboard", technologies: ["JavaScript", "HTML/CSS", "Git"], description: "Modified tuning selection UI", image: gtrcof, github: "https://github.com/zkornbluth/gtr-cof" },
    { contributor: ProjectType.InReview, name: "Baseball Scorecard Generator", technologies: ["Python", "Git"], description: "Fixed broken class _asdict function", image: asdict, github: "https://github.com/zkornbluth/baseball" },
    { contributor: ProjectType.InReview, name: "Spotify Playlist Deduplicator", technologies: ["TypeScript", "React", "Git"], description: "Improved song matching process", image: dedup, github: "https://github.com/zkornbluth/spotify-dedup" },
    { contributor: ProjectType.InReview, name: "Plotly Example Datasets", technologies: ["Markdown", "Git"], description: "Updated broken README links", image: plotly, github: "https://github.com/zkornbluth/datasets" },
    { contributor: ProjectType.InReview, name: "MLB Stats API Wrapper", technologies: ["Python", "APIs", "Git"], description: "Added stacked version of boxscore", image: boxscore, github: "https://github.com/zkornbluth/MLB-StatsAPI" }
];