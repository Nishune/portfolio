export interface Project {
  id: string;
  title: string;
  descriptionKey: string; // Changed to use translation key
  image: string;
  technologies: string[];
  featuresKeys: string[]; // Changed to use translation keys
  githubUrl: string;
  demoUrl?: string;
  category: "fullstack" | "frontend" | "backend" | "project-management";
}

export const projects: Project[] = [
  {
    id: "wordle-fullstack",
    title: "Wordle Fullstack",
    descriptionKey: "project.wordle.description",
    image: "/projects/wordle-fullstack.jpg",
    technologies: [
      "React 19",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Material UI",
      "Jest",
    ],
    featuresKeys: [
      "project.wordle.feature1",
      "project.wordle.feature2",
      "project.wordle.feature3",
    ],
    githubUrl: "https://github.com/Nishune/wordle-fullstack",
    category: "fullstack",
  },
  {
    id: "hacker-escape-room",
    title: "Hacker Escape Room Website",
    descriptionKey: "project.hacker.description",
    image: "/projects/hacker-escape-room-html-css.jpg",
    technologies: ["HTML5", "SCSS", "JavaScript", "CSS3", "Responsive Design"],
    featuresKeys: [
      "project.hacker.feature1",
      "project.hacker.feature2",
      "project.hacker.feature3",
    ],
    githubUrl: "https://github.com/Nishune/Hacker_Escape_Room_Website",
    category: "frontend",
  },
  {
    id: "kino-fullstack",
    title: "Kino Fullstack - Grupprojekt",
    descriptionKey: "project.kino-fullstack.description",
    image: "/projects/kino-bio-fullstack.jpg",
    technologies: [
      "Next.js",
      "TypeScript",
      "Material UI",
      "Tailwind CSS",
      "Cypress",
      "Jest",
      "Vercel",
    ],
    featuresKeys: [
      "project.kino-fullstack.feature1",
      "project.kino-fullstack.feature2",
      "project.kino-fullstack.feature3",
    ],
    githubUrl: "https://github.com/Nishune/Kino-Fullstack",
    demoUrl: "https://mock-cinema-xi.vercel.app/",
    category: "fullstack",
  },
  {
    id: "kino-backend",
    title: "Kino Backend API - Grupprojekt",
    descriptionKey: "project.kino-backend.description",
    image: "/projects/kino-bio-backend-restapi.jpg",
    technologies: [
      "JavaScript",
      "Node.js",
      "Express",
      "REST API",
      "JWT",
      "Pug",
      "SCSS",
    ],
    featuresKeys: [
      "project.kino-backend.feature1",
      "project.kino-backend.feature2",
      "project.kino-backend.feature3",
    ],
    githubUrl: "https://github.com/viktornoskire/group_back-end_kino",
    category: "backend",
  },
  {
    id: "kino-project-management",
    title: "Kino Grupprojekt - Projektmetoder",
    descriptionKey: "project.kino-project.description",
    image: "/projects/kino-bio-project.jpg",
    technologies: [
      "JavaScript",
      "SCSS",
      "HTML",
      "Vite",
      "Git",
      "GitHub Issues",
      "Scrum",
    ],
    featuresKeys: [
      "project.kino-project.feature1",
      "project.kino-project.feature2",
      "project.kino-project.feature3",
    ],
    githubUrl: "https://github.com/Nishune/Kino_Group_Project",
    category: "project-management",
  },
];
