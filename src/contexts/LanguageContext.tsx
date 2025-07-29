"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "sv" | "en";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const translations = {
  sv: {
    // Navigation
    "nav.home": "Hem",
    "nav.about": "Om mig",
    "nav.projects": "Projekt",
    "nav.contact": "Kontakt",

    // Hero Section
    "hero.greeting": "Mitt namn är",
    "hero.description":
      "Utvecklare med passion för att skapa moderna webbapplikationer och digitala upplevelser.",
    "hero.contact": "Kontakta mig",
    "hero.projects": "Se mina projekt",
    "hero.downloadCV": "Ladda ner CV",

    // About Section
    "about.title": "Om mig",
    "about.paragraph1":
      "Jag heter Rikard Engström, född 1989, och är 36 år. Under tolv år arbetade jag inom Försvarsmakten, främst i den insatsberedda skyddsstyrkan, men även med tunga fordon inom fältarbetarplutonen. Den tiden formade mig som person. Jag lärde mig att arbeta under press, samarbeta effektivt och att alltid sträva efter att utvecklas.",
    "about.paragraph2":
      "Efter avslutad militär tjänst valde jag att rikta om mitt fokus och började studera Digital tjänsteutveckling vid Luleå tekniska universitet. Där fick jag en bred förståelse för hur IT kan användas för att utveckla och effektivisera organisationer. Jag fördjupade mig inom användarupplevelse (UX), datadriven utveckling och hur digitala tjänster kan skapa verkligt värde för både användare och företag.",
    "about.paragraph3":
      "Det var dock under studietiden jag upptäckte mitt verkliga intresse: programmering. För att gå djupare in i det valde jag att läsa vidare till Fullstackutvecklare inom Java och JavaScript på Lernia Yrkeshögskola, där jag nu bygger vidare på mina tekniska färdigheter.",
    "about.quote":
      "Som person är jag driven, nyfiken och lösningsorienterad. Kollegor beskriver mig som en person med hög motivation, stor hjälpsamhet och en förmåga att sprida energi i gruppen. Jag strävar alltid efter att utvecklas, både individuellt och tillsammans med teamet, och jag tror starkt på att arbetsglädje är en nyckel till framgång.",
    "about.military": "År inom Försvarsmakten",
    "about.ux": "Användarupplevelse",
    "about.fullstack": "Java & JavaScript",

    // Projects Section
    "projects.title": "Mina projekt",
    "projects.description":
      "En samling av projekt jag har utvecklat under min utbildning, som visar mina färdigheter inom fullstack-utveckling, frontend-design och backend-arkitektur.",
    "projects.technologies": "Teknologier:",
    "projects.features": "Huvudfunktioner:",
    "projects.showMore": "Visa fler projekt",
    "projects.remaining": "kvar",
    "projects.morecoming": "Fler projekt kommer att läggas till över tid.",
    "projects.viewAll": "Se alla projekt på GitHub",

    // Project descriptions
    "project.wordle.description":
      "En fullstack implementation av det populära ordspelet Wordle med anpassningsbar svårighetsgrad, poängsystem och leaderboard.",
    "project.wordle.feature1": "Anpassningsbar svårighetsgrad (4-9 bokstäver)",
    "project.wordle.feature2": "Poängsystem baserat på gissningar och tid",
    "project.wordle.feature3": "Server-renderad leaderboard",
    "project.hacker.description":
      "En modern webbplats för Hacker Escape Room med fokus på användarupplevelse och responsiv design. Byggd med ren HTML, SCSS och JavaScript.",
    "project.hacker.feature1": "Modern och ren design",
    "project.hacker.feature2": "Responsiv layout för alla enheter",
    "project.hacker.feature3": "Interaktiva element med JavaScript",
    "project.kino-fullstack.description":
      "En fullstack biografapplikation utvecklad i grupp med 7 utvecklare. Projektet inkluderar användarhantering, filmbokning, och deployment. Fokus på Git-workflow med pull requests och kodgranskning.",
    "project.kino-fullstack.feature1": "Användarregistrering och inloggning",
    "project.kino-fullstack.feature2": "Medlemssidor med sessionshantering",
    "project.kino-fullstack.feature3": "E2E-testning med Cypress",
    "project.kino-backend.description":
      "En omfattande REST API för biografsystem utvecklad i grupp. Inkluderar användarautentisering, filmrecensioner, visningar och komplett API-dokumentation.",
    "project.kino-backend.feature1": "REST API med komplett dokumentation",
    "project.kino-backend.feature2": "JWT-baserad autentisering",
    "project.kino-backend.feature3": "Filmrecensioner med pagination",
    "project.kino-project.description":
      "Ett biografprojekt med fokus på agila utvecklingsmetoder, Scrum och Kanban. Träning på projektorganisation, issuehantering och teamsamarbete inom mjukvaruutveckling.",
    "project.kino-project.feature1": "Agila utvecklingsmetoder (Scrum/Kanban)",
    "project.kino-project.feature2": "EPIC-struktur för user stories",
    "project.kino-project.feature3": "17 öppna + 46 stängda issues",

    // Contact Section
    "contact.title": "Kontakta mig",
    "contact.description": "Har du en spännande möjlighet? Låt oss prata!",
    "contact.name": "Namn",
    "contact.email": "E-postadress",
    "contact.message": "Meddelande",
    "contact.send": "Skicka meddelande",
    "contact.sending": "Skickar...",
    "contact.success": "Meddelande skickat!",
    "contact.successMessage":
      "Ditt meddelande har skickats till mig. Jag återkommer så snart som möjligt!",
    "contact.newMessage": "Skicka ett nytt meddelande",
    "contact.formTitle": "Skicka ett meddelande",
    "contact.namePlaceholder": "Ditt namn",
    "contact.emailPlaceholder": "din@email.se",
    "contact.messagePlaceholder": "Berätta om ditt projekt eller din idé...",
    "contact.directContact": "Eller kontakta mig direkt:",
    "contact.error": "Något gick fel. Försök igen.",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    // Hero Section
    "hero.greeting": "My name is",
    "hero.description":
      "Developer with a passion for creating modern web applications and digital experiences.",
    "hero.contact": "Contact me",
    "hero.projects": "View my projects",
    "hero.downloadCV": "Download CV",

    // About Section
    "about.title": "About me",
    "about.paragraph1":
      "My name is Rikard Engström, born in 1989, and I'm 36 years old. For twelve years I worked in the Swedish Armed Forces, primarily in the rapid response protection force, but also with heavy vehicles in the field engineer platoon. That time shaped me as a person. I learned to work under pressure, collaborate effectively and always strive to develop.",
    "about.paragraph2":
      "After completing my military service, I chose to redirect my focus and began studying Digital Service Development at Luleå University of Technology. There I gained a broad understanding of how IT can be used to develop and streamline organizations. I specialized in user experience (UX), data-driven development and how digital services can create real value for both users and companies.",
    "about.paragraph3":
      "However, it was during my studies that I discovered my true interest: programming. To delve deeper into it, I chose to continue studying as a Full Stack Developer in Java and JavaScript at Lernia Vocational College, where I am now building on my technical skills.",
    "about.quote":
      "As a person, I am driven, curious and solution-oriented. Colleagues describe me as a person with high motivation, great helpfulness and an ability to spread energy in the group. I always strive to develop, both individually and together with the team, and I strongly believe that job satisfaction is a key to success.",
    "about.military": "Years in Armed Forces",
    "about.ux": "User Experience",
    "about.fullstack": "Java & JavaScript",

    // Projects Section
    "projects.title": "My projects",
    "projects.description":
      "A collection of projects I have developed during my education, showcasing my skills in fullstack development, frontend design and backend architecture.",
    "projects.technologies": "Technologies:",
    "projects.features": "Key features:",
    "projects.showMore": "Show more projects",
    "projects.remaining": "remaining",
    "projects.morecoming": "More projects will be added over time.",
    "projects.viewAll": "View all projects on GitHub",

    // Project descriptions
    "project.wordle.description":
      "A fullstack implementation of the popular word game Wordle with customizable difficulty, scoring system and leaderboard.",
    "project.wordle.feature1": "Customizable difficulty (4-9 letters)",
    "project.wordle.feature2": "Scoring system based on guesses and time",
    "project.wordle.feature3": "Server-rendered leaderboard",
    "project.hacker.description":
      "A modern website for Hacker Escape Room with focus on user experience and responsive design. Built with pure HTML, SCSS and JavaScript.",
    "project.hacker.feature1": "Modern and clean design",
    "project.hacker.feature2": "Responsive layout for all devices",
    "project.hacker.feature3": "Interactive elements with JavaScript",
    "project.kino-fullstack.description":
      "A fullstack cinema application developed in a group with 7 developers. The project includes user management, movie booking, and deployment. Focus on Git workflow with pull requests and code review.",
    "project.kino-fullstack.feature1": "User registration and login",
    "project.kino-fullstack.feature2": "Member pages with session management",
    "project.kino-fullstack.feature3": "E2E testing with Cypress",
    "project.kino-backend.description":
      "A comprehensive REST API for cinema system developed in a group. Includes user authentication, movie reviews, showings and complete API documentation.",
    "project.kino-backend.feature1": "REST API with complete documentation",
    "project.kino-backend.feature2": "JWT-based authentication",
    "project.kino-backend.feature3": "Movie reviews with pagination",
    "project.kino-project.description":
      "A cinema project with focus on agile development methods, Scrum and Kanban. Training in project organization, issue management and teamwork in software development.",
    "project.kino-project.feature1": "Agile development methods (Scrum/Kanban)",
    "project.kino-project.feature2": "EPIC structure for user stories",
    "project.kino-project.feature3": "17 open + 46 closed issues",

    // Contact Section
    "contact.title": "Contact me",
    "contact.description": "Do you have an exciting opportunity? Let's talk!",
    "contact.name": "Name",
    "contact.email": "Email address",
    "contact.message": "Message",
    "contact.send": "Send message",
    "contact.sending": "Sending...",
    "contact.success": "Message sent!",
    "contact.successMessage":
      "Your message has been sent to me. I'll get back to you as soon as possible!",
    "contact.newMessage": "Send a new message",
    "contact.formTitle": "Send a message",
    "contact.namePlaceholder": "Your name",
    "contact.emailPlaceholder": "your@email.com",
    "contact.messagePlaceholder": "Tell me about your project or idea...",
    "contact.directContact": "Or contact me directly:",
    "contact.error": "Something went wrong. Please try again.",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("sv");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "sv" ? "en" : "sv"));
  };

  const t = (key: string): string => {
    return (
      translations[language][
        key as keyof (typeof translations)[typeof language]
      ] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
