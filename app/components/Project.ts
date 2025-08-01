export class Project {
    name: string;
    technologies: string[];
    github: string;
    pageLink: string | null;

    constructor(name: string, technologies: string[], github: string, pageLink?: string) {
        this.name = name;
        this.technologies = technologies;
        this.github = github;
        this.pageLink = pageLink;
    }
}

export const projects: Project[] = [
    new Project("Wheel of Fortune Dashboard", ["R", "Shiny"], "https://github.com/zkornbluth/WheelOfFortune", "http://zkornbluth.github.io/WheelOfFortune"),
    new Project("Password Generator", ["Swift"], "https://github.com/zkornbluth/PasswordGenerator"),
    new Project("Job Posting Filtering Tool", ["Python", "pandas", "JobSpy"], "https://github.com/zkornbluth/job_searcher"),
    new Project("Typing Speed Test", ["React", "TypeScript", "Next.js"], "https://github.com/zkornbluth/typing-test", "https://zkornbluth.github.io/typing-test"),
    new Project("To Do Manager", ["React", "TypeScript", "Next.js"], "https://github.com/zkornbluth/todo-manager", "https://zkornbluth.github.io/todo-manager"),
    new Project("File Organizer", ["Java", "JavaFX"], "https://github.com/zkornbluth/FileOrganizer"),
    new Project("Tkinter Weather Widget", ["Python", "tkinter"], "https://github.com/zkornbluth/weather_app")
];