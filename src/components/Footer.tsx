"use client";

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-slate-300 via-blue-300 to-slate-300 bg-clip-text text-transparent">
              Rikard Engström
            </h3>
            <p className="text-gray-400 mt-2">Fullstack Developer</p>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/Nishune"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-12 h-12 bg-gray-800 dark:bg-gray-900 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6 text-gray-300 group-hover:text-white transition-colors duration-300" />
            </a>

            <a
              href="https://www.linkedin.com/in/rikard-engstr%C3%B6m-171724253/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg hover:bg-blue-500 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6 text-white group-hover:text-blue-100 transition-colors duration-300" />
            </a>

            <a
              href="mailto:rikardengstrom89@gmail.com"
              className="group flex items-center justify-center w-12 h-12 bg-green-600 rounded-lg hover:bg-green-500 transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail className="h-6 w-6 text-white group-hover:text-green-100 transition-colors duration-300" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center justify-center w-10 h-10 bg-gray-800 dark:bg-gray-700 rounded-full hover:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-110"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5 text-gray-300 group-hover:text-white transition-colors duration-300" />
          </button>

          <div className="text-center pt-8 border-t border-gray-800 dark:border-gray-800 w-full">
            <p className="text-gray-400 text-sm">
              © {currentYear} Rikard Engström.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
