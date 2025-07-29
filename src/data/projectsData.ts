export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  githubUrl: string;
  demoUrl?: string;
  category: "fullstack" | "frontend" | "backend" | "project-management";
}

export const projects: Project[] = [
  {
    id: "wordle-fullstack",
    title: "Wordle Fullstack",
    description:
      "En fullstack implementation av det populära ordspelet Wordle med anpassningsbar svårighetsgrad, poängsystem och leaderboard.",
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
    features: [
      "Anpassningsbar svårighetsgrad (4-9 bokstäver)",
      "Poängsystem baserat på gissningar och tid",
      "Server-renderad leaderboard",
      "Responsiv design med dark theme",
      "REST API med dokumentation",
      "Enhetstester med Jest",
    ],
    githubUrl: "https://github.com/Nishune/wordle-fullstack",
    category: "fullstack",
  },
  {
    id: "hacker-escape-room",
    title: "Hacker Escape Room Website",
    description:
      "En modern webbplats för Hacker Escape Room med fokus på användarupplevelse och responsiv design. Byggd med ren HTML, SCSS och JavaScript.",
    image: "/projects/hacker-escape-room-html-css.jpg",
    technologies: ["HTML5", "SCSS", "JavaScript", "CSS3", "Responsive Design"],
    features: [
      "Modern och ren design",
      "Responsiv layout för alla enheter",
      "Interaktiva element med JavaScript",
      "SCSS för strukturerad styling",
      "Optimerad användarupplevelse",
    ],
    githubUrl: "https://github.com/Nishune/Hacker_Escape_Room_Website",
    category: "frontend",
  },
  {
    id: "kino-fullstack",
    title: "Kino Fullstack - Grupprojekt",
    description:
      "En fullstack biografapplikation utvecklad i grupp med 7 utvecklare. Projektet inkluderar användarhantering, filmbokning, och deployment. Fokus på Git-workflow med pull requests och kodgranskning.",
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
    features: [
      "Användarregistrering och inloggning",
      "Medlemssidor med sessionshantering",
      "E2E-testning med Cypress",
      "Enhetstester med Jest",
      "Git-workflow med pull requests",
      "Deployment på Vercel",
      "Gruppsamarbete med 7 utvecklare",
    ],
    githubUrl: "https://github.com/Nishune/Kino-Fullstack",
    demoUrl: "https://mock-cinema-xi.vercel.app/",
    category: "fullstack",
  },
  {
    id: "kino-backend",
    title: "Kino Backend API - Grupprojekt",
    description:
      "En omfattande REST API för biografsystem utvecklad i grupp. Inkluderar användarautentisering, filmrecensioner, visningar och komplett API-dokumentation.",
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
    features: [
      "REST API med komplett dokumentation",
      "JWT-baserad autentisering",
      "Filmrecensioner med pagination",
      "Top 5 filmer baserat på betyg",
      "Visningar för kommande 5 dagar",
      "Gruppsamarbete med 7 utvecklare",
      "241 commits och pull requests",
    ],
    githubUrl: "https://github.com/viktornoskire/group_back-end_kino",
    category: "backend",
  },
  {
    id: "kino-project-management",
    title: "Kino Grupprojekt - Projektmetoder",
    description:
      "Ett biografprojekt med fokus på agila utvecklingsmetoder, Scrum och Kanban. Träning på projektorganisation, issuehantering och teamsamarbete inom mjukvaruutveckling.",
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
    features: [
      "Agila utvecklingsmetoder (Scrum/Kanban)",
      "EPIC-struktur för user stories",
      "17 öppna + 46 stängda issues",
      "Strukturerad projektorganisation",
      "Teamsamarbete med 7 utvecklare",
      "Git workflow och branch management",
      "234 commits med kodgranskning",
    ],
    githubUrl: "https://github.com/Nishune/Kino_Group_Project",
    category: "project-management",
  },
];
