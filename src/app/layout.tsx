import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rikard Engström - Fullstack Developer",
  description:
    "Portfolio för Rikard Engström - Fullstack utvecklare med passion för moderna webbapplikationer och digitala upplevelser.",
  keywords: [
    "Fullstack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Portfolio",
    "Web Development",
  ],
  authors: [{ name: "Rikard Engström" }],
  openGraph: {
    title: "Rikard Engström - Fullstack Developer",
    description: "Portfolio för Rikard Engström - Fullstack utvecklare",
    type: "website",
    locale: "sv_SE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-900 transition-colors duration-300`}
      >
        <GoogleAnalytics
          measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ""}
        />
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
