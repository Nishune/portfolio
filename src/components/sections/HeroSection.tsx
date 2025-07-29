import Image from "next/image";
import { Download } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { trackDownload, trackButtonClick } from "@/hooks/useAnalytics";

export default function HeroSection() {
  const { t } = useLanguage();
  return (
    <section
      id="home"
      className="pt-18 pb-12 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-6">
            <Image
              src="/profilePicture.jpg"
              alt="Rikard Engström - Profilbild"
              fill
              sizes="(max-width: 640px) 128px, 160px"
              className="rounded-full object-cover shadow-lg border-4 border-white dark:border-gray-800"
              priority
            />
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          <span className="hidden sm:inline">{t("hero.greeting")} </span>
          <span className="text-blue-600 dark:text-blue-400">
            Rikard Engström
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          {t("hero.description")}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => {
              trackButtonClick("Contact", "hero");
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
          >
            {t("hero.contact")}
          </button>

          <button
            onClick={() => {
              trackButtonClick("View Projects", "hero");
              document
                .querySelector("#projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-6 py-3 rounded-lg font-medium transition-colors duration-200"
          >
            {t("hero.projects")}
          </button>

          <a
            href="/CV - Rikard Engstrom.pdf"
            download="CV - Rikard Engstrom.pdf"
            onClick={() => trackDownload("CV - Rikard Engstrom.pdf")}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
          >
            <Download className="h-4 w-4" />
            {t("hero.downloadCV")}
          </a>
        </div>
      </div>
    </section>
  );
}
