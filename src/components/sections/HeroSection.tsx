import Image from "next/image";
import { Download } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="pt-18 pb-12 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="text-center max-w-4xl mx-auto">
        {/* Profilbild */}
        <div className="mb-8">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-6">
            <Image
              src="/profilePicture.jpg"
              alt="Rikard Engström - Profilbild"
              fill
              className="rounded-full object-cover shadow-lg border-4 border-white dark:border-gray-800"
              priority
            />
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Mitt namn är{" "}
          <span className="text-blue-600 dark:text-blue-400">
            Rikard Engström
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Utvecklare med passion för att skapa moderna webbapplikationer och
          digitala upplevelser.
        </p>

        {/* Knappar */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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

          {/* CV Nedladdning */}
          <a
            href="/CV - Rikard Engstrom.pdf"
            download="CV - Rikard Engstrom.pdf"
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
          >
            <Download className="h-4 w-4" />
            Ladda ner CV
          </a>
        </div>
      </div>
    </section>
  );
}
