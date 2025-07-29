"use client";

import Image from "next/image";
import {
  ExternalLink,
  Github,
  Code,
  Database,
  Palette,
  Users,
} from "lucide-react";
import { Project } from "@/data/projectsData";
import { useLanguage } from "@/contexts/LanguageContext";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useLanguage();

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
    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64 bg-gray-200 dark:bg-gray-700">
        <Image
          src={project.image}
          alt={`${project.title} screenshot`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
          {t(project.descriptionKey)}
        </p>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
            {t("projects.technologies")}
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
            {t("projects.features")}
          </h4>
          <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
            {project.featuresKeys.slice(0, 3).map((featureKey, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                {t(featureKey)}
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
  );
}
