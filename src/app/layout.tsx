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
  metadataBase: new URL("https://rikard-engstrom.vercel.app"),
  openGraph: {
    title: "Rikard Engström - Fullstack Developer",
    description: "Portfolio för Rikard Engström - Fullstack utvecklare med passion för moderna webbapplikationer och digitala upplevelser.",
    type: "website",
    locale: "sv_SE",
    url: "https://rikard-engstrom.vercel.app",
    siteName: "Rikard Engström Portfolio",
    images: [
      {
        url: "/projects/metapicture.jpg",
        width: 1200,
        height: 630,
        alt: "Rikard Engström - Fullstack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rikard Engström - Fullstack Developer",
    description: "Portfolio för Rikard Engström - Fullstack utvecklare med passion för moderna webbapplikationer och digitala upplevelser.",
    images: ["/projects/metapicture.jpg"],
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
