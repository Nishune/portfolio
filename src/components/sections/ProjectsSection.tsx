"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import {
  ExternalLink,
  Github,
  Code,
  Database,
  Palette,
  Users,
} from "lucide-react";
import { projects } from "@/data/projectsData";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ProjectsSection() {
  const [visibleCount, setVisibleCount] = useState(4);
  const { t } = useLanguage();

  useEffect(() => {
    const updateVisibleCount = () => {
      setVisibleCount(window.innerWidth < 768 ? 3 : 4);
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

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
            {t("projects.title")}
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t("projects.description")}
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
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAAAB//EAB4RAAICAgIDAAAAAAAAAAAAAAECABEDIRIxkbHB/9oADAMBAAIRAxEAPwCdABmyuL6"
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
                    {project.featuresKeys
                      .slice(0, 3)
                      .map((featureKey, index) => (
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
          ))}
        </div>

        {hasMoreProjects && (
          <div className="text-center mt-8">
            <button
              onClick={showMoreProjects}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200 font-medium"
            >
              {t("projects.showMore")} ({projects.length - visibleCount}{" "}
              {t("projects.remaining")})
            </button>
          </div>
        )}

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {t("projects.morecoming")}
          </p>
          <a
            href="https://github.com/Nishune"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200"
          >
            <Github className="h-5 w-5" />
            {t("projects.viewAll")}
          </a>
        </div>
      </div>
    </section>
  );
}
