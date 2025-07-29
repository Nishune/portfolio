import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutSection() {
  const { t } = useLanguage();
  return (
    <section
      id="about"
      className="py-20 bg-gray-50 dark:bg-gray-800 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t("about.title")}
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-6 text-left">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {t("about.paragraph1")}
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {t("about.paragraph2")}
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {t("about.paragraph3")}
          </p>

          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed italic">
              {t("about.quote")}
            </p>
          </div>
        </div>

        {/* Skills/Highlights */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              12+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">
              {t("about.military")}
            </div>
          </div>

          <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              UX
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">
              {t("about.ux")}
            </div>
          </div>

          <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              Full Stack
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">
              {t("about.fullstack")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
