import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#090a0c",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Amogh Deodhar — Engineering Student | AI & Full Stack Developer",
  description:
    "Engineering student passionate about software engineering, artificial intelligence and automation. Building practical solutions through technology.",
  keywords: [
    "Amogh Deodhar",
    "GenAI Backend Engineer",
    "RAG",
    "FastAPI",
    "LangChain",
    "Full Stack Developer",
    "AI Agents",
  ],
  authors: [{ name: "Amogh Deodhar", url: "https://github.com/Gigacorebess" }],
  openGraph: {
    title: "Amogh Deodhar — Engineering Student | AI & Full Stack Developer",
    description:
      "Building things. Exploring ideas. Making them useful. Personal portfolio of Amogh Deodhar.",
    url: "https://amoghdeodhar.dev",
    siteName: "Amogh Deodhar Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-[#090a0c] text-[#f4f4f6] antialiased selection:bg-white/20 selection:text-white">
        <div className="relative min-h-screen flex flex-col justify-between">
          {/* Subtle ambient lighting inspired by Linear/Raycast */}
          <div className="fixed inset-0 pointer-events-none z-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-white/[0.035] via-white/[0.01] to-transparent blur-3xl opacity-70" />
            <div className="absolute inset-0 bg-grid-subtle opacity-40 radial-mask" />
          </div>

          <div className="relative z-10 flex-1 flex flex-col">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
