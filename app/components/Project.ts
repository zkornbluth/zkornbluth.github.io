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

export enum ProjectType {
    Mine,
    Contributed,
    InReview
}

export class Project {
    contributor: ProjectType;
    name: string;
    technologies: string[];
    github: string;
    pageLink: string | null;
    description: string;
    image: any | null;

    constructor(contributor: ProjectType, name: string, technologies: string[], description: string, image: any, github: string, pageLink?: string) {
        this.contributor = contributor;
        this.name = name;
        this.technologies = technologies;
        this.github = github;
        this.pageLink = pageLink;
        this.description = description;
        this.image = image;
    }
}

const projects: Project[] = [
    new Project(ProjectType.Mine, "Wheel of Fortune Dashboard", ["R", "Shiny"], "Improve your Bonus Round puzzle solving", wheeloffortune, "https://github.com/zkornbluth/WheelOfFortune", "http://zkornbluth.github.io/WheelOfFortune"),
    new Project(ProjectType.Mine, "Menu Bar Live Sports Scoreboard", ["Swift", "APIs"], "Follow NFL, NHL, NBA, MLB, and EPL scores", livescore, "https://github.com/zkornbluth/LiveSports-Menu"),
    new Project(ProjectType.Mine, "Job Posting Filtering Tool", ["Python", "pandas"], "Scrape Indeed & LinkedIn with filters", jobsearcher, "https://github.com/zkornbluth/job_searcher"),
    new Project(ProjectType.Mine, "Cy Young Pitching Dashboard", ["Tableau", "Python", "HTML"], "Analyze MLB pitcher performance", pitching, "https://github.com/zkornbluth/pitching_dashboard", "https://zkornbluth.github.io/pitching_dashboard"),
    new Project(ProjectType.Mine, "Fantrax Baseball Contract Chart", ["React", "Selenium", "TypeScript", "Next.js"], "Plan your offseason moves", fantrax, "https://github.com/zkornbluth/fantrax-contract-chart", "https://zkornbluth.github.io/fantrax-contract-chart"),
    new Project(ProjectType.Mine, "To Do Manager", ["React", "TypeScript", "Next.js"], "Track your tasks with easy editing", todos, "https://github.com/zkornbluth/todo-manager", "https://zkornbluth.github.io/todo-manager"),
    new Project(ProjectType.Mine, "Password Generator Utility", ["Swift"], "Generate random passwords with rules", passwordgenerator, "https://github.com/zkornbluth/PasswordGenerator"),
    new Project(ProjectType.Mine, "File Organizer", ["Java", "JavaFX"], "Sort files into folders by extension", fileorganizer, "https://github.com/zkornbluth/FileOrganizer"),
    new Project(ProjectType.Mine, "Weather Widget", ["Python", "tkinter", "APIs"], "View real-time weather data by location", weather, "https://github.com/zkornbluth/weather_app"),
    new Project(ProjectType.Mine, "Typing Speed Test", ["React", "TypeScript", "Next.js"], "Measure your words per minute & accuracy", typing, "https://github.com/zkornbluth/typing-test", "https://zkornbluth.github.io/typing-test"),
    new Project(ProjectType.Contributed, "Public US Congress Database", ["YAML", "Git"], "Fixed legislator IDs, refreshed leadership info", congress, "https://github.com/unitedstates/congress-legislators"),
    new Project(ProjectType.Contributed, "R Team Colors Package", ["R", "Git"], "Added Seattle Kraken, coded rebrands", teamlogos, "https://github.com/beanumber/teamcolors"),
    new Project(ProjectType.InReview, "MLB Stats API Wrapper", ["Python", "APIs", "Git"], "Added stacked version of boxscore", boxscore, "https://github.com/zkornbluth/MLB-StatsAPI"),
    new Project(ProjectType.InReview, "Guitar Music Theory Dashboard", ["JavaScript", "HTML/CSS", "Git"], "Modified tuning selection UI", gtrcof, "https://github.com/zkornbluth/gtr-cof"),
    new Project(ProjectType.InReview, "Baseball Scorecard Generator", ["Python", "Git"], "Fixed broken class _asdict function", asdict, "https://github.com/zkornbluth/baseball"),
    new Project(ProjectType.InReview, "Plotly Example Datasets", ["Markdown", "Git"], "Updated broken README links", plotly, "https://github.com/zkornbluth/datasets")
];

export {projects};