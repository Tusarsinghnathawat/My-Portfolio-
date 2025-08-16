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
      title: "My-tube",
      description:
        "Built Mytube, a full-stack social platform blending video hosting (YouTube) and microblogging (Twitter) features with uploads, subscriptions, comments, playlists, and tweet-like interactions.",
      tags: [
        "Nodejs",
        "MONGODB",
        "EXPRESS",
        "RESTful APIs",
        "JWT Authentication",
        "CLOUD STORAGE"
      ],
      Livelink: "https://mytube-inky.vercel.app/",
      gitHubLink: "https://github.com/Tusarsinghnathawat/Mytube",
      date: "MAY 2025",
    },
    {
      title: "Real-Time location tracker",
      description:
        "Developed a real-time location tracking app with room-based collaboration, live map updates using Leaflet + OpenStreetMap, and instant synchronization powered by Socket.IO.",
      tags: [
        "socket.IO",
        "node.js",
        "Express.js",
        "Leaflet.js",
        "geolocation API",
        "web sockets",
      ],
      Livelink: "https://real-time-tracking-app-7qho.onrender.com/",
      gitHubLink: "https://github.com/Tusarsinghnathawat/Real-Time-Tracking-app",
      date: "DEC 2024",
    },
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
