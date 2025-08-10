import wheeloffortune from '../assets/wheeloffortune-2.png';
import passwordgenerator from '../assets/passwordgenerator.png';
import weather from '../assets/weather-2.png';
import typing from '../assets/typing.png';
import todos from '../assets/todos.png';
import fileorganizer from '../assets/fileorganizer.png';
import jobsearcher from '../assets/jobsearcher.png';

export class Project {
    name: string;
    technologies: string[];
    github: string;
    pageLink: string | null;
    description: string;
    image: any | null;

    constructor(name: string, technologies: string[], description: string, image: any, github: string, pageLink?: string) {
        this.name = name;
        this.technologies = technologies;
        this.github = github;
        this.pageLink = pageLink;
        this.description = description;
        this.image = image;
    }
}

const projects: Project[] = [
    new Project("Wheel of Fortune Dashboard", ["R", "Shiny"], "Improve your Bonus Round puzzle solving", wheeloffortune, "https://github.com/zkornbluth/WheelOfFortune", "http://zkornbluth.github.io/WheelOfFortune"),
    new Project("Menu Bar Password Generator", ["Swift"], "Generate random passwords with rules", passwordgenerator, "https://github.com/zkornbluth/PasswordGenerator"),
    new Project("Job Posting Filtering Tool", ["Python", "pandas"], "Scrape Indeed & LinkedIn with filters", jobsearcher, "https://github.com/zkornbluth/job_searcher"),
    new Project("To Do Manager", ["React", "TypeScript", "Next.js"], "Track your tasks with easy editing", todos, "https://github.com/zkornbluth/todo-manager", "https://zkornbluth.github.io/todo-manager"),
    new Project("File Organizer", ["Java", "JavaFX"], "Sort files into folders by extension", fileorganizer, "https://github.com/zkornbluth/FileOrganizer"),
    new Project("Weather Widget", ["Python", "tkinter"], "View real-time weather data by location", weather, "https://github.com/zkornbluth/weather_app"),
    new Project("Typing Speed Test", ["React", "TypeScript", "Next.js"], "Measure your words per minute & accuracy", typing, "https://github.com/zkornbluth/typing-test", "https://zkornbluth.github.io/typing-test")
];

export {projects};