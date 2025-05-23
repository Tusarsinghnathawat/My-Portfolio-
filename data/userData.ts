export interface PersonalInfo {
  name: string;
  profession: string;
  email: string;
  github: string;
  twitter: string;
  linkedin: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  link: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  Livelink: string;
  gitHubLink: string;
  date: string;
}

export interface LastUpdated {
  date: string;
  time: string;
}

export interface UserData {
  personalInfo: PersonalInfo;
  about: string;
  // experience: Experience[];
  projects: Project[];
  lastUpdated: LastUpdated;
}

const userData: UserData = {
  personalInfo: {
    name: "TUSHAR SINGH NATHAWAT",
    profession: "SOFTWARE ENGINEER",
    email: "nathawattusarsingh@gmail.com",
    github: "https://github.com/Tusarsinghnathawat",
    twitter: "https://x.com/tusharsinghtwt",
    linkedin: "https://www.linkedin.com/in/tusar-singh-nathawat-a615bb253/?originalSubdomain=in",
  },
  about:
    "Hi, I'm Tushar. A software engineer with a passion for clean code, backend logic, and problem-solving. Strong in C++ and problem-solving with design thinking — getting 1% better every day.",
  // experience: [],
  projects: [
    {
      title: "Contact Manager",
      description:
        "A simple contact management system implemented in C++ that allows users to add, view, search, and delete contacts with features like phone number, name, address, and description management.",
      tags: [
        "C++",
        "DATA STRUCTURES",
        "FILE HANDLING",
        "OOP",
        "CONSOLE APPLICATION"
      ],
      Livelink: "https://github.com/Tusarsinghnathawat/Contact-Manager",
      gitHubLink: "https://github.com/Tusarsinghnathawat/Contact-Manager",
      date: "SEP 2024",
    },
    {
      title: "Daily-Drill",
      description:
        "A productivity and learning tracking platform featuring a visual learning calendar, streak tracker, and Pomodoro timer to help users build consistent learning habits.",
      tags: [
        "NEXT.JS",
        "REACT",
        "TAILWIND CSS",
        "TYPESCRIPT",
        "LOCAL STORAGE"
      ],
      Livelink: "https://daily-drill.vercel.app/",
      gitHubLink: "https://github.com/Tusarsinghnathawat/Daily_Drill",
      date: "MAY 2025",
    },
    {
      title: "Guess-the-Number",
      description:
        "A fun and interactive number guessing game where players try to guess a randomly generated number within a limited number of attempts.",
      tags: [
        "JAVASCRIPT",
        "HTML",
        "CSS",
        "DOM MANIPULATION",
        "GAME LOGIC"
      ],
      Livelink: "https://guess-the-number-orcin-one.vercel.app/",
      gitHubLink: "https://github.com/Tusarsinghnathawat/js_mini_projects/tree/main/Guss%20the%20Number",
      date: "DEC 2024",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern and responsive portfolio website showcasing my projects, skills, and experience built with Next.js and Tailwind CSS.",
      tags: [
        "NEXT.JS",
        "REACT",
        "TAILWIND CSS",
        "TYPESCRIPT",
        "RESPONSIVE DESIGN"
      ],
      Livelink: "",
      gitHubLink: "https://github.com/Tusarsinghnathawat",
      date: "APR 2025",
    }
  ],
  lastUpdated: {
    date: "MAY 23, 2024",
    time: "01:00 PM IST",
  },
};

export default userData;
