"use client";

import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navigation />

      {/* Hero Section */}
      <section
        id="home"
        className="pt-20 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Hej, jag är{" "}
            <span className="text-blue-600 dark:text-blue-400">Nishune</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Utvecklare med passion för att skapa moderna webbapplikationer och
            digitala upplevelser.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Kontakta mig
            </button>
            <button
              onClick={() =>
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Se mina projekt
            </button>
          </div>
        </div>
      </section>

      {/* Om mig Section */}
      <section
        id="about"
        className="py-20 bg-gray-50 dark:bg-gray-800 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Om mig
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Här kommer information om mig att visas...
          </p>
        </div>
      </section>

      {/* Projekt Section */}
      <section
        id="projects"
        className="py-20 bg-white dark:bg-gray-900 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Mina projekt
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Här kommer mina projekt att visas...
          </p>
        </div>
      </section>

      {/* Kontakt Section */}
      <section
        id="contact"
        className="py-20 bg-gray-50 dark:bg-gray-800 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Kontakta mig
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Här kommer kontaktinformation att visas...
          </p>
        </div>
      </section>
    </div>
  );
}
