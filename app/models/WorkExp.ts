interface WorkExp {
    title: string;
    company: string;
    years: string;
    description: string;
    technologies: string[];
}

export const workExps: WorkExp[] = [
    { title: "Freelance AI Consultant", company: "Horizon Media", years: "2025", description: "Automated company analysis through ChatGPT and Gemini", technologies: ["AI", "LLMs"] },
    { title: "Software Developer", company: "Epic Systems", years: "2021-2023", description: "Developed new features and fixed bugs for orthopedics and rheumatology practices", technologies: ["React", "TypeScript", "C#", "GT.M/Cache"] },
    { title: "Software Development Engineer Intern", company: "Amazon", years: "Summer 2020", description: "Designed and developed command-line package to extract Python code from Jupyter notebook and ship to review", technologies: ["Python", "Jupyter"] },
    { title: "Software Development Engineer Intern", company: "Amazon", years: "Summer 2019", description: "Created set of APIs to act as data access layer between database and web service", technologies: ["Java", "APIs"] },
    { title: "Tech Intern", company: "Exiger", years: "Summer 2018", description: "Conducted QA on data scraping and survey software", technologies: ["Quality Assurance"] }
]