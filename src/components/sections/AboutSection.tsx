export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 bg-gray-50 dark:bg-gray-800 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Om mig
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-6 text-left">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Jag heter <span className="font-semibold text-blue-600 dark:text-blue-400">Rikard Engström</span>, 
            född 1989, och är 36 år. Under tolv år arbetade jag inom Försvarsmakten, främst i den 
            insatsberedda skyddsstyrkan, men även med tunga fordon inom fältarbetarplutonen. Den tiden 
            formade mig som person. Jag lärde mig att arbeta under press, samarbeta effektivt och att 
            alltid sträva efter att utvecklas.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Efter avslutad militär tjänst valde jag att rikta om mitt fokus och började studera 
            <span className="font-semibold text-blue-600 dark:text-blue-400"> Digital tjänsteutveckling</span> vid 
            Luleå tekniska universitet. Där fick jag en bred förståelse för hur IT kan användas för att 
            utveckla och effektivisera organisationer. Jag fördjupade mig inom användarupplevelse (UX), 
            datadriven utveckling och hur digitala tjänster kan skapa verkligt värde för både användare 
            och företag.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Det var dock under studietiden jag upptäckte mitt verkliga intresse: 
            <span className="font-semibold text-blue-600 dark:text-blue-400"> programmering</span>. För att gå 
            djupare in i det valde jag att läsa vidare till Fullstackutvecklare inom Java och JavaScript 
            på Lernia Yrkeshögskola, där jag nu bygger vidare på mina tekniska färdigheter.
          </p>

          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed italic">
              Som person är jag <span className="font-semibold">driven</span>, <span className="font-semibold">nyfiken</span> och 
              <span className="font-semibold"> lösningsorienterad</span>. Kollegor beskriver mig som en person med 
              hög motivation, stor hjälpsamhet och en förmåga att sprida energi i gruppen. Jag strävar 
              alltid efter att utvecklas, både individuellt och tillsammans med teamet, och jag tror 
              starkt på att arbetsglädje är en nyckel till framgång.
            </p>
          </div>
        </div>

        {/* Skills/Highlights */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">12+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">År inom Försvarsmakten</div>
          </div>
          
          <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">UX</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">Användarupplevelse</div>
          </div>
          
          <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">Full Stack</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">Java & JavaScript</div>
          </div>
        </div>
      </div>
    </section>
  );
}
