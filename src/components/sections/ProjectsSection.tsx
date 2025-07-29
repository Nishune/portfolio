"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ExternalLink,
  Github,
  Code,
  Database,
  Palette,
  Users,
} from "lucide-react";

interface Project {
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

const projects: Project[] = [
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

export default function ProjectsSection() {
  const [visibleCount, setVisibleCount] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 768 ? 3 : 4;
    }
    return 4;
  });

  const getItemsPerPage = () => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 768 ? 3 : 4;
    }
    return 4;
  };

  const showMoreProjects = () => {
    const itemsPerPage = getItemsPerPage();
    setVisibleCount((prev) => prev + itemsPerPage);
  };

  const visibleProjects = projects.slice(0, visibleCount);
  const hasMoreProjects = visibleCount < projects.length;
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "fullstack":
        return <Database className="h-5 w-5" />;
      case "frontend":
        return <Palette className="h-5 w-5" />;
      case "backend":
        return <Code className="h-5 w-5" />;
      case "project-management":
        return <Users className="h-5 w-5" />;
      default:
        return <Code className="h-5 w-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "fullstack":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      case "frontend":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "backend":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "project-management":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200";
    }
  };

  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-gray-900 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Mina projekt
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            En samling av projekt jag har utvecklat under min utbildning, som
            visar mina färdigheter inom fullstack-utveckling, frontend-design
            och backend-arkitektur.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64 bg-gray-200 dark:bg-gray-700">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <span
                    className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                      project.category
                    )}`}
                  >
                    {getCategoryIcon(project.category)}
                    {project.category}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Teknologier:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Huvudfunktioner:
                  </h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    {project.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {hasMoreProjects && (
          <div className="text-center mt-8">
            <button
              onClick={showMoreProjects}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200 font-medium"
            >
              Visa fler projekt ({projects.length - visibleCount} kvar)
            </button>
          </div>
        )}

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Fler projekt kommer att läggas till över tid.
          </p>
          <a
            href="https://github.com/Nishune"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200"
          >
            <Github className="h-5 w-5" />
            Se alla projekt på GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
