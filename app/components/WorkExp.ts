export class WorkExp {
    title: string;
    company: string;
    years: string;
    description: string;
    technologies: string[];

    constructor(title: string, company: string, years: string, description: string, technologies: string[]) {
        this.title = title;
        this.company = company;
        this.years = years;
        this.description = description;
        this.technologies = technologies;
    }
}

const workExps: WorkExp[] = [
    new WorkExp("Freelance AI Consultant", "Horizon Media", "2025-present", "Automating company analysis through ChatGPT and Gemini", ["LLMs"]),
    new WorkExp("Software Developer", "Epic Systems", "2021-2023", "Placeholder", ["React", "TypeScript", "C#", "GT.M/Cache"]),
    new WorkExp("Software Development Engineer Intern", "Amazon", "Summer 2020", "Designed and developed command-line package to extract Python code from Jupyter notebook and ship to review", ["Python", "Jupyter"]),
    new WorkExp("Software Development Engineer Intern", "Amazon", "Summer 2019", "Created set of APIs to act as data access layer between database and web service", ["Java", "APIs"]),
    new WorkExp("Tech Intern", "Exiger", "Summer 2018", "Conducted QA on data scraping and survey software", ["Quality Assurance"])
]

export {workExps}